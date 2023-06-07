import React, { useState } from "react"
import axios from "axios"
import "./style.css"
import { withRouter } from "react-router-dom";

class ProviderService extends React.Component {
  render() {
    const { service } = this.props.match.params;
    return (
      <>
        <section className='shop background'>
          <div className='container d_flex'>
            <div className='category'>
              <div className='chead d_flex'>
                <h1>Hãy điền thông tin dịch vụ {service} ở bên phải:</h1>
              </div>
            </div>
            <div className='contentWidth'>
              <form style={{ paddingTop: '10px' }}>
                <h1>Please input detail:</h1>
                <h4>Upload Image:</h4>
                <input></input>
                <h4>Description:</h4>
                <input></input>
                <h4>Price:</h4>
                <input></input>
              </form>
              <button className='btn-primary'>Submit</button>
            </div>
          </div>
        </section>


      </>
    )
  }
}

export default withRouter(ProviderService)
