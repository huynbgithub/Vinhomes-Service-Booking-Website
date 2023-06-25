import "./style.css"
import axios from 'axios';
import React, { useEffect, useState } from "react"
import AddPopUp from "./AddPopUp"
import EditPopUp from "./EditPopUp"

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
          <h2>Provider Management</h2>
          <div className="table-wrapper">
            <div className="d_flex_add">
              {/* <button className="btn-green" onClick={togglePopAdd}>Add New Building</button> */}
              {/* {seenAdd ? <AddPopUp togglePopAdd={togglePopAdd} loadBuildings={loadBuildings} /> : null} */}
            </div>
            <br />
            <table className="fl-table">
              <thead>
                <tr>
                <th>ID</th>
                  {/* <th>ProviderID</th> */}
                  {/* <th>Active</th> */}
                  <th>Address</th>
                  <th>Avatar</th>
                  <th>Create Date</th>
                  {/* <th>Date Of Birth</th> */}
                  <th>Email</th>
                  <th>Full Name</th>
                  <th>Gender</th>
                  <th>Password</th>
                  <th>Phone Number</th>
                  <th>Rating</th>
                  <th>Role</th>
                  <th>User Name</th>
                  <th>BadgeID</th>
                  <th className="action">Action</th>
                </tr>
              </thead>
              <tbody>
                {providers.map((provider) => (
                  <tr key={provider.providerID}>
                    <td>{provider.providerID}</td>
                    {/* <td>{provider.providerID}</td> */}
                    {/* <td>{customer.active}</td> */}
                    <td>{provider.address}</td>
                    <td>{provider.avatar}</td>
                    <td>{provider.createDate}</td>
                    {/* <td>{provider.dob}</td> */}
                    <td>{provider.email}</td>
                    <td>{provider.fullName}</td>
                    <td>{provider.gender}</td>
                    <td>{provider.password}</td>
                    <td>{provider.phone}</td>
                    <td>{provider.rating}</td>
                    <td>{provider.role}</td>
                    <td>{provider.username}</td>
                    <td>{provider.badgeID}</td>
                    <td className="d_flex action">
                      <button className="btn-green" onClick={() => { togglePopEdit(); setProviderID(provider.providerID) }}>Edit</button>
                      <button className="btn-primary" onClick={() => deleteProvider(provider.providerID)}>Delete</button>
                    </td>
                  </tr>
                ))}
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
