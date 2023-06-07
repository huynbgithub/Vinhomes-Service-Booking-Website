import React from "react"
// import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"
import { useParams } from "react-router-dom"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Link } from "react-router-dom"

const SubService = ({ addToCart, shopItems }) => {
  const { service } = useParams()
  const datas = [
    {
      cateImg: "../images/category/cat-3.png",
      cateName: "Thay Lọc Gió",
    },
    {
      cateImg: "../images/category/cat-2.png",
      cateName: "Kiểm Tra Nhiệt Độ",
    },
  ]

  return (
    <>

      <section className='shop background'>
        <div className='container d_flex'>
          <div className='category'>
            <div className='chead d_flex'>
              <h1>Chi Tiết Dịch Vụ {service}</h1>
            </div>
            {datas.map((data) => {
              return (
                <Link to={`/provider/serviceSelect/${service}/${data.cateName}`}>
                  <div className='box f_flex' key={data.cateName}>
                    <img src={data.cateImg} alt='' />
                    <span>{data.cateName}</span>
                  </div>
                </Link>
              )
            })}
            {/* <div className='box box2'>
              <button>Xem Thêm</button>
            </div> */}
          </div>

          <div className='contentWidth'>
            {/* <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Provided By</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div> */}
            <button className='btn-primary'>Select This Service</button>
            <div style={{ paddingTop: '10px' }}>
              <h3>Please input detail:</h3>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
            {/* <Router>
              <Switch>
                <Route path='/service/:service'>
                  <div className='product-content  grid1'>
                    <ShopCart addToCart={addToCart} shopItems={shopItems}/>
                  </div>
                </Route>
              </Switch>
            </Router> */}
          </div>
        </div>
      </section >
    </>
  )
}

export default SubService
