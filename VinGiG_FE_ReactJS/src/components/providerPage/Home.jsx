import React from "react"
import axios from "axios"
import "./Home.css"
import SliderHome from "../../common/providerSlider/Slider"
import { Link } from "react-router-dom"



class Home extends React.Component {

  state = {
    cates: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/vingig/categories`)
      .then(res => {
        const cates = res.data;
        this.setState({ cates });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <section className='home'>
          <div className='container d_flex'>
            <div className='category'>
              {this.state.cates.map(cate =>
                <Link to={`/provider/service/${cate.categoryName}`}>
                  <div className='box f_flex' key={cate.categoryID} >
                    <img src={"../images/category/cat7.png"} alt='' />
                    <span>{cate.categoryName}</span>
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


export default Home
