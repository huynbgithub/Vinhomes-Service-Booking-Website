import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Footer from "./common/footer/Footer"
import Home from "./components/MainPage/Home"
import Login from "./common/login/Login"
import ServiceProvider from './components/service/ServiceProvider';
// import Data from "./components/Data"
import CustomerAccount from "./common/customerAccount/Account"
import CustomerHistory from "./common/customerHistory/History"
import ProviderHeader from "./common/providerHeader/Header"
import ProviderPage from './components/providerPage/Home';
import ProviderService from './components/providerService/Service';
import ProviderServiceAdding from './components/providerService/ServiceProvider';
import ProviderAccount from "./common/providerAccount/Account"
import ProviderWallet from "./common/providerWallet/Wallet"
import ProviderHistory from "./common/providerHistory/History"

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
          <Route path='/serviceProvider/:service'>
            <Header />
            <ServiceProvider />
            <Footer />
          </Route>
          <Route exact path='/account/:accID' >
            <Header />
            <CustomerAccount />
            <Footer />
          </Route>
          <Route exact path='/login' >
            <Login />
          </Route>
          <Route exact path='/history' >
            <Header />
            <CustomerHistory />
            <Footer />
          </Route>
          <Route exact path='/provider'>
            <ProviderHeader />
            <ProviderPage />
            <Footer />
          </Route>
          <Route path='/provider/service/:cate'>
            <ProviderHeader />
            <ProviderService />
            <Footer />
          </Route>
          <Route path='/provider/serviceAdding/:service'>
            <ProviderHeader />
            <ProviderServiceAdding />
            <Footer />
          </Route>
          <Route exact path='/provider/account/:accID' >
            <ProviderHeader />
            <ProviderAccount />
            <Footer />
          </Route>
          <Route exact path='/provider/wallet' >
            <ProviderHeader />
            <ProviderWallet />
            <Footer />
          </Route>
          <Route exact path='/provider/history' >
            <ProviderHeader />
            <ProviderHistory />
            <Footer />
          </Route>
          {/* <Route exact path='/provider/wallet' >
            <ProviderHeader />
            <ProviderWallet />
            <Footer />
          </Route>
          <Route exact path='/provider/history' >
            <ProviderHeader />
            <ProviderHistory />
            <Footer />
          </Route> */}
        </Switch>

      </Router>
    </>
  )
}

export default App
