import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Home from "./components/MainPage/Home"
import Login from "./common/login/Login"
import Data from "./components/Data"
import CustomerCart from "./common/customerCart/Cart"
import CustomerAccount from "./common/customerAccount/Account"
import Footer from "./common/footer/Footer"
import Service from './components/service/Service';
import ServiceProvider from './components/service/ServiceProvider';
import ProviderHeader from "./common/providerHeader/Header"
import ProviderPage from './components/providerPage/serviceSelect';
import ProviderServiceSelection from './components/providerServiceSelection/SubService';
import ProviderAccount from "./common/providerAccount/Cart"
import ProviderWallet from "./common/providerWallet/Cart"
import ProviderCart from "./common/providerCart/Cart"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path='/services/:cate'>
            <Header />
            <Service />
            <Footer />
          </Route>
          <Route path='/serviceProvider/:service'>
            <Header />
            <ServiceProvider />
            <Footer />
          </Route>
          <Route exact path='/account' >
            <Header />
            <CustomerAccount />
            <Footer />
          </Route>
          <Route exact path='/login' >
            <Login />
          </Route>
          <Route exact path='/cart' >
            <Header />
            <CustomerCart />
            <Footer />
          </Route>
          <Route exact path='/provider'>
            <ProviderHeader />
            <ProviderPage />
            <Footer />
          </Route>
          <Route exact path='/provider/account' >
            <ProviderHeader />
            <ProviderAccount />
            <Footer />
          </Route>
          <Route exact path='/provider/wallet' >
            <ProviderHeader />
            <ProviderWallet />
            <Footer />
          </Route>
          <Route exact path='/provider/cart' >
            <ProviderHeader />
            <ProviderCart />
            <Footer />
          </Route>
          <Route path='/provider/serviceSelect/:service'>
            <ProviderHeader />
            <ProviderServiceSelection />
            <Footer />
          </Route>
        </Switch>

      </Router>
    </>
  )
}

export default App
