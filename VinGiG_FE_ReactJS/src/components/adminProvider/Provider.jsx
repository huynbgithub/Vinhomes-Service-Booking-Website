// import "./style.css"
import axios from 'axios';
import React, { useEffect, useState } from "react"
import EditPopUp from "./EditPopUp"
import Building from './../adminBuilding/Building';

function Provider() {

  const [providers, setproviders] = useState([]);
  const [providerID, setProviderID] = useState("");
  useEffect(() => {
    loadproviders();
  }, [])

  const loadproviders = () => {
    axios.get(`http://localhost:8081/vingig/providers`)
      .then(res => {
        const providers = res.data;
        setproviders(providers);
      })
      .catch(error => console.log(error));
  }

  async function deleteProvider(providerID) {
    await axios.delete(`http://localhost:8081/vingig/provider/${providerID}`);
    loadproviders();
  }

  const [seenEdit, setSeenEdit] = useState(false)

  function togglePopEdit() {
    setSeenEdit(!seenEdit);
  };

  return (
    <>
      <div className="admin-wrapper">
        <div className="admin-container">
          <h2>Provider Management</h2>
          <div className="table-wrapper">
            <table className="fl-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Avatar</th>
                  <th>Create Date</th>
                  <th>Email</th>
                  <th>Full Name</th>
                  <th>Gender</th>
                  <th>Phone Number</th>
                  <th>Rating</th>
                  <th>Badge</th>
                  <th>Building</th>
                  <th>Address</th>
                  <th className="action">Action</th>
                </tr>
              </thead>
              <tbody>
                {providers.map((provider) => {
                  var epochTime = provider.createDate;

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
                  return (
                    <tr key={provider.providerID}>
                      <td>{provider.providerID}</td>
                      <td><img src={provider.avatar} alt="" /></td>
                      <td>{formattedTime}</td>
                      <td>{provider.email}</td>
                      <td>{provider.fullName}</td>
                      <td>{provider.gender ? "Nam" : "Nữ"}</td>
                      <td>{provider.phone}</td>
                      <td>{provider.rating}</td>
                      <td>{provider.badgeName}</td>
                      <td>{provider.buildingName}</td>
                      <td>{provider.address}</td>
                      <td className="d_flex action action1">
                        <button className="btn-green" onClick={() => { togglePopEdit(); setProviderID(provider.providerID) }}>Edit</button>
                        <button className="btn-primary" onClick={() => deleteProvider(provider.providerID)}>Delete</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {seenEdit ? <EditPopUp togglePopEdit={togglePopEdit} loadproviders={loadproviders} providerID={providerID} /> : null}
          </div>
        </div>
      </div >
    </>
  )
}


export default Provider
