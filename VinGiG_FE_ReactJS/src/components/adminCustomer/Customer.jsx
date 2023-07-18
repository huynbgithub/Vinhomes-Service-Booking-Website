// import "./style.css"
import axios from 'axios';
import React, { useEffect, useState } from "react"
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
            <table className="fl-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Avatar</th>
                  <th>Create Date</th>
                  <th>Date Of Birth</th>
                  <th>Email</th>
                  <th>Full Name</th>
                  <th>Gender</th>
                  <th>Phone Number</th>
                  <th>Rating</th>
                  <th>Building</th>
                  <th>Address</th>
                  <th className="action">Action</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => {
                  var epochTime1 = customer.createDate;

                  var dateObj1 = new Date(epochTime1);

                  var date1 = dateObj1.getDate();
                  var month1 = dateObj1.getMonth() + 1;
                  var year1 = dateObj1.getYear() - 100 + 2000;

                  var formattedTime1 =
                    date1.toString() + '/' +
                    month1.toString() + '/' +
                    year1.toString();

                  var epochTime2 = customer.dob;

                  var dateObj2 = new Date(epochTime2);

                  var date2 = dateObj2.getDate();
                  var month2 = dateObj2.getMonth() + 1;
                  var year2 = dateObj2.getYear() - 100 + 2000;

                  var formattedTime2 =
                    date2.toString() + '/' +
                    month2.toString() + '/' +
                    year2.toString();
                  return (
                    <tr key={customer.customerID}>
                      <td>{customer.customerID}</td>
                      <td><img src={customer.avatar} alt="" /></td>
                      <td>{formattedTime1}</td>
                      <td>{formattedTime2}</td>
                      <td>{customer.email}</td>
                      <td>{customer.fullName}</td>
                      <td>{customer.gender ? "Nam" : "Nữ"}</td>
                      <td>{customer.phone}</td>
                      <td>{customer.rating}</td>
                      <td>{customer.buildingName}</td>
                      <td>{customer.address}</td>
                      <td className="d_flex action action1">
                        <button className="btn-green" onClick={() => { togglePopEdit(); setCustomerID(customer.customerID) }}>Edit</button>
                        <button className="btn-primary" onClick={() => deleteCustomer(customer.customerID)}>Delete</button>
                      </td>
                    </tr>
                  )
                })}
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
