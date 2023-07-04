import React from "react"
import "./style.scss"
import "./vendor.bundle.base.scss"
import "./typicons.scss"

export default function Dashboard() {

  return (
    <div className="dashboard">
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper">
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
          </div>
        </div>
      </div>
    </div>
  )
}