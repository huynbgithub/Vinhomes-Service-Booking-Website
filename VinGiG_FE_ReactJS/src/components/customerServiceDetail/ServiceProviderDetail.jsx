import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import BookPopUp from "./BookPopUp"
import { NumericFormat } from "react-number-format"
import "./style.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom';

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

export default function ServiceDetail() {

  const { serviceProviderID } = useParams();
  const [providers, setProviders] = useState([]);
  const [pService, setPService] = useState({});
  const [unitPrice, setUnitPrice] = useState("");
  const [proServiceID, setProServiceID] = useState("");
  const [seenBook, setSeenBook] = useState(false);
  const categoryName = localStorage.getItem("categoryName");
  const serviceName = localStorage.getItem("serviceName");
  const serviceID = localStorage.getItem("serviceID");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  useEffect(() => {
    loadProviders();
    getProviderService();
  },
    [serviceProviderID]);

  function getProviderService() {
    axios.get(`http://localhost:8081/vingig/providerService/${serviceProviderID}`)
      .then(res => {
        const pService = res.data;
        setPService(pService);
      })
      .catch(error => console.log(error));
  }

  function loadProviders() {
    axios.get(`http://localhost:8081/vingig/giGService/${serviceID}/providerServices`)
      .then(res => {
        const providers = res.data;
        setProviders(providers);
      })
      .catch(error => console.log(error));
  }

  function togglePopBook() {
    setSeenBook(!seenBook);
  };

  return (
    <>
      <div className='link-bar'>
        <h3>VinGiG/ {categoryName}/ {serviceName}/ {pService.fullName}
        </h3>
      </div>
      <section className='s-setting'>
        <div className='container d_flex'>
          <section className='homeSlide contentWidth'>
            <div className='container'>
              <div className='box d_flex sTop'>
                <div className='left'>
                  <div className='product'>
                    <div className='img'>
                      <span className='discount'>{pService.badgeName}</span>
                    </div>
                    <br />
                    <h2>{pService.fullName}</h2>
                    <p>{pService.description}</p>
                    <div className='rate'>
                      <i className='fa fa-star'></i>
                      {pService.rating}
                    </div>
                    <div className='price'>
                      <h4><NumericFormat value={pService.unitPrice} displayType="text" thousandSeparator={true} suffix={' VND'} /></h4>

                    </div>
                    <div className=''>
                      <h4>{pService.bookingNo} Bookings</h4>
                    </div>
                    <div className="text-right">
                      <button className='btn-green' onClick={() => { togglePopBook(); setProServiceID(pService.proServiceID); setUnitPrice(pService.unitPrice) }}>Book</button>
                    </div>
                  </div>

                </div>
                <div className='right image-format'>
                  <img src={pService.link} alt='' />
                </div>
              </div>

              {seenBook ? <BookPopUp togglePopBook={togglePopBook} proServiceID={proServiceID} unitPrice={unitPrice} /> : null}
            </div>

          </section>
        </div>
      </section>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h3>Các nhà cung cấp khác của dịch vụ {serviceName}</h3>
          </div>
          <Slider {...settings}>
            {providers.map((sProvider) => (
              <div className='box'>
                <div className='product mtop'>
                  <div className='img img-Huy'>
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
          </Slider>
        </div>
      </section>

    </>
  )
}