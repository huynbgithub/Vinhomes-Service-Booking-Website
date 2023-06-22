import "./style.css"
import React, { useEffect, useState } from "react"
import axios from 'axios';
import { NumericFormat } from "react-number-format"

function History() {
  const customerID = JSON.parse(localStorage.getItem("accessToken")).customerID;
  const [histories, setHistories] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8081/vingig/customer/${customerID}/bookings/history/{dateMin}/{dateMax}`)
      .then(res => {
        const histories = res.data;
        setHistories(histories);
      })
      .catch(error => console.log(error));
  }, []);

  // const histories = [
  //   {
  //     id: 7,
  //     cover: "../images/shops/shops-1.png",
  //     name: "Trần Văn Hùng",
  //     price: "180",
  //     badge: "Nhân viên của tháng",
  //     qty: 1,
  //     status: "Completed",
  //     date: "01/01/2003",
  //   },
  //   {
  //     id: 6,
  //     cover: "../images/shops/shops-2.png",
  //     name: "Lê Văn Dũng",
  //     price: "180",
  //     badge: "Nhân viên của tháng",
  //     qty: 2,
  //     status: "Completed",
  //     date: "01/01/2003",
  //   },
  //   {
  //     id: 11,
  //     cover: "../images/shops/shops-2.png",
  //     name: "Nguyễn Văn A",
  //     price: "80",
  //     badge: "Uy tín hàng đầu",
  //     qty: 1,
  //     status: "Completed",
  //     date: "01/01/2003",
  //   },
  // ]

  // const totalPrice = histories.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          <h1> Booking History</h1>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}
          <div className='cart-details'>
            {histories.length === 0 && <h1 className='no-items product'>No Booking History</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {histories.map((item) => {
              const productQty = item.price * item.qty
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
                    <div className='img'>
                      <img src={item.cover} alt='' />
                    </div>
                  </div>

                  <div className='cart-details'>
                    <h3>{item.proServiceID}</h3>
                    <h4>
                      Status: <span>Completed</span>
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
                        <button className='btn-primary'>
                          Book Again
                        </button>
                      </div>
                    </div>
                    <div className='cart-items-function'>
                      <div className='removeCart'>
                        <button className='btn-green'>
                          Review
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            {/* <h2>Total Money</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>{totalPrice}.000 VND</h3>
            </div> */}
          </div>
        </div >
      </section >
    </>
  )
}

export default History
