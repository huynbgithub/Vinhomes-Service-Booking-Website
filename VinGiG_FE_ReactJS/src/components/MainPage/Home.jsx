import React from "react"
import axios from "axios"
import SliderHome from "../../common/slider/Slider"
import { Link } from "react-router-dom"



function Home() {

  // state = {
  //   cates: []
  // }

  // componentDidMount() {
  //   axios.get(`http://localhost:8081/vingig/categories`)
  //     .then(res => {
  //       const cates = res.data;
  //       this.setState({ cates });
  //     })
  //     .catch(error => console.log(error));
  // }

  return (
    <>
      <section className='home home-setting'>
        <div className='container d_flex'>
          {/* <div className='category'>
              {this.state.cates.map(cate =>
                <Link to={`/services/${cate.categoryName}`}>
                  <div className='box f_flex' key={cate.categoryID} >
                    <img src={"../images/category/cat7.png"} alt='' />
                    <span>{cate.categoryName}</span>
                  </div>
                </Link>
              )}
            </div> */}
          <SliderHome />
        </div>
      </section>

    </>
  )
}


export default Home
