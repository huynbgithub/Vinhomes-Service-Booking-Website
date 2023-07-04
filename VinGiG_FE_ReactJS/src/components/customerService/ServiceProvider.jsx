import React, { useState, useEffect } from "react"
import axios from "axios"
import "./style.css"
import { useParams } from "react-router-dom"
import { NumericFormat } from "react-number-format"
import { Link } from 'react-router-dom';

function ServiceProvider() {


  const { serviceID } = useParams();

  const [providers, setProviders] = useState([]);

  const [service, setService] = useState({});

  useEffect(() => {
    loadProviders();
    getService();
  },
    [serviceID]);

  function loadProviders() {
    axios.get(`http://localhost:8081/vingig/giGService/${serviceID}/providerServices`)
      .then(res => {
        const providers = res.data;
        setProviders(providers);
      })
      .catch(error => console.log(error));
  }

  function getService() {
    axios.get(`http://localhost:8081/vingig/giGService/${serviceID}`)
      .then(res => {
        const service = res.data;
        setService(service);
      })
      .catch(error => console.log(error));
  }

  localStorage.setItem("categoryName", service.categoryName);
  localStorage.setItem("serviceName", service.serviceName);
  localStorage.setItem("serviceID", serviceID);

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
                <h3>VinGiG/ {service.categoryName}/ {service.serviceName}
                </h3>
              </div>
              {/* <div className='heading-right row '>
                  <span>View all</span>
                  <i className='fa-solid fa-caret-right'></i>
                </div> */}
            </div>
            <div className='product-content  grid2'>

              {providers.map((sProvider) => (
                <div className='box'>
                  <div className='product mtop'>
                    <div className='img'>
                      <span className='discount'>{sProvider.badgeName}</span>
                      <img src={sProvider.link} alt='' />
                      {/* <div className='product-like'>
                      <label>{count}</label> <br />
                      <i className='fa-regular fa-heart' onClick={increment}></i>
                    </div> */}
                    </div>
                    <div className='product-details'>
                      <h4>{sProvider.fullName}</h4>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        {sProvider.rating}
                      </div>
                      <div className='price'>
                        <h4><NumericFormat value={sProvider.unitPrice} displayType="text" thousandSeparator={true} suffix={' VND'} /></h4>

                      </div>
                      <div className=''>
                        <h4>{sProvider.bookingNo} Bookings</h4>
                      </div>
                      <div className="text-right">
                        <Link to={`/customer/serviceProviderDetail/${sProvider.proServiceID}`}>
                          <button className='btn-green'>Detail</button>
                        </Link>
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
