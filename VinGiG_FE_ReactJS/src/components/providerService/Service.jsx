import "./style.css"
import axios from 'axios';
import React, { useEffect, useState } from "react"
import AddPopUp from "./AddPopUp"
import EditPopUp from "./EditPopUp"

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
      <div className="admin-wrapper">
        <div className="admin-container">
          <h2> Service Management</h2>
          <div className="table-wrapper">
            <div className="d_flex_add">
              <button className="btn-green" onClick={togglePopAdd}>Add New Service</button>
              {seenAdd ? <AddPopUp togglePopAdd={togglePopAdd} loadServices={loadServices} /> : null}
            </div>
            <br />
            <table className="fl-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Service Name</th>
                  <th>Unit Price</th>
                  <th>Rating</th>
                  <th>Booking No</th>
                  <th>Badge</th>
                  <th>Description</th>

                  <th className="action">Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.proServiceID}>
                    <td>{service.proServiceID}</td>
                    <td>{service.serviceName}</td>
                    <td>{service.unitPrice}</td>
                    <td>{service.rating}</td>
                    <td>{service.bookingNo}</td>
                    <td>{service.badgeName}</td>
                    <td className="max-width">{service.description}</td>
                    <td className="d_flex action">
                      <button className="btn-green" onClick={() => { togglePopEdit(); setServicesID(service.serviceID) }}>Edit</button>
                      <button className="btn-primary" onClick={() => deleteService(service.proServiceID)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {seenEdit ? <EditPopUp togglePopEdit={togglePopEdit} loadServices={loadServices} serviceID={serviceID} /> : null}
          </div>
        </div>
      </div >
    </>
  )
}


export default Service
