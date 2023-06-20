import React from "react"
import axios from 'axios';
import "./style.css"
import { withRouter } from "react-router-dom";


class Wallet extends React.Component {

  // state = {
  //   person: Object
  // }

  // componentDidMount() {
  //   const { accID } = this.props.match.params
  //   axios.get(`http://localhost:8081/vingig/providers/${accID}`)
  //     .then(res => {
  //       const person = res.data;
  //       this.setState({ person });
  //     })
  //     .catch(error => console.log(error));
  // }
  // prodcut qty total
  render() {
    return (
      <section className='cart-items' >
        <div className='container d_flex'>
          <h1>Wallet Management</h1>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='account_info product'>
            <h2>Wallet Information</h2>
            <div className=' d_flex'>
              <h4>Total:</h4>
              <h4>
                {/* {this.state.person.fullName} */}
                2.000.000 VND
              </h4>
            </div>
            <br />
            <div className=' d_flex'>
              <h5>Do you want to deposit?</h5>
              <button className='btn-primary'>Deposit</button>
            </div>
          </div>
          <div className='account_info product'>
            {/* <h2>Username & Password</h2>
            <div className=' d_flex'>
              <h4>username:</h4>
              <h4>
                {this.state.person.username}
              </h4>
            </div>
            <div className=' d_flex'>
              <h4>password:</h4>
              <h4>
                {this.state.person.password}
              </h4>
            </div>
            <br />
            <div className=' d_flex'>
              <h5>Change password?</h5>
              <button className='btn-primary'>Change</button>
            </div> */}

          </div>

          {/* <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>.00</h3>
            </div>
          </div> */}
        </div>
      </section>
    )
  }
}

export default withRouter(Wallet)