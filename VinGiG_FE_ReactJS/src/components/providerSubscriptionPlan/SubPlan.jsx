import axios from 'axios';
import React, { useEffect, useState } from "react"
import { NumericFormat } from "react-number-format"

export default function SubPlan() {

  const providerSession = JSON.parse(localStorage.getItem("accessToken"));
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [plans, setPlans] = useState([]);
  const [histories, setHistories] = useState([]);
  const [count, setCount] = useState({});
  const [cur, setCur] = useState({});

  useEffect(() => {
    loadPlans();
    loadHistories();
    getDaysTillExpiredDate();
  }, [])

  const loadPlans = () => {
    axios.get(`http://localhost:8081/vingig/subscriptionPlans`)
      .then(res => {
        const plans = res.data;
        setPlans(plans);
      })
      .catch(error => console.log(error));
  }

  const loadHistories = () => {
    axios.get(`http://localhost:8081/vingig/provider/${providerSession.providerID}/subscriptionFees/date/{dateMin}/{dateMax}`)
      .then(res => {
        const histories = res.data;
        setHistories(histories);
        setCur(histories[0]);
        // setCur(histories[histories.length - 1]);
      })
      .catch(error => console.log(error));
  }

  const getDaysTillExpiredDate = () => {
    axios.get(`http://localhost:8081/vingig/provider/${providerSession.providerID}/counts`)
      .then(res => {
        const counts = res.data;
        setCount(counts[0]);
      })
      .catch(error => console.log(error));
  }

  async function handleAdd(e) {
    e.preventDefault()
    // Code to handle add
    await axios.post(`http://localhost:8081/vingig/subscriptionPlan/${selectedPlan.planID}/provider/${providerSession.providerID}/subscriptionFee`,
      {
        amount: selectedPlan.amount
      })
      .catch(error => console.log(error));
    loadHistories();
  }

  const epochTime = cur.date;

  const dateObj = new Date(epochTime);

  const date = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getYear() - 100 + 2000;

  const formattedTime =
    date.toString() + '/' +
    month.toString() + '/' +
    year.toString();

  return (
    <div className="dashboard">
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <h4 className="page-header text-center">Subscription Plan</h4>
              <div className="row">
                <div className="col-xl-12 grid-margin stretch-card flex-column">
                  <h5 className="mb-2 text-titlecase mb-4">Các Gói Subscription</h5>
                  <div className="row">
                    {plans.map((plan) => (
                      <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <p className="mb-0 text-muted">{plan.description}</p>
                              <p className="mb-0 text-muted">{plan.duration} ngày</p>
                            </div>
                            <h4><NumericFormat value={plan.price} displayType="text" thousandSeparator={true} suffix={' VND'} /></h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-xl-4 grid-margin stretch-card">
                      <div className="row">
                        <div className="col-md-12 stretch-card">
                          <div className="card profile-card bg-gradient-primary">
                            <div className="card-body">
                              <div className="row align-items-center h-100">
                                <div className="col-md-12">
                                  <h5 className="text-white text-center text-md-left">Gói Hiện Tại</h5>
                                  <p className="text-white text-center text-md-left" />
                                  <div className="d-flex align-items-center justify-content-between info pt-2">
                                    <div>
                                      <p className="text-white font-weight-bold">Tên gói</p>
                                      <p className="text-white font-weight-bold">Ngày đăng ký</p>
                                      <p className="text-white font-weight-bold">Số ngày còn lại</p>
                                    </div>
                                    <div>
                                      <p className="text-white">{cur.description}</p>
                                      <p className="text-white">{formattedTime}</p>
                                      <p className="text-white">{count.count}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 grid-margin stretch-card">
                          <div className="card newsletter-card bg-gradient-warning">
                            <div className="card-body">
                              <div className="d-flex flex-column align-items-center justify-content-center h-100">
                                <h5 className="mb-3 text-white">Đăng Ký Gói Mới</h5>
                                <form className="form d-flex flex-column align-items-center justify-content-between w-100" onSubmit={handleAdd}>
                                  <div className="form-group mb-2 w-100">
                                    <select className="form-control" required onChange={e => { setSelectedPlan(plans.find(plan => plan.planID == e.target.value)) }}>
                                      <option value=""></option>
                                      {plans.map((plan) => (
                                        <option value={plan.planID}>{plan.description}</option>
                                      ))}
                                    </select>
                                  </div>
                                  <button className="btn btn-danger btn-rounded mt-1" type="submit">Đăng ký</button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h5 className="mb-2 text-titlecase mb-4">Lịch sử đăng ký gói</h5>
                      <div className="card">
                        <div className="table-responsive pt-3">
                          <table className="table table-striped project-orders-table">
                            <thead>
                              <tr>
                                <th>Tên Gói</th>
                                <th>Giá Gói</th>
                                <th>Ngày đăng ký</th>
                              </tr>
                            </thead>
                            <tbody>
                              {histories.map((history) => {
                                var epochTime = history.date;

                                var dateObj = new Date(epochTime);

                                var date = dateObj.getDate();
                                var month = dateObj.getMonth() + 1;
                                var year = dateObj.getYear() - 100 + 2000;
                                var hours = dateObj.getHours();
                                var minutes = dateObj.getMinutes();
                                var seconds = dateObj.getSeconds();

                                var formattedTime =
                                  date.toString() + '/' +
                                  month.toString() + '/' +
                                  year.toString() + ' ' +
                                  hours.toString().padStart(2, '0') + ':' +
                                  minutes.toString().padStart(2, '0') + ':' +
                                  seconds.toString().padStart(2, '0');
                                return (
                                  <tr >
                                    <td>{history.description}</td>
                                    <td>{history.amount}</td>
                                    <td>{formattedTime}</td>
                                    <td>
                                      {/* <div className="d-flex align-items-center">
                                        <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                                          Edit
                                          <i className="typcn typcn-edit btn-icon-append" />
                                        </button>
                                        <button type="button" className="btn btn-danger btn-sm btn-icon-text">
                                          Delete
                                          <i className="typcn typcn-delete-outline btn-icon-append" />
                                        </button>
                                      </div> */}
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody >
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
          </div>
        </div>
      </div>
    </div >
  )
}
