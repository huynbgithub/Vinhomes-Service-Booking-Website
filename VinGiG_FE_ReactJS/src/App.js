import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Header from "./common/header/Header"
import Categories from "./common/header/Categories"
import ProviderHeader from "./common/providerHeader/Header"
import AdminHeader from "./common/adminHeader/Header"
import Footer from "./common/footer/Footer"
import Home from "./components/customerPage/Home"
import Login from "./common/login/Login"
import Logout from "./common/login/Logout"
import ServiceProvider from './components/customerService/ServiceProvider';
import CustomerAccount from "./components/customerAccount/Account"
import CustomerHistory from "./components/customerHistory/History"
import CustomerChat from "./components/customerChat/Chat"
import CustomerActivity from "./components/customerActivity/Activity"
import AdminPage from './components/adminPage/Home';
import AdminBuilding from './components/adminBuilding/Building';
import AdminBadge from './components/adminBadge/Badge';

import ProviderPage from './components/providerPage/Home';
import ProviderService from './components/providerService/Service';
import ProviderServiceAdding from './components/providerService/ServiceProvider';
import ProviderAccount from "./components/providerAccount/Account"
import ProviderWallet from "./components/providerWallet/Wallet"
import ProviderHistory from "./components/providerHistory/History"
import CustomerProtectedRoute from "./components/CustomerProtectedRoute"

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
          <Route exact path='/serviceProvider/:serviceID'>
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
          <CustomerProtectedRoute exact path='/customer/account' >
            <Header />
            <CustomerAccount />
            <Footer />
          </CustomerProtectedRoute>
          <CustomerProtectedRoute exact path='/customer/history' >
            <Header />
            <CustomerHistory />
            <Footer />
          </CustomerProtectedRoute>
          <CustomerProtectedRoute exact path='/customer/chat' >
            <Header />
            <CustomerChat />
            <Footer />
          </CustomerProtectedRoute>
          <CustomerProtectedRoute exact path='/customer/activity' >
            <Header />
            <CustomerActivity />
            <Footer />
          </CustomerProtectedRoute>
          <Route exact path='/admin'>
            <AdminHeader />
            <AdminPage />
            <Footer />
          </Route>
          <Route exact path='/admin/building'>
            <AdminHeader />
            <AdminBuilding />
            <Footer />
          </Route>
          <Route exact path='/admin/badge'>
            <AdminHeader />
            <AdminBadge />
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
