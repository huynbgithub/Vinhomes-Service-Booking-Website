import React from "react"
import axios from "axios"
import "./style.css"
import SliderHome from "../../common/slider/Slider"
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom"

class Service extends React.Component {

  // state = {
  //   subSers: []
  // }

  // componentDidMount() {
  //   axios.get(`http://localhost:8081/vingig/servicesOfCategories`)
  //     .then(res => {
  //       const subSers = res.data;
  //       this.setState({ subSers });
  //     })
  //     .catch(error => console.log(error));
  // }

  render() {
    const { cate } = this.props.match.params;
    const subSers = [
      {
        serviceID: "1",
        serviceName: "ABC",
      },
      {
        serviceID: "2",
        serviceName: "DEF",
      },
    ]
    return (
      <>

        <section className='shop background'>
          <div className='container d_flex'>
            <div className='category'>
              <div className='chead d_flex'>
                <h1>Chi Tiết Các Dịch Vụ {cate}</h1>
              </div>
              {/* {this.state.subSers.map(subSer =>*/}
              {subSers.map(subSer =>
                <Link to={`/serviceProvider/${subSer.serviceName}`}>
                  <div className='box f_flex' key={subSer.serviceID} >
                    <img src={"../images/category/cat-2.png"} alt='' />
                    <span>{subSer.serviceName}</span>
                  </div>
                </Link>
              )}
            </div>
            <SliderHome />
          </div>
        </section>
      </>
    )
  }
}

export default withRouter(Service)
