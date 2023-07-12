import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { NumericFormat } from "react-number-format"
import EditPopUp from "./EditPopUp"

export default function ServiceDetail() {

  const { serviceProviderID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [pService, setPService] = useState({});
  const [seenEdit, setSeenEdit] = useState(false);

  useEffect(() => {
    getProviderService();
    loadReviews();
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

  function loadReviews() {
    axios.get(`http://localhost:8081/vingig/providerService/${serviceProviderID}/bookings/reviews`)
      .then(res => {
        const reviews = res.data;
        setReviews(reviews);
      })
      .catch(error => console.log(error));
  }

  function togglePopEdit() {
    setSeenEdit(!seenEdit);
  };

  return (
    <>
      {/* Detail */}
      <div className='link-bar'>
        <h3>VinGiG/ Service Management/ {pService.serviceName}
        </h3>
      </div>
      <section className='s-setting'>
        <div className='container d_flex'>
          <section className='homeSlide contentWidth'>
            <div className='container'>
              <div className='box d_flex sTop'>
                <div className='left'>
                  <div className='product'>
                    <br />
                    <h2>{pService.serviceName}</h2>
                    <p>{pService.description}</p>
                    <div className='rate'>
                      <i className='fa fa-star'></i>
                      {pService.rating}
                    </div>
                    <div className='price'>
                      <h4><NumericFormat value={pService.unitPrice} displayType="text" thousandSeparator={true} suffix={' VND'} /></h4>
                    </div>
                    <div className=''>
                      <div>{pService.bookingNo} Bookings</div>
                    </div>
                    <div className="text-right">
                      <button className='btn-green' onClick={() => { togglePopEdit() }}>Edit</button>
                    </div>
                  </div>
                </div>
                <div className='right image-format'>
                  <img src={pService.link} alt='' />
                </div>
              </div>

              {seenEdit ? <EditPopUp togglePopEdit={togglePopEdit} pService={pService} getProviderService={getProviderService} /> : null}
            </div>

          </section>
        </div>
      </section>
      {/* End Detail */}
      {/* Review */}
      <section className='s-setting'>
        <div className='container d_flex'>
          <section className='homeSlide contentWidth'>
            <div className='container'>
              <div className='cart-details'>
                <div className='heading f_flex'>
                  <i className='fa fa-bolt'></i>
                  <h3>Reviews</h3>
                </div>
                <div className='reviews-container'>
                  <div className='reviews-wrapper'>
                    {reviews.map((review) => (
                      <div className='product mg-bot' key={review.id}>
                        <h4>
                          {review.customerFullName} &nbsp;
                          {Array.from({ length: review.customersRating }, (_, index) => (
                            <i className='icon-H fa fa-star' key={index}></i>
                          ))}
                        </h4>
                        <p>{review.customersReview}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* End Review */}
    </>
  )
}