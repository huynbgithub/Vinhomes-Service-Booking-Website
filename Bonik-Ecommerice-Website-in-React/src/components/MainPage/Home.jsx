import React from "react"
import "./Home.css"
import SliderHome from "./Slider"
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Shop from '../shops/Shop';



const Home = () => {
  
    const data = [
      {
        cateImg: "./images/category/cat1.png",
        cateName: "Máy lạnh",
      },
    ]
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
              <section className='home'>
                <div className='container d_flex'>
                      <div className='category'>
                        {data.map((value, index) => {
                          return (
                            <Link to='/Shop'>
                              <div className='box f_flex' key={index}  >
                                <img src={value.cateImg} alt='' />
                                <span>{value.cateName}</span>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                      <SliderHome/>
                </div>
              </section>
            </Route>
          <Route path='/Shop' exact>
            <Shop />
          </Route>
        </Switch>
      </Router>
    </>
  )
}


export default Home
