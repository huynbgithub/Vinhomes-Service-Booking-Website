import React from "react"
import "./style.css"


function Building() {

  return (
    <>
      <table>
        <tbody><tr>
          <td>
            <form autoComplete="off" onsubmit="onFormSubmit()">
              <div>
                <label htmlFor="productCode">Product Code</label>
                <input type="text" name="productCode" id="productCode" />
              </div>
              <div>
                <label htmlFor="product">Product Name</label>
                <input type="text" name="product" id="product" />
              </div>
              <div>
                <label htmlFor="qty">Qty</label>
                <input type="number" name="qty" id="qty" />
              </div>
              <div>
                <label htmlFor="perPrice">Price</label>
                <input type="number" name="perPrice" id="perPrice" />
              </div>
              <div className="form_action--button">
                <input type="submit" defaultValue="Submit" />
                <input type="reset" defaultValue="Reset" />
              </div>
            </form>
          </td><td>
            <table className="list" id="storeList">
              <thead>
                <tr>
                  <th>Product Code</th>
                  <th>Product Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </td>
        </tr>
        </tbody></table>


    </>
  )
}


export default Building
