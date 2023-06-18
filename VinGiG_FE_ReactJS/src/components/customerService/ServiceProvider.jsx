import React, { useState, useEffect } from "react"
import axios from "axios"
import "./style.css"
import { useParams } from "react-router-dom"

function ServiceProvider() {

  // const { serviceID } = this.props.match.params;
  const { serviceID } = useParams();

  const [providers, setProviders] = useState([]);

  const [service, setService] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8081/vingig/giGservice/${serviceID}/providerServices`)
      .then(res => {
        const providers = res.data;
        setProviders(providers);
      })
      .catch(error => console.log(error));

    axios.get(`http://localhost:8081/vingig/giGService/${serviceID}`)
      .then(res => {
        const service = res.data;
        setService(service);
      })
      .catch(error => console.log(error));
  },
    [serviceID]);

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
                <h4>{service.serviceName}
                </h4>
              </div>
              {/* <div className='heading-right row '>
                  <span>View all</span>
                  <i className='fa-solid fa-caret-right'></i>
                </div> */}
            </div>
            <div className='product-content  grid2'>

              {providers.map((shopItems) => (
                <div className='box'>
                  <div className='product mtop'>
                    <div className='img'>
                      <span className='discount'>{shopItems.badgeName}</span>
                      <img src={shopItems.link} alt='' />
                      {/* <div className='product-like'>
                      <label>{count}</label> <br />
                      <i className='fa-regular fa-heart' onClick={increment}></i>
                    </div> */}
                    </div>
                    <div className='product-details'>
                      <h3>{shopItems.fullName}</h3>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </div>
                      <div className='price'>
                        <h4>{shopItems.unitPrice} VND</h4>
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
