import "./style.css"
import axios from 'axios';
import React, { useEffect, useState } from "react"
import AddPopUp from "./AddPopUp"
import EditPopUp from "./EditPopUp"

function Category() {

  const [categorys, setCategorys] = useState([]);
  const [categoryID, setCategoryID] = useState("");
  useEffect(() => {
    loadCategorys();
  }, [])

  const loadCategorys = () => {
    axios.get(`http://localhost:8081/vingig/serviceCategories`)
      .then(res => {
        const categorys = res.data;
        setCategorys(categorys);
      })
      .catch(error => console.log(error));
  }

  async function deleteCategory(categoryID) {
    await axios.delete(`http://localhost:8081/vingig/serviceCategory/${categoryID}`);
    loadCategorys();
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
          <h2>Service Category Management</h2>
          <div className="table-wrapper">
            <div className="d_flex_add">
              <button className="btn-green" onClick={togglePopAdd}>Add New Category</button>
              {seenAdd ? <AddPopUp togglePopAdd={togglePopAdd} loadCategorys={loadCategorys} /> : null}
            </div>
            <br />
            <table className="fl-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th className="action">Action</th>
                </tr>
              </thead>
              <tbody>
                {categorys.map((category) => (
                  <tr key={category.categoryID}>
                    <td>{category.categoryID}</td>
                    <td>{category.categoryName}</td>
                    <td>{category.description}</td>
                    <td className="d_flex action">
                      <button className="btn-green" onClick={() => { togglePopEdit(); setCategoryID(category.categoryID) }}>Edit</button>
                      <button className="btn-primary" onClick={() => deleteCategory(category.categoryID)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {seenEdit ? <EditPopUp togglePopEdit={togglePopEdit} loadCategorys={loadCategorys} categoryID={categoryID} /> : null}
          </div>
        </div>
      </div >
    </>
  )
}


export default Category
