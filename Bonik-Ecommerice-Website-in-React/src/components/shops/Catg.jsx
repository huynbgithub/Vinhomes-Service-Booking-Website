import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Kiểm tra máy lạnh",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Sub Services</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        {/* <div className='box box2'>
          <button>View All Services</button>
        </div> */}
      </div>
    </>
  )
}

export default Catg
