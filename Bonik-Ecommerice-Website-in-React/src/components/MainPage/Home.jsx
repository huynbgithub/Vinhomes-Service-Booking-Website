import React from "react"
import axios from "axios"
import "./Home.css"
import SliderHome from "./Slider"
import { Link } from "react-router-dom"



class Home extends React.Component {

  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/vingig/categories`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <section className='home'>
          <div className='container d_flex'>
            <div className='category'>
              {this.state.persons.map(person =>
                <Link to={`/service/${person.categoryName}`}>

                  <div className='box f_flex' key={person.categoryID} >
                    <img src={"../images/category/cat1.png"} alt='' />
                    <span>{person.categoryName}</span>
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
