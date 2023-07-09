import React, { useEffect, useState } from "react"
import axios from 'axios';
import { NumericFormat } from "react-number-format"
import { Link } from 'react-router-dom';
import EditPopUp from "./EditPopUp"

function History() {
  const customerID = JSON.parse(localStorage.getItem("accessToken")).customerID;
  const [histories, setHistories] = useState([]);
  const [bookingID, setBookingID] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:8081/vingig/customer/${customerID}/bookings/history/{dateMin}/{dateMax}`)
      .then(res => {
        const histories = res.data;
        setHistories(histories);
      })
      .catch(error => console.log(error));
  }, []);

  const handleBookAgainClick = () => {
    window.scrollTo(0, 0);
  };
  const [seenEdit, setSeenEdit] = useState(false)

  function togglePopEdit() {
    setSeenEdit(!seenEdit);
  };

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex containerHeight'>
          <h1> Booking History</h1>
          <div className='cart-details'>
            {histories.length === 0 && <h1 className='no-items product'>No Booking History</h1>}

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
                <div className='cart-list product d_flex' key={item.id}>
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
                        {item.status == 2 ? "Completed" : item.status == 3 ? "Declined" : "Cancelled"}
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
                      Total Price:
                      <span><NumericFormat value={item.total} displayType="text" thousandSeparator={true} suffix={' VND'} /></span>
                    </h4>
                    <h4>
                      Date:
                      <span>{formattedTime}</span>
                    </h4>
                  </div>
                  <div className='cart-details'>
                    <div className='cart-items-function'>
                      <div className='removeCart'>
                        <Link to={`/customer/serviceProviderDetail/${item.proServiceID}`}>
                          <button className='btn-primary' onClick={handleBookAgainClick}>
                            Book Again
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className='cart-items-function'>
                      <div className='removeCart'>
                        <button className='btn-green' onClick={() => { togglePopEdit(); setBookingID(item.bookingID) }}>
                          Review
                        </button>
                      </div>
                    </div>
                    <div className='cart-items-function'>
                      <div className='removeCart'>
                        <Link to='/customer/chat'>
                          <button className='btn-primary' onClick={() => { localStorage.setItem("chatBookingID", item.bookingID) }}>
                            Chat
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {seenEdit ? <EditPopUp togglePopEdit={togglePopEdit} bookingID={bookingID} /> : null}
          </div>

          <div className='cart-total product'>
            <h2>Number of Completed Bookings</h2>
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

export default History
