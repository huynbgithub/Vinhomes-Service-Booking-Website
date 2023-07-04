import React from "react"
// import "./style.css"


function Home() {

  return (
    <>

      <div>
        <div className="row" id="proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <p>Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!</p>
              <a href="https://bootstrapdash.com/demo/polluxui/template/index.html?utm_source=organic&utm_medium=banner&utm_campaign=free-preview" target="_blank" className="btn download-button purchase-button ml-auto">Upgrade To Pro</a>
              <i className="typcn typcn-delete-outline" id="bannerClose" />
            </span>
          </div>
        </div>
        <div className="container-scroller">
          {/* partial:partials/_navbar.html */}
          <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex justify-content-center">
              <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                <a className="navbar-brand brand-logo" href="index.html"><img src="images/logo.svg" alt="logo" /></a>
                <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo" /></a>
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                  <span className="typcn typcn-th-menu" />
                </button>
              </div>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
              <ul className="navbar-nav mr-lg-2">
                <li className="nav-item nav-profile dropdown">
                  <a className="nav-link" href="#" data-toggle="dropdown" id="profileDropdown">
                    <img src="images/faces/face5.jpg" alt="profile" />
                    <span className="nav-profile-name">Eugenia Mullins</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                    <a className="dropdown-item">
                      <i className="typcn typcn-cog-outline text-primary" />
                      Settings
                    </a>
                    <a className="dropdown-item">
                      <i className="typcn typcn-eject text-primary" />
                      Logout
                    </a>
                  </div>
                </li>
                <li className="nav-item nav-user-status dropdown">
                  <p className="mb-0">Last login was 23 hours ago.</p>
                </li>
              </ul>
              <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item nav-date dropdown">
                  <a className="nav-link d-flex justify-content-center align-items-center" href="javascript:;">
                    <h6 className="date mb-0">Today : Mar 23</h6>
                    <i className="typcn typcn-calendar" />
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                    <i className="typcn typcn-cog-outline mx-0" />
                    <span className="count" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                    <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <img src="images/faces/face4.jpg" alt="image" className="profile-pic" />
                      </div>
                      <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-normal">David Grey
                        </h6>
                        <p className="font-weight-light small-text text-muted mb-0">
                          The meeting is cancelled
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <img src="images/faces/face2.jpg" alt="image" className="profile-pic" />
                      </div>
                      <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-normal">Tim Cook
                        </h6>
                        <p className="font-weight-light small-text text-muted mb-0">
                          New product launch
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <img src="images/faces/face3.jpg" alt="image" className="profile-pic" />
                      </div>
                      <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-normal"> Johnson
                        </h6>
                        <p className="font-weight-light small-text text-muted mb-0">
                          Upcoming board meeting
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown mr-0">
                  <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
                    <i className="typcn typcn-bell mx-0" />
                    <span className="count" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                    <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-success">
                          <i className="typcn typcn-info mx-0" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">Application Error</h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                          Just now
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-warning">
                          <i className="typcn typcn-cog-outline mx-0" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">Settings</h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                          Private message
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-info">
                          <i className="typcn typcn-user mx-0" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">New user registration</h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                          2 days ago
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
              <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span className="typcn typcn-th-menu" />
              </button>
            </div>
          </nav>
          {/* partial */}
          <nav className="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0">
            <div className="navbar-links-wrapper d-flex align-items-stretch">
              <div className="nav-link">
                <a href="javascript:;"><i className="typcn typcn-calendar-outline" /></a>
              </div>
              <div className="nav-link">
                <a href="javascript:;"><i className="typcn typcn-mail" /></a>
              </div>
              <div className="nav-link">
                <a href="javascript:;"><i className="typcn typcn-folder" /></a>
              </div>
              <div className="nav-link">
                <a href="javascript:;"><i className="typcn typcn-document-text" /></a>
              </div>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
              <ul className="navbar-nav mr-lg-2">
                <li className="nav-item ml-0">
                  <h4 className="mb-0">Dashboard</h4>
                </li>
                <li className="nav-item">
                  <div className="d-flex align-items-baseline">
                    <p className="mb-0">Home</p>
                    <i className="typcn typcn-chevron-right" />
                    <p className="mb-0">Main Dahboard</p>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item nav-search d-none d-md-block mr-0">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search..." aria-label="search" aria-describedby="search" />
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="search">
                        <i className="typcn typcn-zoom" />
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid page-body-wrapper">
            {/* partial:partials/_settings-panel.html */}
            <div className="theme-setting-wrapper">
              <div id="settings-trigger"><i className="typcn typcn-cog-outline" /></div>
              <div id="theme-settings" className="settings-panel">
                <i className="settings-close typcn typcn-times" />
                <p className="settings-heading">SIDEBAR SKINS</p>
                <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3" />Light</div>
                <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3" />Dark</div>
                <p className="settings-heading mt-2">HEADER SKINS</p>
                <div className="color-tiles mx-0 px-4">
                  <div className="tiles success" />
                  <div className="tiles warning" />
                  <div className="tiles danger" />
                  <div className="tiles info" />
                  <div className="tiles dark" />
                  <div className="tiles default" />
                </div>
              </div>
            </div>
            <div id="right-sidebar" className="settings-panel">
              <i className="settings-close typcn typcn-times" />
              <ul className="nav nav-tabs" id="setting-panel" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
                </li>
              </ul>
              <div className="tab-content" id="setting-content">
                <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
                  <div className="add-items d-flex px-3 mb-0">
                    <form className="form w-100">
                      <div className="form-group d-flex">
                        <input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
                        <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                      </div>
                    </form>
                  </div>
                  <div className="list-wrapper px-3">
                    <ul className="d-flex flex-column-reverse todo-list">
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" />
                            Team review meeting at 3.00 PM
                          </label>
                        </div>
                        <i className="remove typcn typcn-delete-outline" />
                      </li>
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" />
                            Prepare for presentation
                          </label>
                        </div>
                        <i className="remove typcn typcn-delete-outline" />
                      </li>
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" />
                            Resolve all the low priority tickets due today
                          </label>
                        </div>
                        <i className="remove typcn typcn-delete-outline" />
                      </li>
                      <li className="completed">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" defaultChecked />
                            Schedule meeting for next week
                          </label>
                        </div>
                        <i className="remove typcn typcn-delete-outline" />
                      </li>
                      <li className="completed">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" defaultChecked />
                            Project review
                          </label>
                        </div>
                        <i className="remove typcn typcn-delete-outline" />
                      </li>
                    </ul>
                  </div>
                  <div className="events py-4 border-bottom px-3">
                    <div className="wrapper d-flex mb-2">
                      <i className="typcn typcn-media-record-outline text-primary mr-2" />
                      <span>Feb 11 2018</span>
                    </div>
                    <p className="mb-0 font-weight-thin text-gray">Creating component page</p>
                    <p className="text-gray mb-0">build a js based app</p>
                  </div>
                  <div className="events pt-4 px-3">
                    <div className="wrapper d-flex mb-2">
                      <i className="typcn typcn-media-record-outline text-primary mr-2" />
                      <span>Feb 7 2018</span>
                    </div>
                    <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                    <p className="text-gray mb-0 ">Call Sarah Graves</p>
                  </div>
                </div>
                {/* To do section tab ends */}
                <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
                  <div className="d-flex align-items-center justify-content-between border-bottom">
                    <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                    <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
                  </div>
                  <ul className="chat-list">
                    <li className="list active">
                      <div className="profile"><img src="images/faces/face1.jpg" alt="image" /><span className="online" /></div>
                      <div className="info">
                        <p>Thomas Douglas</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">19 min</small>
                    </li>
                    <li className="list">
                      <div className="profile"><img src="images/faces/face2.jpg" alt="image" /><span className="offline" /></div>
                      <div className="info">
                        <div className="wrapper d-flex">
                          <p>Catherine</p>
                        </div>
                        <p>Away</p>
                      </div>
                      <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                      <small className="text-muted my-auto">23 min</small>
                    </li>
                    <li className="list">
                      <div className="profile"><img src="images/faces/face3.jpg" alt="image" /><span className="online" /></div>
                      <div className="info">
                        <p>Daniel Russell</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">14 min</small>
                    </li>
                    <li className="list">
                      <div className="profile"><img src="images/faces/face4.jpg" alt="image" /><span className="offline" /></div>
                      <div className="info">
                        <p>James Richardson</p>
                        <p>Away</p>
                      </div>
                      <small className="text-muted my-auto">2 min</small>
                    </li>
                    <li className="list">
                      <div className="profile"><img src="images/faces/face5.jpg" alt="image" /><span className="online" /></div>
                      <div className="info">
                        <p>Madeline Kennedy</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">5 min</small>
                    </li>
                    <li className="list">
                      <div className="profile"><img src="images/faces/face6.jpg" alt="image" /><span className="online" /></div>
                      <div className="info">
                        <p>Sarah Graves</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">47 min</small>
                    </li>
                  </ul>
                </div>
                {/* chat tab ends */}
              </div>
            </div>
            {/* partial */}
            {/* partial:partials/_sidebar.html */}
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    <i className="typcn typcn-device-desktop menu-icon" />
                    <span className="menu-title">Dashboard</span>
                    <div className="badge badge-danger">new</div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                    <i className="typcn typcn-document-text menu-icon" />
                    <span className="menu-title">UI Elements</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                      <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                      <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                    <i className="typcn typcn-film menu-icon" />
                    <span className="menu-title">Form elements</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="form-elements">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                    <i className="typcn typcn-chart-pie-outline menu-icon" />
                    <span className="menu-title">Charts</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="charts">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                    <i className="typcn typcn-th-small-outline menu-icon" />
                    <span className="menu-title">Tables</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="tables">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                    <i className="typcn typcn-compass menu-icon" />
                    <span className="menu-title">Icons</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="icons">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                    <i className="typcn typcn-user-add-outline menu-icon" />
                    <span className="menu-title">User Pages</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="auth">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                      <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
                    <i className="typcn typcn-globe-outline menu-icon" />
                    <span className="menu-title">Error pages</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="error">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                      <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://bootstrapdash.com/demo/polluxui-free/docs/documentation.html">
                    <i className="typcn typcn-mortar-board menu-icon" />
                    <span className="menu-title">Documentation</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* partial */}
            <div className="main-panel">
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-xl-6 grid-margin stretch-card flex-column">
                    <h5 className="mb-2 text-titlecase mb-4">Revenue statistics</h5>
                    <div className="row">
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <p className="mb-0 text-muted">Booking Commission</p>
                              <p className="mb-0 text-muted">+5.7%</p>
                            </div>
                            <h4>36.545.000</h4>
                            <canvas id="transactions-chart" className="mt-auto" height={65} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <p className="mb-0 text-muted">Subscription Fee</p>
                              <p className="mb-0 text-muted">+4.37%</p>
                            </div>
                            <h4>15.625.000</h4>
                            <canvas id="sales-chart-a" className="mt-auto" height={65} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row h-100">
                      <div className="col-md-6 stretch-card grid-margin grid-margin-md-0">
                        <div className="card">
                          <div className="card-body d-flex flex-column justify-content-between">
                            <p className="text-muted">Total Revenue</p>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <h3 className="mb-">52.170.000</h3>
                              <h3 className="mb-">78%</h3>
                            </div>
                            <canvas id="sales-chart-b" className="mt-auto" height={38} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 stretch-card">
                        <div className="card">
                          <div className="card-body">
                            <div className="row h-100">
                              <div className="col-6 d-flex flex-column justify-content-between">
                                <p className="text-muted">Booking No</p>
                                <h4>4526</h4>
                                <canvas id="cpu-chart" className="mt-auto" />
                              </div>
                              <div className="col-6 d-flex flex-column justify-content-between">
                                <p className="text-muted">Success Rate</p>
                                <h4>87.15%</h4>
                                <canvas id="memory-chart" className="mt-auto" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 grid-margin stretch-card flex-column">
                    <h5 className="mb-2 text-titlecase mb-4">Money Flow</h5>
                    <div className="row h-100">
                      <div className="col-md-12 stretch-card">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start flex-wrap">
                              <div>
                                <p className="mb-3">Cash By Service Totals</p>
                                <h3>215.389.000</h3>
                              </div>
                              <div id="income-chart-legend" className="d-flex flex-wrap mt-1 mt-md-0" />
                            </div>
                            <canvas id="income-chart" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body border-bottom">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-2 mb-md-0 text-uppercase font-weight-medium">Subscription Plan</h6>
                          <div className="dropdown">
                            <button className="btn bg-white p-0 pb-1 text-muted btn-sm dropdown-toggle" type="button" id="dropdownMenuSizeButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Last 6 months
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton3">
                              <h6 className="dropdown-header">Settings</h6>
                              <a className="dropdown-item" href="javascript:;">Action</a>
                              <a className="dropdown-item" href="javascript:;">Another action</a>
                              <a className="dropdown-item" href="javascript:;">Something else here</a>
                              <div className="dropdown-divider" />
                              <a className="dropdown-item" href="javascript:;">Separated link</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <canvas id="sales-chart-c" className="mt-2" />
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4 mt-4">
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="text-muted">Tháng</p>
                            <h5>132</h5>
                            <div className="d-flex align-items-baseline">
                              <p className="text-success mb-0">+15.5%</p>
                              <i className="typcn typcn-arrow-up-thick text-success" />
                            </div>
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="text-muted">Quý</p>
                            <h5>96</h5>
                            <div className="d-flex align-items-baseline">
                              <p className="text-success mb-0">+13.8%</p>
                              <i className="typcn typcn-arrow-up-thick text-success" />
                            </div>
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="text-muted">Bán Niên</p>
                            <h5>56</h5>
                            <div className="d-flex align-items-baseline">
                              <p className="text-danger mb-0">-2.15%</p>
                              <i className="typcn typcn-arrow-down-thick text-danger" />
                            </div>
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="text-muted">Thường Niên</p>
                            <h5>42</h5>
                            <div className="d-flex align-items-baseline">
                              <p className="text-danger mb-0">+1.45%</p>
                              <i className="typcn typcn-arrow-down-thick text-danger" />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="dropdown">
                            <button className="btn bg-white p-0 pb-1 pt-1 text-muted btn-sm dropdown-toggle" type="button" id="dropdownMenuSizeButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Last 7 days
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton3">
                              <h6 className="dropdown-header">Settings</h6>
                              <a className="dropdown-item" href="javascript:;">Action</a>
                              <a className="dropdown-item" href="javascript:;">Another action</a>
                              <a className="dropdown-item" href="javascript:;">Something else here</a>
                              <div className="dropdown-divider" />
                              <a className="dropdown-item" href="javascript:;">Separated link</a>
                            </div>
                          </div>
                          <p className="mb-0">overview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4 grid-margin stretch-card">
                    <div className="row">
                      <div className="col-md-12 grid-margin stretch-card">
                        <div className="card newsletter-card bg-gradient-warning">
                          <div className="card-body">
                            <div className="d-flex flex-column align-items-center justify-content-center h-100">
                              <h5 className="mb-3 text-white">Save Reports</h5>
                              <form className="form d-flex flex-column align-items-center justify-content-between w-100">
                                <div className="form-group mb-2 w-100">
                                  <input type="text" className="form-control" placeholder="vingig2023@gmail.com" />
                                </div>
                                <button className="btn btn-danger btn-rounded mt-1" type="submit">Send</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 stretch-card">
                        <div className="card profile-card bg-gradient-primary">
                          <div className="card-body">
                            <div className="row align-items-center h-100">
                              <div className="col-md-4">
                                <figure className="avatar mx-auto mb-4 mb-md-0">
                                  <img src="images/faces/logo_white.png" alt="avatar" />
                                </figure>
                              </div>
                              <div className="col-md-8">
                                <h5 className="text-white text-center text-md-left">VinGiG</h5>
                                <p className="text-white text-center text-md-left" />
                                <div className="d-flex align-items-center justify-content-between info pt-2">
                                  <div>
                                    <p className="text-white font-weight-bold">Start</p>
                                    <p className="text-white font-weight-bold">Location</p>
                                  </div>
                                  <div>
                                    <p className="text-white">16 Jun 2023</p>
                                    <p className="text-white">Vinhomes GrandPark</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body border-bottom">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-2 mb-md-0 text-uppercase font-weight-medium">User Statistics</h6>
                          <div className="dropdown">
                            <button className="btn bg-white p-0 pb-1 text-muted btn-sm dropdown-toggle" type="button" id="dropdownMenuSizeButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Last 7 months
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton4">
                              <h6 className="dropdown-header">Settings</h6>
                              <a className="dropdown-item" href="javascript:;">Action</a>
                              <a className="dropdown-item" href="javascript:;">Another action</a>
                              <a className="dropdown-item" href="javascript:;">Something else here</a>
                              <div className="dropdown-divider" />
                              <a className="dropdown-item" href="javascript:;">Separated link</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <canvas id="sales-chart-d" height={320} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                          <div>
                            <p className="mb-2 text-md-center text-lg-left">Booking Completed</p>
                            <h1 className="mb-0">4526</h1>
                          </div>
                          <i className="typcn typcn-briefcase icon-xl text-secondary" />
                        </div>
                        <canvas id="expense-chart" height={80} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                          <div>
                            <p className="mb-2 text-md-center text-lg-left">Booking Declined</p>
                            <h1 className="mb-0">214</h1>
                          </div>
                          <i className="typcn typcn-chart-pie icon-xl text-secondary" />
                        </div>
                        <canvas id="budget-chart" height={80} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                          <div>
                            <p className="mb-2 text-md-center text-lg-left">Booking Cancelled</p>
                            <h1 className="mb-0">32</h1>
                          </div>
                          <i className="typcn typcn-clipboard icon-xl text-secondary" />
                        </div>
                        <canvas id="balance-chart" height={80} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="table-responsive pt-3">
                        <table className="table table-striped project-orders-table">
                          <thead>
                            <tr>
                              <th className="ml-5">ID</th>
                              <th>Project name</th>
                              <th>Customer</th>
                              <th>Deadline</th>
                              <th>Payouts	</th>
                              <th>Traffic</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>#D1</td>
                              <td>Consectetur adipisicing elit </td>
                              <td>Beulah Cummings</td>
                              <td>03 Jan 2019</td>
                              <td>$ 5235</td>
                              <td>1.3K</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                                    Edit
                                    <i className="typcn typcn-edit btn-icon-append" />
                                  </button>
                                  <button type="button" className="btn btn-danger btn-sm btn-icon-text">
                                    Delete
                                    <i className="typcn typcn-delete-outline btn-icon-append" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>#D2</td>
                              <td>Correlation natural resources silo</td>
                              <td>Mitchel Dunford</td>
                              <td>09 Oct 2019</td>
                              <td>$ 3233</td>
                              <td>5.4K</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                                    Edit
                                    <i className="typcn typcn-edit btn-icon-append" />
                                  </button>
                                  <button type="button" className="btn btn-danger btn-sm btn-icon-text">
                                    Delete
                                    <i className="typcn typcn-delete-outline btn-icon-append" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>#D3</td>
                              <td>social capital compassion social</td>
                              <td>Pei Canaday</td>
                              <td>18 Jun 2019</td>
                              <td>$ 4311</td>
                              <td>2.1K</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                                    Edit
                                    <i className="typcn typcn-edit btn-icon-append" />
                                  </button>
                                  <button type="button" className="btn btn-danger btn-sm btn-icon-text">
                                    Delete
                                    <i className="typcn typcn-delete-outline btn-icon-append" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>#D4</td>
                              <td>empower communities thought</td>
                              <td>Gaynell Sharpton</td>
                              <td>23 Mar 2019</td>
                              <td>$ 7743</td>
                              <td>2.7K</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                                    Edit
                                    <i className="typcn typcn-edit btn-icon-append" />
                                  </button>
                                  <button type="button" className="btn btn-danger btn-sm btn-icon-text">
                                    Delete
                                    <i className="typcn typcn-delete-outline btn-icon-append" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>#D5</td>
                              <td> Targeted effective; mobilize </td>
                              <td>Audrie Midyett</td>
                              <td>22 Aug 2019</td>
                              <td>$ 2455</td>
                              <td>1.2K</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                                    Edit
                                    <i className="typcn typcn-edit btn-icon-append" />
                                  </button>
                                  <button type="button" className="btn btn-danger btn-sm btn-icon-text">
                                    Delete
                                    <i className="typcn typcn-delete-outline btn-icon-append" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* content-wrapper ends */}
              {/* partial:partials/_footer.html */}
              <footer className="footer">
                <div className="card">
                  <div className="card-body">
                    <div className="d-sm-flex justify-content-center justify-content-sm-between">
                      <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2020 <a href="https://www.bootstrapdash.com/" className="text-muted" target="_blank">Bootstrapdash</a>. All rights reserved.</span>
                      <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center text-muted">Free <a href="https://www.bootstrapdash.com/" className="text-muted" target="_blank">Bootstrap dashboard</a> templates from Bootstrapdash.com</span>
                    </div>
                  </div>
                </div>
              </footer>
              {/* partial */}
            </div>
            {/* main-panel ends */}
          </div>
          {/* page-body-wrapper ends */}
        </div>
        {/* container-scroller */}
        {/* base:js */}
        {/* endinject */}
        {/* Plugin js for this page*/}
        {/* End plugin js for this page*/}
        {/* inject:js */}
        {/* endinject */}
        {/* Custom js for this page*/}
        {/* End custom js for this page*/}
      </div>
    </>
  )
}


export default Home
