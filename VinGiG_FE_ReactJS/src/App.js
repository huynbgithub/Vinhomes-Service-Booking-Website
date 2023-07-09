import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Header from "./common/header/Header"
import Categories from "./common/header/Categories"
import ProviderCategories from "./common/providerHeader/Categories"
import ProviderHeader from "./common/providerHeader/Header"
import AdminHeader from "./common/adminHeader/Header"
import Footer from "./common/footer/Footer"
import Home from "./components/customerPage/Home"
import Login from "./common/login/Login"
import Logout from "./common/login/Logout"
import ServiceProvider from './components/customerService/ServiceProvider';
import ServiceProviderDetail from './components/customerServiceDetail/ServiceProviderDetail';
import CustomerAccount from "./components/customerAccount/Account"
import CustomerHistory from "./components/customerHistory/History"
import CustomerChat from "./components/customerChat/Chat"
import CustomerActivity from "./components/customerActivity/Activity"
import AdminPage from './components/adminPage/Home';
import AdminBuilding from './components/adminBuilding/Building';
import AdminBadge from './components/adminBadge/Badge';
import AdminCategory from './components/adminCategory/Category';
import AdminService from './components/adminService/Service';
import AdminCustomer from './components/adminCustomer/Customer';
import AdminProvider from './components/adminProvider/Provider';
import AdminSubscriptionPlan from './components/adminSubscriptionPlan/SubscriptionPlan';
import AdminDashboard from './components/adminDashboard/Dashboard';
import ProviderPage from './components/providerPage/Home';
import ProviderAccount from "./components/providerAccount/Account"
import ProviderWallet from "./components/providerWallet/Wallet"
import ProviderHistory from "./components/providerHistory/History"
import ProviderActivity from "./components/providerActivity/Activity"
import ProviderChat from "./components/providerChat/Chat"
import ProviderService from "./components/providerService/Service"
import CustomerProtectedRoute from "./components/CustomerProtectedRoute"
import ProviderProtectedRoute from "./components/ProviderProtectedRoute"

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
          <CustomerProtectedRoute exact path='/customer/serviceProviderDetail/:serviceProviderID' >
            <Header />
            <Categories />
            <ServiceProviderDetail />
            <Footer />
          </CustomerProtectedRoute>
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
          <Route exact path='/admin/category'>
            <AdminHeader />
            <AdminCategory />
            <Footer />
          </Route>
          <Route exact path='/admin/service'>
            <AdminHeader />
            <AdminService />
            <Footer />
          </Route>
          <Route exact path='/admin/customer'>
            <AdminHeader />
            <AdminCustomer />
            <Footer />
          </Route>
          <Route exact path='/admin/provider'>
            <AdminHeader />
            <AdminProvider />
            <Footer />
          </Route>
          <Route exact path='/admin/subscriptionPlan'>
            <AdminHeader />
            <AdminSubscriptionPlan />
            <Footer />
          </Route>
          <Route exact path='/admin/dashboard'>
            <AdminHeader />
            <AdminDashboard />
            <Footer />
          </Route>
          <ProviderProtectedRoute exact path='/provider'>
            <ProviderHeader />
            <ProviderPage />
            <Footer />
          </ProviderProtectedRoute>
          <ProviderProtectedRoute exact path='/provider/account/' >
            <ProviderHeader />
            <ProviderAccount />
            <Footer />
          </ProviderProtectedRoute>
          <ProviderProtectedRoute exact path='/provider/wallet' >
            <ProviderHeader />
            <ProviderWallet />
            <Footer />
          </ProviderProtectedRoute>
          <ProviderProtectedRoute exact path='/provider/chat' >
            <ProviderHeader />
            <ProviderChat />
            <Footer />
          </ProviderProtectedRoute>
          <ProviderProtectedRoute exact path='/provider/history' >
            <ProviderHeader />
            <ProviderHistory />
            <Footer />
          </ProviderProtectedRoute>
          <ProviderProtectedRoute exact path='/provider/activity' >
            <ProviderHeader />
            <ProviderActivity />
            <Footer />
          </ProviderProtectedRoute>
          <ProviderProtectedRoute exact path='/provider/service' >
            <ProviderHeader />
            {/* <ProviderCategories /> */}
            <ProviderService />
            <Footer />
          </ProviderProtectedRoute>
        </Switch>

      </Router>
    </>
  )
}

export default App
