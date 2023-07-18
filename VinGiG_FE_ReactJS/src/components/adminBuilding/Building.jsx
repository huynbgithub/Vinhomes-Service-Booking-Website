// import "./style.css"
import axios from 'axios';
import React, { useEffect, useState } from "react"
import AddPopUp from "./AddPopUp"
import EditPopUp from "./EditPopUp"

function Building() {

  const [buildings, setBuildings] = useState([]);
  const [buildingID, setBuildingID] = useState("");
  useEffect(() => {
    loadBuildings();
  }, [])

  const loadBuildings = () => {
    axios.get(`http://localhost:8081/vingig/buildings`)
      .then(res => {
        const buildings = res.data;
        setBuildings(buildings);
      })
      .catch(error => console.log(error));
  }

  async function deleteBuilding(buildingID) {
    await axios.delete(`http://localhost:8081/vingig/building/${buildingID}`);
    loadBuildings();
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
          <h2>Building Management</h2>
          <div className="table-wrapper">
            <div className="d_flex_add">
              <button className="btn-green" onClick={togglePopAdd}>Add New Building</button>
              {seenAdd ? <AddPopUp togglePopAdd={togglePopAdd} loadBuildings={loadBuildings} /> : null}
            </div>
            <br />
            <table className="fl-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Area</th>
                  <th className="action">Action</th>
                </tr>
              </thead>
              <tbody>
                {buildings.map((building) => (
                  <tr key={building.buildingID}>
                    <td>{building.buildingID}</td>
                    <td>{building.buildingName}</td>
                    <td>{building.note}</td>
                    <td className="d_flex action">
                      <button className="btn-green" onClick={() => { togglePopEdit(); setBuildingID(building.buildingID) }}>Edit</button>
                      <button className="btn-primary" onClick={() => deleteBuilding(building.buildingID)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {seenEdit ? <EditPopUp togglePopEdit={togglePopEdit} loadBuildings={loadBuildings} buildingID={buildingID} /> : null}
          </div>
        </div>
      </div >
    </>
  )
}


export default Building
