import React from "react"
import "./serviceSelect.css"
import SliderHome from "./Slider"
import { Link } from "react-router-dom"



const serviceSelect = () => {

  const datas = [
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Máy Lạnh",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Pin Cửa",
    },
  ]

  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <div className='category'>
            {datas.map((data) => {
              return (
                <Link to={`/provider/serviceSelect/${data.cateName}`}>
                  <div className='box f_flex' key={data.cateName}  >
                    <img src={data.cateImg} alt='' />
                    <span>{data.cateName}</span>
                  </div>
                </Link>
              )
            })}
          </div>
          <SliderHome />
        </div>
      </section>

    </>
  )
}


export default serviceSelect
