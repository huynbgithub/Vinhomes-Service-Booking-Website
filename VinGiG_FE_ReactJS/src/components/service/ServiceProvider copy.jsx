import React, { useState, useEffect } from "react"
import axios from "axios"
import "./style.css"

function ServiceProvider() {

  // const { service } = this.props.match.params;


  const shopItems = [
    {
      id: 7,
      cover: "../images/shops/shops-1.png",
      name: "Trần Văn Hùng",
      price: "180",
      badge: "Nhân viên của tháng",
    },
    {
      id: 11,
      cover: "../images/shops/shops-2.png",
      name: "Nguyễn Văn A",
      price: "80",
      badge: "Uy tín hàng đầu",
    },
    {
      id: 11,
      cover: "../images/shops/shops-2.png",
      name: "Nguyễn Văn A",
      price: "80",
      badge: "Uy tín hàng đầu",
    },
    {
      id: 11,
      cover: "../images/shops/shops-2.png",
      name: "Nguyễn Văn A",
      price: "80",
      badge: "Uy tín hàng đầu",
    },
    {
      id: 11,
      cover: "../images/shops/shops-2.png",
      name: "Nguyễn Văn A",
      price: "80",
      badge: "Uy tín hàng đầu",
    },
    {
      id: 11,
      cover: "../images/shops/shops-2.png",
      name: "Nguyễn Văn A",
      price: "80",
      badge: "Uy tín hàng đầu",
    },
  ]

  const [cates, setCates] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8081/vingig/giGservice/1/providerServices`)
      .then(res => {
        const cates = res.data;
        setCates(cates);
      })
      .catch(error => console.log(error));
  }, []);

  // state = {
  //   subSers: []
  // }

  // componentDidMount() {
  //   axios.get(`http://localhost:8081/vingig/providersOfServices`)
  //     .then(res => {
  //       const subSers = res.data;
  //       this.setState({ subSers });
  //     })
  //     .catch(error => console.log(error));
  // }

  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          {/* <div className='category'>
              <div className='chead d_flex'>
                <h1>Các Nhà Cung Cấp Dịch Vụ {service}</h1>
              </div>
            </div> */}
          <div className='contentWidth'>
            <div className='heading d_flex margin-bottom-1'>
              <div className='heading-left row  f_flex'>
                {/* <h4>Các Nhà Cung Cấp Dịch Vụ {service}</h4> */}
                <h4>Các Nhà Cung Cấp Dịch Vụ</h4>
              </div>
              {/* <div className='heading-right row '>
                  <span>View all</span>
                  <i className='fa-solid fa-caret-right'></i>
                </div> */}
            </div>
            <div className='product-content  grid2'>

              {cates.map((shopItems) => (
                <div className='box'>
                  <div className='product mtop'>
                    <div className='img'>
                      <span className='discount'>{shopItems.rating}</span>
                      <img src={shopItems.rating} alt='' />
                      {/* <div className='product-like'>
                      <label>{count}</label> <br />
                      <i className='fa-regular fa-heart' onClick={increment}></i>
                    </div> */}
                    </div>
                    <div className='product-details'>
                      <h3>{shopItems.description}</h3>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </div>
                      <div className='price'>
                        <h4>{shopItems.unitPrice}.000 VND</h4>
                        {/* step : 3
           if hami le button ma click garryo bahne
          */}
                        <a className='btn-primary'>Book</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='product-content  grid2'>

              {shopItems.map((shopItems) => (
                <div className='box'>
                  <div className='product mtop'>
                    <div className='img'>
                      <span className='discount'>{shopItems.badge}</span>
                      <img src={shopItems.cover} alt='' />
                      {/* <div className='product-like'>
                      <label>{count}</label> <br />
                      <i className='fa-regular fa-heart' onClick={increment}></i>
                    </div> */}
                    </div>
                    <div className='product-details'>
                      <h3>{shopItems.name}</h3>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </div>
                      <div className='price'>
                        <h4>{shopItems.price}.000 VND</h4>
                        {/* step : 3
           if hami le button ma click garryo bahne
          */}
                        <a className='btn-primary'>Book</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default ServiceProvider
