import React from "react"
import "./style.css"

const History = () => {

  const HistoryItem = [
    {
      id: 7,
      cover: "../images/shops/shops-3.png",
      name: "Lương Văn A",
      price: "180",
      badge: "Khách hàng 1",
      qty: 1,
      status: "Not Confirmed",
      date: "01/01/2003",
    },
    {
      id: 6,
      cover: "../images/shops/shops-4.png",
      name: "Lê Văn Dũng",
      price: "180",
      badge: "Khách hàng 2",
      qty: 2,
      status: "Confirmed",
      date: "01/01/2003",
    },
    {
      id: 11,
      cover: "../images/shops/shops-5.png",
      name: "Nguyễn Văn A",
      price: "80",
      badge: "Khách hàng 3",
      qty: 1,
      status: "Completed",
      date: "01/01/2003",
    },
  ]

  const totalPrice = HistoryItem.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          <h1> Booking History</h1>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}
          <div className='cart-details'>
            {HistoryItem.length === 0 && <h1 className='no-items product'>No Booking History</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {HistoryItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='cart-details'>
                    <div className='img'>
                      <img src={item.cover} alt='' />
                    </div>
                  </div>

                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      Status: <span>{item.status}</span>
                    </h4>
                    <h4>
                      Price: {item.price}.000 VND * {item.qty}
                      <span>{productQty}.000 VND</span>
                    </h4>
                    <h4>
                      Date:
                      <span>{item.date}</span>
                    </h4>
                  </div>
                  <div className='cart-details'>

                    <div className='cart-items-function'>
                      <div className='removeCart'>
                        <button className='btn-green'>
                          Confirm
                        </button>
                      </div>

                    </div>
                    <div className='cart-items-function'>
                      <div className='removeCart'>
                        <button className='btn-primary'>
                          Cancel
                        </button>
                      </div>

                    </div>
                    <div className='cart-items-function'>
                      <div className='removeCart'>
                        <button className='btn-green'>
                          Chat
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Total Money</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>{totalPrice}.000 VND</h3>
            </div>
          </div>
        </div >
      </section >
    </>
  )
}

export default History
