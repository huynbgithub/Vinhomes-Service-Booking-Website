import React from "react"
import "./style.css"


function Building() {

  return (
    <>
    <div>
  <main>
    <div className="container text-center">
      <h1 className="bg-light py-4 text-info">
        <i className="fas fa-plug" /> Electronic Store
      </h1>
      <div className="d-flex justify-content-center">
        <form className="w-50">
          <input type="text" id="userid" className="form-control" autoComplete="off" readOnly placeholder="ID" />
          <input type="text" id="proname" className="form-control" autoComplete="off" placeholder="Product Name" />
          <div className="row">
            <div className="col">
              <input type="text" id="seller" className="form-control m-0" autoComplete="off" placeholder="Seller" />
            </div>
            <div className="col">
              <input type="text" id="price" className="form-control m-0" autoComplete="off" placeholder="Price" />
            </div>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success" id="btn-create">Create</button>
        <button className="btn btn-primary" id="btn-read">Read</button>
        <button className="btn btn-warning" id="btn-update">Update</button>
        <button className="btn btn-danger" id="btn-delete">Delete All</button>
      </div>
      {/*  Table */}
      <div className="d-flex table-data">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Seller</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody id="tbody">
            {/*
                  <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>

                  </tr>
                  <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                  </tr>
                  */}
          </tbody>
        </table>
      </div>
      <div id="notfound" />
    </div>
  </main>
  {/* Labels */}
  <div className="w-100 btn btn-success insertmsg">Data Inserted Successfully...!</div>
  <div className="w-100 btn btn-warning updatemsg">Data Updated..! Refresh Database To See Result</div>
  <div className="w-100 btn btn-danger deletemsg">Data Deleted..!</div>
  {/* Include Dexie */}
  {/* Custom main file*/}
</div>

    </>
  )
}


export default Building
