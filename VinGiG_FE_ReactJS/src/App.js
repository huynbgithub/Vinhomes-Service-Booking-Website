import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Header from "./common/header/Header"
import Footer from "./common/footer/Footer"
import Home from "./components/MainPage/Home"
import Login from "./common/login/Login"
import Logout from "./common/login/Logout"
import ServiceProvider from './components/customerService/ServiceProvider';
// import Data from "./components/Data"
import CustomerAccount from "./common/customerAccount/Account"
import CustomerHistory from "./common/customerHistory/History"
import CustomerChat from "./common/customerChat/Chat"
import CustomerActivity from "./common/customerActivity/Activity"
import ProviderHeader from "./common/providerHeader/Header"
import ProviderPage from './components/providerPage/Home';
import ProviderService from './components/providerService/Service';
import ProviderServiceAdding from './components/providerService/ServiceProvider';
import ProviderAccount from "./common/providerAccount/Account"
import ProviderWallet from "./common/providerWallet/Wallet"
import ProviderHistory from "./common/providerHistory/History"
import Categories from "./common/header/Categories"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Categories />
            <Home />
            <Footer />
          </Route>
          <Route path='/serviceProvider/:service'>
            <Header />
            <Categories />
            <ServiceProvider />
            <Footer />
          </Route>

          <Route exact path='/login' >
            <Login />
          </Route>
          <Route exact path='/logout' >
            <Logout />
          </Route>
          <ProtectedRoute exact path='/customer/account/:accID' >
            <Header />
            <CustomerAccount />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute exact path='/customer/history' >
            <Header />
            <CustomerHistory />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute exact path='/customer/chat' >
            <Header />
            <CustomerChat />
            <Footer />
          </ProtectedRoute>
          {/* <Route exact path='/customer/history' render={() => {
            return localStorage.getItem("accessToken") ? <CustomerHistory /> : <Redirect to="/login" />
          }}>

          </Route> */}
          <ProtectedRoute exact path='/customer/activity' >
            <Header />
            <CustomerActivity />
            <Footer />
          </ProtectedRoute>
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
