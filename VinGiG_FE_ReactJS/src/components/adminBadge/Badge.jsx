import "./style.css"
import axios from 'axios';
import React, { useEffect, useState } from "react"
import AddPopUp from "./AddPopUp"
import EditPopUp from "./EditPopUp"

function Badge() {

  const [badges, setBadges] = useState([]);
  const [badgeID, setBadgeID] = useState("");
  useEffect(() => {
    loadBadges();
  }, [])

  const loadBadges = () => {
    axios.get(`http://localhost:8081/vingig/badges`)
      .then(res => {
        const badges = res.data;
        setBadges(badges);
      })
      .catch(error => console.log(error));
  }

  async function deleteBadge(bagdeID) {
    await axios.delete(`http://localhost:8081/vingig/bagde/${bagdeID}`);
    loadBadges();
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
          <h2>Badge Management</h2>
          <div className="table-wrapper">
            <div className="d_flex_add">
              <button className="btn-green" onClick={togglePopAdd}>Add New Badge</button>
              {seenAdd ? <AddPopUp togglePopAdd={togglePopAdd} loadBadges={loadBadges} /> : null}
            </div>
            <br />
            <table className="fl-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Benefit</th>
                  <th>Description</th>
                  <th className="action">Action</th>
                </tr>
              </thead>
              <tbody>
                {badges.map((badge) => (
                  <tr key={badge.badgeID}>
                    <td>{badge.badgeID}</td>
                    <td>{badge.badgeName}</td>
                    <td>{badge.benefit}</td>
                    <td>{badge.description}</td>
                    <td className="d_flex action">
                      <button className="btn-green" onClick={() => { togglePopEdit(); setBadgeID(badge.badgeID) }}>Edit</button>
                      <button className="btn-primary" onClick={() => deleteBadge(badge.badgeID)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {seenEdit ? <EditPopUp togglePopEdit={togglePopEdit} loadBadges={loadBadges} badgeID={badgeID} /> : null}
          </div>
        </div>
      </div >
    </>
  )
}


export default Badge
