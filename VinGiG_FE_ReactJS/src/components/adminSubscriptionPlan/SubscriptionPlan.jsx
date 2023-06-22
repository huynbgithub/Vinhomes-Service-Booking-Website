import "./style.css"
import axios from 'axios';
import React, { useEffect, useState } from "react"
import AddPopUp from "./AddPopUp"
import EditPopUp from "./EditPopUp"

function Subscriptionplan() {

  const [plans, setPlans] = useState([]);
  const [planID, setPlanID] = useState("");
  useEffect(() => {
    loadPlans();
  }, [])

  const loadPlans = () => {
    axios.get(`http://localhost:8081/vingig/subscriptionPlans`)
      .then(res => {
        const plans = res.data;
        setPlans(plans);
      })
      .catch(error => console.log(error));
  }

  async function deletePlan(planID) {
    await axios.delete(`http://localhost:8081/vingig/subscriptionPlan/${planID}`);
    loadPlans();
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
          <h2>SubscriptioPlan Management</h2>
          <div className="table-wrapper">
            <div className="d_flex_add">
              <button className="btn-green" onClick={togglePopAdd}>Add New subscriptionPlan</button>
              {seenAdd ? <AddPopUp togglePopAdd={togglePopAdd} loadPlans={loadPlans} /> : null}
            </div>
            <br />
            <table className="fl-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Description</th>
                  <th>Duration</th>
                  <th>Price</th>
                  <th className="action">Action</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.planID}>
                    <td>{plan.planID}</td>
                    <td>{plan.description}</td>
                    <td>{plan.duration}</td>
                    <td>{plan.price}</td>
                    <td className="d_flex action">
                      <button className="btn-green" onClick={() => { togglePopEdit(); setPlanID(plan.planID) }}>Edit</button>
                      <button className="btn-primary" onClick={() => deletePlan(plan.planID)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {seenEdit ? <EditPopUp togglePopEdit={togglePopEdit} loadPlans={loadPlans} planID={planID} /> : null}
          </div>
        </div>
      </div >
    </>
  )
}


export default Subscriptionplan
