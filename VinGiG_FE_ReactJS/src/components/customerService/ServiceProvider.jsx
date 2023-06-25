import React, { useState, useEffect } from "react"
import axios from "axios"
import "./style.css"
import { useParams } from "react-router-dom"
import BookPopUp from "./BookPopUp"
import DesPopUp from "./DesPopUp"
import { NumericFormat } from "react-number-format"

function ServiceProvider() {

  const { serviceID } = useParams();

  const [providers, setProviders] = useState([]);

  const [service, setService] = useState({});

  const [unitPrice, setUnitPrice] = useState("");

  const [proServiceID, setProServiceID] = useState("");

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

  const [seenDes, setSeenDes] = useState(false)

  function togglePopDes() {
    setSeenDes(!seenDes);
  };
  const [seenBook, setSeenBook] = useState(false)

  function togglePopBook() {
    setSeenBook(!seenBook);
  };

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
                        <h4>{sProvider.bookingNo} Past Bookings</h4>
                      </div>
                      <button className="underline" onClick={() => { togglePopDes(); setProServiceID(sProvider.proServiceID) }}><h3>Description</h3></button>
                      <div className="text-right">
                        <button className='btn-green' onClick={() => { togglePopBook(); setProServiceID(sProvider.proServiceID); setUnitPrice(sProvider.unitPrice) }}>Book</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {seenDes ? <DesPopUp togglePopDes={togglePopDes} proServiceID={proServiceID} /> : null}
            {seenBook ? <BookPopUp togglePopBook={togglePopBook} proServiceID={proServiceID} unitPrice={unitPrice} /> : null}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceProvider
