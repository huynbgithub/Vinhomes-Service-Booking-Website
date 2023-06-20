import "./style.css"
import axios from 'axios';
import React, { useEffect, useState } from "react"

function Building() {

  const [buildings, setBuildings] = useState([]);
  useEffect(() => {
    loadBuildings();
  }, [])

  const loadBuildings = async () => {
    await axios.get(`http://localhost:8081/vingig/buildings`)
      .then(res => {
        const buildings = res.data;
        setBuildings(buildings);
      })
      .catch(error => console.log(error));
  }

  const buildingDelete = async (buildingID) => {
    await axios.delete(`http://localhost:8081/vingig/building/${buildingID}`);
    loadBuildings();
  }

  return (
    <>
      <div className="admin-wrapper">
        <div className="admin-container">
          <h2>Building Management</h2>
          <div className="table-wrapper">
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
                      <button className="btn-green">Edit</button>
                      <button className="btn-primary" onClick={() => buildingDelete(building.buildingID)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div >
    </>
  )
}


export default Building
