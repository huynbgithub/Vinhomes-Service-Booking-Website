import React from "react"
import axios from 'axios';
import "./style.css"
import { withRouter } from "react-router-dom";


class CustomerAccount extends React.Component {

  state = {
    person: Object
  }

  componentDidMount() {
    const { accID } = this.props.match.params
    axios.get(`http://localhost:8081/vingig/customers/${accID}`)
      .then(res => {
        const person = res.data;
        this.setState({ person });
      })
      .catch(error => console.log(error));
  }
  // prodcut qty total
  render() {
    return (
      <section className='cart-items' >
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='account_info product'>
            <h2>Account Information</h2>
            <div className=' d_flex'>
              <h4>Name:</h4>
              <h4>
                {this.state.person.fullName}
              </h4>
            </div>
            <div className=' d_flex'>
              <h4>Email:</h4>
              <h4>
                {this.state.person.email}
              </h4>
            </div>
            <div className=' d_flex'>
              <h4>Phone:</h4>
              <h4>
                {this.state.person.phone}
              </h4>
            </div>

          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>.00</h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(CustomerAccount)
// import React from 'react';

// import axios from 'axios';
// import "./style.css"
// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`http://localhost:8081/vingig/providers`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//       .catch(error => console.log(error));
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.persons.map(person => <li>{person.providerID}</li>)}
//       </ul>
//     )
//   }
// }
