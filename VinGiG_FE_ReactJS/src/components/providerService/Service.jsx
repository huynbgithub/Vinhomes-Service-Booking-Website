import axios from 'axios';
import React, { useEffect, useState } from "react"
import AddPopUp from "./AddPopUp"
import EditPopUp from "./EditPopUp"
import { NumericFormat } from "react-number-format"
import { Link } from 'react-router-dom';

function Service() {
  const providerID = JSON.parse(localStorage.getItem("accessToken")).providerID;
  const [services, setServices] = useState([]);
  const [serviceID, setServicesID] = useState("");
  useEffect(() => {
    loadServices();
  }, [])

  const loadServices = () => {
    axios.get(`http://localhost:8081/vingig/provider/${providerID}/providerServices`)
      .then(res => {
        const services = res.data;
        setServices(services);
      })
      .catch(error => console.log(error));
  }

  async function deleteService(serviceID) {
    await axios.delete(`http://localhost:8081/vingig/providerService/${serviceID}`);
    loadServices();
  }

  const [seenAdd, setSeenAdd] = useState(false)

  function togglePopAdd() {
    setSeenAdd(!seenAdd);
  };

  const [seenEdit, setSeenEdit] = useState(false)

  function togglePopEdit() {
    setSeenEdit(!seenEdit);
  };

  return (
    <>
      <div className="admin-wrapper background-blue">
        <div className="admin-container">
          <h2> Service Management</h2>

          <section className='shop non-margin'>
            <div className='container d_flex'>
              <div className='contentWidth'>
                <div className='product-content  grid2'>

                  {services.map((sProvider) => (
                    <div className='box'>
                      <div className='product mtop'>
                        <div className='img'>
                          <img src={sProvider.link} alt='' />
                        </div>
                        <div className='product-details'>
                          <h3>Máy lạnh</h3>
                          <div className='rate'>
                            <i className='fa fa-star'></i>
                            {sProvider.rating}
                          </div>
                          <div className='price'>
                            <h4><NumericFormat value={sProvider.unitPrice} displayType="text" thousandSeparator={true} suffix={' VND'} /></h4>

                          </div>
                          <div className=''>
                            <p>{sProvider.bookingNo} Bookings</p>
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
        </div>
      </div>
    </>
  )
}


export default Service