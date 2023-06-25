import "./style.css"
import axios from 'axios';
import React, { useEffect, useState } from "react"
import AddPopUp from "./AddPopUp"
import EditPopUp from "./EditPopUp"

function Customer() {

  const [customers, setCustomers] = useState([]);
  const [customerID, setCustomerID] = useState("");
  useEffect(() => {
    loadCustomer();
  }, [])

  const loadCustomer = () => {
    axios.get(`http://localhost:8081/vingig/customers`)
      .then(res => {
        const customers = res.data;
        setCustomers(customers);
      })
      .catch(error => console.log(error));
  }

  async function deleteCustomer(customerID) {
    await axios.delete(`http://localhost:8081/vingig/customer/${customerID}`);
    loadCustomer();
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
          <h2>Customer Management</h2>
          <div className="table-wrapper">
            <div className="d_flex_add">
              {/* <button className="btn-green" onClick={togglePopAdd}>Add New Building</button> */}
              {seenAdd ? <AddPopUp togglePopAdd={togglePopAdd} loadCustomer={loadCustomer} /> : null}
            </div>
            <br />
            <table className="fl-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>customerID</th>
                  {/* <th>Active</th> */}
                  <th>Address</th>
                  <th>Avatar</th>
                  <th>Create Date</th>
                  <th>Date Of Birth</th>
                  <th>Email</th>
                  <th>Full Name</th>
                  <th>Gender</th>
                  <th>Password</th>
                  <th>Phone Number</th>
                  <th>Rating</th>
                  <th>Role</th>
                  <th>User Name</th>
                  <th>BuildingID</th>
                  <th className="action">Action</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.customerID}>
                    <td>{customer.customerID}</td>
                    <td>{customer.customerID}</td>
                    {/* <td>{customer.active}</td> */}
                    <td>{customer.address}</td>
                    <td>{customer.avatar}</td>
                    <td>{customer.createDate}</td>
                    <td>{customer.dob}</td>
                    <td>{customer.email}</td>
                    <td>{customer.fullName}</td>
                    <td>{customer.gender}</td>
                    <td>{customer.password}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.rating}</td>
                    <td>{customer.role}</td>
                    <td>{customer.username}</td>
                    <td>{customer.buildingID}</td>
                    <td className="d_flex action">
                      <button className="btn-green" onClick={() => { togglePopEdit(); setCustomerID(customer.customerID) }}>Edit</button>
                      <button className="btn-primary" onClick={() => deleteCustomer(customer.customerID)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {seenEdit ? <EditPopUp togglePopEdit={togglePopEdit} loadCustomer={loadCustomer} customerID={customerID} /> : null}
          </div>
        </div>
      </div >
    </>
  )
}


export default Customer
