import React, { useEffect, useState } from "react"
import axios from 'axios';
import { NumericFormat } from "react-number-format"
import { Link } from 'react-router-dom';
import ProgressBar from "../progressBar/ProgressBar";
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import { useHistory } from 'react-router-dom';
import ProgessPopupCustomer from "../progressBar/ProgressPopupCustomer";

var stompClient =null;
const Activity = () => {

  const customerID = JSON.parse(localStorage.getItem("accessToken")).customerID;
  const [histories, setHistories] = useState([]);
  const history = useHistory();
  useEffect(() => {
    loadActs();
    connect();
  }, []);

  function loadActs() {
    axios.get(`http://localhost:8081/vingig/customer/${customerID}/bookings/currentActivity`)
      .then(res => {
        const histories = res.data;
        setHistories(histories);
      })
      .catch(error => console.log(error));
  }

  async function actionAct(proServiceID, bookingID, action, total) {
    await axios.put(`http://localhost:8081/vingig/providerService/${proServiceID}/booking/${bookingID}/action/${action}/total/${total}`);
    let status = 0;
    switch(action){
      case "complete": 
        status = 2;
        break;

      case "decline": 
        status = 3;
        break;

      case "accept": 
        status = 1;
        break;

      case "cancel_provider": 
        status = 4;
        break;

      case "cancel_customer": 
        status = 5;
        break;

      case "timeout": 
        status = 6;
        break;
    }

    if (stompClient) {
      var booking = {
        bookingID: bookingID,
        proServiceID: proServiceID,
        status: status,  
        total: total,
        apartment: "customer"       
      };
      console.log(booking);
      stompClient.send("/app/booking/update", {}, JSON.stringify(booking));
    }
    loadActs();
  }

  async function timeout(proServiceID, bookingID, serviceName, customerName, providerName) {
    var load;
    await axios.put(`http://localhost:8081/vingig/providerService/${proServiceID}/booking/${bookingID}/action/timeout/total/0`)
    .then(res => {
       load = res.data;
    })
    .catch(error => console.log(error));
    if(load.status === 6){
      setCurrentBooking({...currentBooking,
        "providerName": providerName,
        "serviceName": serviceName,
        "status": "hết thời gian chờ",
        "exclamation": "Xin lỗi",
        "color": 'red',
      })
      setSeen(true);
      loadActs();
    }
  }

  async function sendMessage(bookingID) {
    await axios.post(`http://localhost:8081/vingig/booking/${bookingID}/bookingMessage`,
      {
        content: "Xin chào!",
        sendBy: true,
      }).catch(error => console.log(error));
      history.push('/customer/chat');
  }
  
  const startFrom = (unixTimestamp) =>{
    // Convert the Unix timestamp to JavaScript Date
    const dateObj = new Date(unixTimestamp);
    // Get the current date and time
    const currentDate = new Date();
    // Calculate the difference in milliseconds
    const diffInMillis = currentDate.getTime() - dateObj.getTime();
    return Math.floor(diffInMillis / 1000);
  }

  const connect =()=>{
    let Sock = new SockJS('http://localhost:8081/vingig/websocket');
    stompClient = over(Sock);
    stompClient.connect({},onConnected, onError);
}

const onConnected = () => {
    let access = JSON.parse(localStorage.getItem("accessToken"));
    let role = access.role;
    let id;
    if(role === "provider") id = access.providerID
    else id = access.customerID;
    stompClient.subscribe(`/user/${id}/`+ role + `/booking/update`, onBookingUpdate);
}

const onError = (err) => {
    console.log(err);    
}

const [currentBooking, setCurrentBooking] = useState({
  providerName: '',
  serviceName: '',
  status: '',
  exclamation: '',
  color: '',
});

const onBookingUpdate = (payload)=>{
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    let status = '';
    let exclamation = '';
    let color = '';

    switch(payloadData.status){
      case 1: 
        status = "được chấp nhận";
        exclamation = 'Thành Công';
        color = 'green'
        break;

      case 2: 
        status = "hoàn thành";
        exclamation = 'Chúc Mừng';
        color = 'green'
        break;

      case 3: 
        status = "bị từ chối";
        exclamation = 'Xin Lỗi';
        color = 'red'
        break;

      case 4: 
        status = "bị hủy";
        exclamation = 'Xin Lỗi';
        color = 'red'
        break;

      case 5: 
        status = "bị hủy";
        exclamation = 'Xin Lỗi';
        color = 'red'
        break;

      case 6: 
        status = "hết thời gian chờ";
        exclamation = 'Xin Lỗi';
        color = 'red'
        break;
    }
    setCurrentBooking({...currentBooking,
      "providerName": payloadData.providerFullName,
      "serviceName": payloadData.serviceName,
      "status": status,
      "exclamation": exclamation,
      "color": color,
    })

    setSeen(true);
    loadActs();      
}

//POPUP
const [seen, setSeen] = useState(false);

function togglePop() {
  setSeen(!seen);
};

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex containerHeight'>
          <h1> Current Activity</h1>
          <div className='cart-details'>
            {histories.length === 0 && <h1 className='no-items product'>No Current Booking</h1>}

            {histories.slice().reverse().map((item) => {
              var epochTime = item.date;

              var dateObj = new Date(epochTime);

              var date = dateObj.getDate();
              var month = dateObj.getMonth() + 1;
              var year = dateObj.getYear() - 100 + 2000;
              var hours = dateObj.getHours();
              var minutes = dateObj.getMinutes();
              var seconds = dateObj.getSeconds();

              var formattedTime =
                date.toString() + '/' +
                month.toString() + '/' +
                year.toString();
              // var formattedTime =
              //   date.toString() + '/' +
              //   month.toString() + '/' +
              //   year.toString() + ' ' +
              //   hours.toString().padStart(2, '0') + ':' +
              //   minutes.toString().padStart(2, '0') + ':' +
              //   seconds.toString().padStart(2, '0');
              return (
                <div> 
                  {item.status == 0 && startFrom(item.date) < 180?
                  <><ProgressBar duration={10} secondPassedBy={startFrom(item.date)} timeout={timeout} proServiceID ={item.proServiceID} bookingID ={item.bookingID} customerName={item.customerFullName} serviceName={item.serviceName} providerName={item.providerFullName}/></>
                  :<></>}
                <div className='cart-list product d_flex' key={item.bookingID}>
                  <div className='cart-details'>
                    <div className='img-c'>
                      <img src={item.image} alt='' />
                    </div>
                  </div>

                  <div className='cart-details'>
                    <h3>{item.serviceName}</h3>
                    <h4>
                      Provider:
                      <span>{item.providerFullName}</span>
                    </h4>
                    <h4>
                      Status:
                      <span>
                        {item.status == 0 ? "Pending" : "Accepted"}
                      </span>
                    </h4>
                    <h4>
                      Building:
                      <span>{item.buildingName}</span>
                    </h4>
                    <h4>
                      Apartment:
                      <span>{item.apartment}</span>
                    </h4>
                    <h4>
                      Unit Price:
                      <span><NumericFormat value={item.unitPrice} displayType="text" thousandSeparator={true} suffix={' VND'} /></span>
                    </h4>
                    <h4>
                      Date:
                      <span>{formattedTime}</span>
                    </h4>
                  </div>
                  <div className='cart-details'>
                    {item.status != 0 ?
                      <div className='cart-items-function'>
                        <div className='removeCart'>
                          <Link to='/customer/chat'>
                            <button className='btn-green' onClick={() => { localStorage.setItem("chatBookingID", item.bookingID); sendMessage(item.bookingID) }}>
                              Chat
                            </button>
                          </Link>
                        </div>
                      </div> :
                      <div className='cart-items-function'>
                        <div className='removeCart'>
                          <button className='btn-cancel' onClick={() => actionAct(item.proServiceID, item.bookingID, "cancel_customer", 0)}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    }
                  </div>
                </div>
                </div>
              )
            })}
          </div>

          {seen ? <ProgessPopupCustomer togglePop={togglePop} currentBooking={currentBooking} /> : null}
          

          <div className='cart-total product'>
            <h2>Number of Current Bookings</h2>
            <div className=' d_flex'>
              <h4>Total:</h4>
              <h3>{histories.length}</h3>
            </div>
          </div>
        </div >
      </section >
    </>
  )
}

export default Activity
