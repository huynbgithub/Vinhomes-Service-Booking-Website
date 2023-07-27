import "./style.scss"
import "./vendor.bundle.base.scss"
import "./typicons.scss"
import axios from 'axios';
import React, { useEffect, useState } from "react"
import { NumericFormat } from "react-number-format"

export default function Dashboard() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');

  useEffect(() => {
    loadBookingFeeTotal();
    loadBookingTotal();
    loadSubFeeTotal();
  }, [])

  const loadBookingFeeTotal = () => {
    axios.get(`http://localhost:8081/vingig/transaction/bookingFee/date/{dateMin}/{dateMax}/total`)
      .then(res => {
        const a = res.data;
        setA(a);
      })
      .catch(error => console.log(error));
  }
  const loadSubFeeTotal = () => {
    axios.get(`http://localhost:8081/vingig/transaction/subscriptionFee/date/{dateMin}/{dateMax}/total`)
      .then(res => {
        const b = res.data;
        setB(b);
      })
      .catch(error => console.log(error));
  }
  const loadBookingTotal = () => {
    axios.get(`http://localhost:8081/vingig/booking/date/{dateMin}/{dateMax}`)
      .then(res => {
        const c = res.data;
        setC(c);
      })
      .catch(error => console.log(error));
  }
  return (
    <div className="dashboard">
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-xl-8 grid-margin stretch-card flex-column">
                  <h5 className="mb-2 text-titlecase mb-4">Revenue statistics</h5>
                  <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body d-flex flex-column justify-content-between">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <p className="mb-0 text-muted">Booking Commission</p>
                          </div>
                          <h4><NumericFormat value={a * -1} displayType="text" thousandSeparator={true} suffix={' VND'} /></h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body d-flex flex-column justify-content-between">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <p className="mb-0 text-muted">Subscription Fee</p>
                          </div>
                          <h4><NumericFormat value={b * -1} displayType="text" thousandSeparator={true} suffix={' VND'} /></h4>
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
                            <h3 className="mb-"><NumericFormat value={-a - b} displayType="text" thousandSeparator={true} suffix={' VND'} /></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="row h-100">
                            <div className="col-6 d-flex flex-column justify-content-between">
                              <p className="text-muted">Booking No</p>
                              <h4>{c.totalBookingNo}</h4>
                            </div>
                            <div className="col-6 d-flex flex-column justify-content-between">
                              <p className="text-muted">Success Rate</p>
                              <h4>{Number(c.bookingCompletedNo * 100 / c.totalBookingNo).toFixed(2)}%</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 grid-margin stretch-card flex-column">
                  <h5 className="mb-2 text-titlecase mb-4">Money Flow</h5>
                  <div className="row h-100">
                    <div className="col-md-12 stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start flex-wrap">
                            <div>
                              <p className="mb-3">Cash By Service Totals</p>
                              <h3><NumericFormat value={c.totalCashFlow} displayType="text" thousandSeparator={true} suffix={' VND'} /></h3>
                            </div>
                            <div id="income-chart-legend" className="d-flex flex-wrap mt-1 mt-md-0" />
                          </div>
                        </div>
                      </div>
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
                          <h1 className="mb-0">{c.bookingCompletedNo}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                        <div>
                          <p className="mb-2 text-md-center text-lg-left">Booking Declined</p>
                          <h1 className="mb-0">{c.bookingDeclinedNo}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                        <div>
                          <p className="mb-2 text-md-center text-lg-left">Booking Cancelled</p>
                          <h1 className="mb-0">{c.bookingCancelledNo}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-xl-12 grid-margin stretch-card">
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
                  </div>
                </div>
              </div>
              {/* <div className="row">
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
              </div> */}
            </div>
            {/* content-wrapper ends */}
          </div>
        </div>
      </div>
      {/* <Helmet>
        <script src="./vendors/js/vendor.bundle.base.js" type="text/javascript"></script>
        <script src="./vendors/chart.js/Chart.min.js" type="text/javascript"></script>
        <script src="./js/off-canvas.js" type="text/javascript"></script>
        <script src="./js/hoverable-collapse.js" type="text/javascript"></script>
        <script src="./js/template.js" type="text/javascript"></script>
        <script src="./js/settings.js" type="text/javascript"></script>
        <script src="./js/todolist.js" type="text/javascript"></script>
        <script src="./js/dashboard.js" type="text/javascript"></script>
      </Helmet> */}
    </div>
  )
}
