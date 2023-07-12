import React, { useEffect } from "react"
import "./style.scss"
import "./vendor.bundle.base.scss"
import "./typicons.scss"
// import { Helmet } from "react-helmet";
import $ from 'jquery';
import { Chart} from 'chart.js';


export default function Dashboard() {

  useEffect(() => {
    const script1 = document.createElement('script1');
    script1.src = 'vendors/chart.js/Chart.min.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script2');
    script2.src = 'vendors/chart.js/Chart.min.js';
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement('script3');
    script3.src = 'js/off-canvas.js';
    script3.async = true;
    document.body.appendChild(script3);

    const script4 = document.createElement('script4');
    script4.src = 'js/hoverable-collapse.js';
    script4.async = true;
    document.body.appendChild(script4);

    const script5 = document.createElement('script5');
    script5.src = 'js/template.js';
    script5.async = true;
    document.body.appendChild(script5);

    const script6 = document.createElement('script6');
    script6.src = 'js/settings.js';
    script6.async = true;
    document.body.appendChild(script6);

    const script7 = document.createElement('script7');
    script7.src = 'js/todolist.js';
    script7.async = true;
    document.body.appendChild(script7);

    const script8 = document.createElement('script8');
    script8.src = 'js/dashboard.js';
    script8.async = true;
    document.body.appendChild(script8);

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
      document.body.removeChild(script4);
      document.body.removeChild(script5);
      document.body.removeChild(script6);
      document.body.removeChild(script7);
      document.body.removeChild(script8);
    };
  }, []);
  // useEffect(() => {
    // const renderChart = () => {
    //   if ($("#transactions-chart").length) {
    //       var transactionsChartCanvas = $("#transactions-chart").get(0).getContext("2d");
    
    //       var gradientFill = transactionsChartCanvas.createLinearGradient(0, 0, 0, 110);
    //       gradientFill.addColorStop(0, "rgba(255, 255, 255, 1)");
    //       gradientFill.addColorStop(1, "rgba(243, 153, 21, .6)");
    
    //       var areaData = {
    //         labels: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL"],
    //         datasets: [{
    //             data: [10, 20, 30, 40, 55, 82, 40, 75, 60, 90, 75, 100],
    //             backgroundColor: gradientFill,
    //             borderColor: [
    //               '#f39915'
    //             ],
    //             borderWidth: 2,
    //             fill: 'origin',
    //             label: "online"
    //           }
    //         ]
    //       };
    //       var areaOptions = {
    //         responsive: true,
    //         maintainAspectRatio: true,
    //         plugins: {
    //           filler: {
    //             propagate: false
    //           }
    //         },
    //         scales: {
    //           xAxes: [{
    //             display: false,
    //             ticks: {
    //               display: false
    //             },
    //             gridLines: {
    //               display: false,
    //               drawBorder: false,
    //               color: 'transparent',
    //               zeroLineColor: '#eeeeee'
    //             }
    //           }],
    //           yAxes: [{
    //             display: false,
    //             ticks: {
    //               display: false,
    //               autoSkip: false,
    //               maxRotation: 0,
    //               stepSize: 15,
    //               min: 0,
    //               max: 100
    //             }
    //           }]
    //         },
    //         legend: {
    //           display: false
    //         },
    //         tooltips: {
    //           enabled: true
    //         },
    //         elements: {
    //           line: {
    //             tension: 0
    //           },
    //           point: {
    //             radius: 0
    //           }
    //         }
    //       }
    
    //       var transactionsChart = new Chart(transactionsChartCanvas, {
    //         type: 'line',
    //         data: areaData,
    //         options: areaOptions
    //       });
    //     }
    
        // // sales-chart-a start
        // if ($("#sales-chart-a").length) {
        //   var areaData = {
        //     labels: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AI", "AJ", "AK"],
        //     datasets: [
        //       {
        //         data: [30, 38, 20, 30, 25, 35, 19, 23,19, 27],
        //         backgroundColor: [
        //           '#003c7c'
        //         ],
        //         borderColor: [
        //           '#003c7c'
        //         ],
        //         borderWidth: 1,
        //         fill: 'origin',
        //         label: "Sales"
        //       },
        //       {
        //         data: [62, 58, 40, 52, 58, 55, 52, 62, 55, 60],
        //         backgroundColor: [
        //           '#2981d7'
        //         ],
        //         borderColor: [
        //           '#2981d7'
        //         ],
        //         borderWidth: 1,
        //         fill: 'origin',
        //         label: "Orders"
        //       },
        //       {
        //         data: [73, 70, 82, 70, 90, 97, 71, 98, 88, 98],
        //         backgroundColor: [
        //           '#cfdced'
        //         ],
        //         borderColor: [
        //           '#cfdced'
        //         ],
        //         borderWidth: 1,
        //         fill: 'origin',
        //         label: "Revenue"
        //       }
        //     ]
        //   };
        //   var areaOptions = {
        //     responsive: true,
        //     maintainAspectRatio: true,
        //     plugins: {
        //       filler: {
        //         propagate: false
        //       }
        //     },
        //     scales: {
        //       xAxes: [{
        //         display: false,
        //         ticks: {
        //           display: true
        //         },
        //         gridLines: {
        //           display: false,
        //           drawBorder: false,
        //           color: 'transparent',
        //           zeroLineColor: '#eeeeee'
        //         }
        //       }],
        //       yAxes: [{
        //         display: false,
        //         ticks: {
        //           display: true,
        //           autoSkip: false,
        //           maxRotation: 0,
        //           stepSize: 100,
        //           min: 0,
        //           max: 100
        //         },
        //         gridLines: {
        //           drawBorder: false
        //         }
        //       }]
        //     },
        //     legend: {
        //       display: false
        //     },
        //     tooltips: {
        //       enabled: true
        //     },
        //     elements: {
        //       line: {
        //         tension: .35
        //       },
        //       point: {
        //         radius: 0
        //       }
        //     }
        //   }
        //   var salesChartACanvas = $("#sales-chart-a").get(0).getContext("2d");
        //   var salesChartA = new Chart(salesChartACanvas, {
        //     type: 'line',
        //     data: areaData,
        //     options: areaOptions
        //   });
        // }
        // // sales-chart-a end
    
        //     // sales-chart-a-dark start
        
        // // sales-chart-b starts
        // if ($("#sales-chart-b").length) {
        //   var salesChartBChartCanvas = $("#sales-chart-b").get(0).getContext("2d");
        //   var salesChartBChart = new Chart(salesChartBChartCanvas, {
        //     type: 'bar',
        //     data: {
        //       labels: ['AA', 'AB', 'AC', 'AD', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC', 'BD'],
        //       datasets: [{
        //           label: 'Profit',
        //           data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,],
        //           backgroundColor: ['#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#b4d5f6', '#b4d5f6', '#b4d5f6', '#b4d5f6', '#b4d5f6' ]
        //         }
        //       ]
        //     },
        //     options: {
        //       responsive: true,
        //       maintainAspectRatio: true,
        //       layout: {
        //         padding: {
        //           left: 0,
        //           right: 0,
        //           top: 0,
        //           bottom: 0
        //         }
        //       },
        //       scales: {
        //         yAxes: [{
        //           display: false,
        //           gridLines: {
        //             drawBorder: false,
        //             color: '#f1f3f9',
        //             zeroLineColor: '#f1f3f9'
        //           },
        //           ticks: {
        //             display: false,
        //             fontColor: "#9fa0a2",
        //             padding: 0,
        //             stepSize: 20,
        //             min: 0,
        //             max: 100
        //           }
        //         }],
        //         xAxes: [{
        //           display: false,
        //           stacked: false,
        //           categoryPercentage: 1,
        //           ticks: {
        //             display: false,
        //             beginAtZero: false,
        //             display: true,
        //             padding: 10,
        //             fontSize: 11
        //           },
        //           gridLines: {
        //             color: "rgba(0, 0, 0, 0)",
        //             display: false
        //           },
        //           position: 'bottom',
        //           barPercentage: 0.7
        //         }]
        //       },
        //       legend: {
        //         display: false
        //       },
        //       elements: {
        //         point: {
        //           radius: 0
        //         }
        //       }
        //     }
        //   });
        // }
        // // sales-chart-b end
    
        // // income-chart start
        // if ($('#income-chart').length) {
        //   var incomeChartCanvas = $("#income-chart").get(0).getContext("2d");
    
    
        //   var data = {
        //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        //     datasets: [
        //       {
        //         label: 'Service Earnings',
        //         data: [35, 76, 90, 124, 156, 196, 215],
        //         borderColor: [
        //           '#a43cda'
        //         ],
        //         borderWidth: 2,
        //         fill: true,
        //         backgroundColor: "rgba(164, 60, 218, .1)"
        //       },
        //       {
        //         label: 'Deposit',
        //         data: [2, 9, 14, 25, 32, 49, 56],
        //         borderColor: [
        //           '#00c8bf'
        //         ],
        //         borderWidth: 2,
        //         fill: true,
        //         backgroundColor: 'rgba(0, 200, 191, .1)'
    
        //       }
    
        //     ]
        //   };
        //   var options = {
        //     scales: {
        //       yAxes: [{
        //         display: true,
        //         gridLines: {
        //           drawBorder: false,
        //           lineWidth: 1,
        //           color: "#f1f3f9",
        //           zeroLineColor: "#f1f3f9",
        //         },
        //         ticks: {
        //           min: 0,
        //           max: 400,
        //           stepSize: 100,
        //           fontColor: "#001737",
        //           fontSize: 11,
        //           fontStyle: 400,
        //           padding: 10
        //         }
        //       }],
        //       xAxes: [{
        //         display: true,
        //         gridLines: {
        //           display: false,
        //           drawBorder: false,
        //           lineWidth: 1,
        //           color: "#e9e9e9",
        //         },
        //         ticks : {
        //           fontColor: "#001737",
        //           fontSize: 11,
        //           fontStyle: 400,
        //           padding: 10,
        //         }
        //       }]
        //     },
        //     legend: {
        //       display: false
        //     },
        //     legendCallback : function(chart) {
        //       var text = [];
        //       text.push('<div class="d-flex align-items-center mr-3">');
        //         text.push('<div class="mr-2" style="width: 12px; border-radius: 50%; height: 12px; background-color: ' + chart.data.datasets[0].borderColor[0] +' "></div>');
        //         text.push('<p class="mb-0">Register User</p>');
        //       text.push('</div>');
        //       text.push('<div class="d-flex align-items-center">');
        //         text.push('<div class="mr-2" style="width: 12px; border-radius: 50%; height: 12px; background-color: ' + chart.data.datasets[1].borderColor[0] +' "></div>');
        //         text.push('<p class="mb-0">Premium User</p>');
        //       text.push('</div>');
        //       return text.join('');
        //     },
        //     elements: {
        //       point: {
        //         radius: 0,
        //       },
        //       line :{
        //         tension: .35
        //       }
        //     },
        //     stepsize: 1,
        //     layout : {
        //       padding : {
        //         top: 30,
        //         bottom : -7,
        //         left : 0,
        //         right: 0
        //       }
        //     }
        //   };
        //   var incomeChart = new Chart(incomeChartCanvas, {
        //     type: 'line',
        //     data: data,
        //     options: options
        //   });
        //   document.getElementById('income-chart-legend').innerHTML = incomeChart.generateLegend();
        // }
        // // income-chart end
    
        // // sales-chart-c start
        // if ($("#sales-chart-c").length) {
        //   var salesChartCCanvas = $("#sales-chart-c").get(0).getContext("2d");
        //   var salesChartC = new Chart(salesChartCCanvas, {
        //     type: 'pie',
        //     data: {
        //       datasets: [{
        //         data: [20, 20, 60],
        //         backgroundColor: [
        //           '#f39915',
        //           '#21bf06',
        //           '#a43cda'
        //         ],
        //         borderColor: [
        //           '#f39915',
        //           '#21bf06',
        //           '#a43cda'
        //         ],
        //       }],
          
        //       // These labels appear in the legend and in the tooltips when hovering different arcs
        //       labels: [
        //         'Gross Sales',
        //         'Purchases',
        //         'Tax Return'
        //       ]
        //     },
        //     options: {
        //       responsive: true,
        //       animation: {
        //         animateScale: true,
        //         animateRotate: true
        //       },
        //       legend: {
        //         display: false
        //       },
        //       legendCallback: function(chart) { 
        //         var text = [];
        //         text.push('<ul class="legend'+ chart.id +'">');
        //         for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
        //           text.push('<li><span class="legend-dots" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
        //           if (chart.data.labels[i]) {
        //             text.push(chart.data.labels[i]);
        //           }
        //           text.push('</li>');
        //         }
        //         text.push('</ul>');
        //         return text.join("");
        //       }
        //     }
        //   });
        // }
        // // sales-chart-c end
    
        // // sales-chart-d start
        // if ($("#sales-chart-d").length) {
        //   var SalesChartDCanvas = $("#sales-chart-d").get(0).getContext("2d");
        //   var SalesChartD = new Chart(SalesChartDCanvas, {
        //     type: 'bar',
        //     data: {
        //       labels: ["2014", "2015", "2016", "2017", "2018", "2019"],
        //       datasets: [{
        //           label: 'Current Providers',
        //           data: [59, 76, 102, 132, 175, 219],
        //           backgroundColor: '#a43cda'
        //         },
        //         {
        //           label: 'Current Customers',
        //           data: [187, 245, 286, 324, 398, 425],
        //           backgroundColor: '#f39915'
        //         }
        //       ]
        //     },
        //     options: {
        //       responsive: true,
        //       maintainAspectRatio: true,
        //       layout: {
        //         padding: {
        //           left: 0,
        //           right: 0,
        //           top: 0,
        //           bottom: 0
        //         }
        //       },
        //       scales: {
        //         yAxes: [{
        //           display: true,
        //           gridLines: {
        //             display: false,
        //             drawBorder: false
        //           },
        //           ticks: {
        //             display: true,
        //             min: 0,
        //             max: 1000,
        //             stepSize: 100,
        //             fontSize: 10,
        //             fontColor: "#001737",
        //           }
        //         }],
        //         xAxes: [{
        //           stacked: false,
        //           ticks: {
        //             beginAtZero: true,
        //             fontColor: "#001737",
        //             fontSize: 10
        //           },
        //           gridLines: {
        //             color: "rgba(0, 0, 0, 0)",
        //             display: false
        //           },
        //           barPercentage: .3
        //         }]
        //       },
        //       legend: {
        //         display: false
        //       },
        //       elements: {
        //         point: {
        //           radius: 0
        //         }
        //       }
        //     },
        //   });
        // }
        // // sales-chart-d end
    
        // // expense-chart start
        // if ($("#expense-chart").length) {
        //   var expenseChartCanvas = $("#expense-chart").get(0).getContext("2d");
        //   var expenseChart = new Chart(expenseChartCanvas, {
        //     type: 'bar',
        //     data: {
        //       labels: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
        //       datasets: [
        //         {
        //           label: 'Profit',
        //           data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
        //           backgroundColor: '#a43cda',
        //         },
        //         {
        //           label: 'Growth',
        //           data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
        //           backgroundColor: '#e1e1e2',
        //         }
        //       ]
        //     },
        //     options: {
        //       responsive: true,
        //       maintainAspectRatio: true,
        //       layout: {
        //         padding: {
        //           left: 0,
        //           right: 0,
        //           top: 0,
        //           bottom: 0
        //         }
        //       },
        //       scales: {
        //         yAxes: [{
        //           display: false,
        //           stacked: true,
        //           gridLines: {
        //             drawBorder: false,
        //             color: '#f1f3f9',
        //             zeroLineColor: '#f1f3f9'
        //           },
        //           ticks: {
        //             display: false,
        //             fontColor: "#9fa0a2",
        //             padding: 0,
        //             stepSize: 10,
        //             min: 0,
        //             max: 100
        //           }
        //         }],
        //         xAxes: [{
        //           display: false,
        //           stacked: true,
        //           categoryPercentage: 1,
        //           ticks: {
        //             display: false,
        //             beginAtZero: false,
        //             display: true,
        //             padding: 10,
        //             fontSize: 11
        //           },
        //           gridLines: {
        //             color: "rgba(0, 0, 0, 0)",
        //             display: false
        //           },
        //           position: 'bottom',
        //           barPercentage: 0.4
        //         }]
        //       },
        //       legend: {
        //         display: false
        //       },
        //       elements: {
        //         point: {
        //           radius: 0
        //         }
        //       }
        //     }
        //   });
        // }
        // // expense-chart end
    
        // // budget-chart start
        // if ($("#budget-chart").length) {
        //   var expenseChartCanvas = $("#budget-chart").get(0).getContext("2d");
        //   var expenseChart = new Chart(expenseChartCanvas, {
        //     type: 'bar',
        //     data: {
        //       labels: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
        //       datasets: [
        //         {
        //           label: 'Profit',
        //           data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
        //           backgroundColor: '#21bf06'
        //         },
        //         {
        //           label: 'Growth',
        //           data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
        //           backgroundColor: '#e1e1e2'
        //         }
        //       ]
        //     },
        //     options: {
        //       responsive: true,
        //       maintainAspectRatio: true,
        //       layout: {
        //         padding: {
        //           left: 0,
        //           right: 0,
        //           top: 0,
        //           bottom: 0
        //         }
        //       },
        //       scales: {
        //         yAxes: [{
        //           display: false,
        //           stacked: true,
        //           gridLines: {
        //             drawBorder: false,
        //             color: '#f1f3f9',
        //             zeroLineColor: '#f1f3f9'
        //           },
        //           ticks: {
        //             display: false,
        //             fontColor: "#9fa0a2",
        //             padding: 0,
        //             stepSize: 10,
        //             min: 0,
        //             max: 100
        //           }
        //         }],
        //         xAxes: [{
        //           display: false,
        //           stacked: true,
        //           categoryPercentage: 1,
        //           ticks: {
        //             display: false,
        //             beginAtZero: false,
        //             display: true,
        //             padding: 10,
        //             fontSize: 11
        //           },
        //           gridLines: {
        //             color: "rgba(0, 0, 0, 0)",
        //             display: false
        //           },
        //           position: 'bottom',
        //           barPercentage: 0.4
        //         }]
        //       },
        //       legend: {
        //         display: false
        //       },
        //       elements: {
        //         point: {
        //           radius: 0
        //         }
        //       }
        //     }
        //   });
        // }
        // // budget-chart end
    
        // // balance-chart start
        // if ($("#balance-chart").length) {
        //   var expenseChartCanvas = $("#balance-chart").get(0).getContext("2d");
        //   var expenseChart = new Chart(expenseChartCanvas, {
        //     type: 'bar',
        //     data: {
        //       labels: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
        //       datasets: [
        //         {
        //           label: 'Profit',
        //           data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
        //           backgroundColor: '#dc3545'
        //         },
        //         {
        //           label: 'Growth',
        //           data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
        //           backgroundColor: '#e1e1e2'
        //         }
        //       ]
        //     },
        //     options: {
        //       responsive: true,
        //       maintainAspectRatio: true,
        //       layout: {
        //         padding: {
        //           left: 0,
        //           right: 0,
        //           top: 0,
        //           bottom: 0
        //         }
        //       },
        //       scales: {
        //         yAxes: [{
        //           display: false,
        //           stacked: true,
        //           gridLines: {
        //             drawBorder: false,
        //             color: '#f1f3f9',
        //             zeroLineColor: '#f1f3f9'
        //           },
        //           ticks: {
        //             display: false,
        //             fontColor: "#9fa0a2",
        //             padding: 0,
        //             stepSize: 10,
        //             min: 0,
        //             max: 100
        //           }
        //         }],
        //         xAxes: [{
        //           display: false,
        //           stacked: true,
        //           categoryPercentage: 1,
        //           ticks: {
        //             display: false,
        //             beginAtZero: false,
        //             display: true,
        //             padding: 10,
        //             fontSize: 11
        //           },
        //           gridLines: {
        //             color: "rgba(0, 0, 0, 0)",
        //             display: false
        //           },
        //           position: 'bottom',
        //           barPercentage: 0.4
        //         }]
        //       },
        //       legend: {
        //         display: false
        //       },
        //       elements: {
        //         point: {
        //           radius: 0
        //         }
        //       }
        //     }
        //   });
        // }
        // // balance-chart end
    
        // // cpu-chart start
        // if ($("#cpu-chart").length) {
        //   var cpuChartCanvas = $("#cpu-chart").get(0).getContext("2d");
        //   var cpuChart = new Chart(cpuChartCanvas, {
        //     type: 'bar',
        //     data: {
        //       labels: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L"],
        //       datasets: [{
        //           label: 'Profit',
        //           data: [45, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48],
        //           backgroundColor: '#dc3545',
        //         }
        //       ]
        //     },
        //     options: {
        //       responsive: true,
        //       maintainAspectRatio: true,
        //       layout: {
        //         padding: {
        //           left: 0,
        //           right: 0,
        //           top: 0,
        //           bottom: 0
        //         }
        //       },
        //       scales: {
        //         yAxes: [{
        //           display: false,
        //           gridLines: {
        //             drawBorder: false,
        //             color: '#f1f3f9',
        //             zeroLineColor: '#f1f3f9'
        //           },
        //           ticks: {
        //             display: false,
        //             fontColor: "#9fa0a2",
        //             padding: 0,
        //             stepSize: 10,
        //             min: 0,
        //             max: 50
        //           }
        //         }],
        //         xAxes: [{
        //           display: false,
        //           stacked: false,
        //           categoryPercentage: 1,
        //           ticks: {
        //             display: false,
        //             beginAtZero: false,
        //             display: true,
        //             padding: 10,
        //             fontSize: 11
        //           },
        //           gridLines: {
        //             color: "rgba(0, 0, 0, 0)",
        //             display: false
        //           },
        //           position: 'bottom',
        //           barPercentage: 0.4
        //         }]
        //       },
        //       legend: {
        //         display: false
        //       },
        //       elements: {
        //         point: {
        //           radius: 0
        //         }
        //       },
        //       tooltips: {
        //         backgroundColor: 'rgba(168, 60, 218, .6)'
        //       }
        //     }
        //   });
        // }
        // // cpu-chart end
    
        // // memory-chart start
        // if ($("#memory-chart").length) {
        //   var memoryChartCanvas = $("#memory-chart").get(0).getContext("2d");
        //   var memoryChart = new Chart(memoryChartCanvas, {
        //     type: 'bar',
        //     data: {
        //       labels: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L"],
        //       datasets: [{
        //           label: 'Profit',
        //           data: [38, 35, 23, 22, 35, 23, 24, 28, 19, 33, 30, 45],
        //           backgroundColor: '#00c8bf',
        //         }
        //       ]
        //     },
        //     options: {
        //       responsive: true,
        //       maintainAspectRatio: true,
        //       layout: {
        //         padding: {
        //           left: 0,
        //           right: 0,
        //           top: 0,
        //           bottom: 0
        //         }
        //       },
        //       scales: {
        //         yAxes: [{
        //           display: false,
        //           gridLines: {
        //             drawBorder: false,
        //             color: '#f1f3f9',
        //             zeroLineColor: '#f1f3f9'
        //           },
        //           ticks: {
        //             display: false,
        //             fontColor: "#9fa0a2",
        //             padding: 0,
        //             stepSize: 10,
        //             min: 0,
        //             max: 50
        //           }
        //         }],
        //         xAxes: [{
        //           display: false,
        //           stacked: false,
        //           categoryPercentage: 1,
        //           ticks: {
        //             display: false,
        //             beginAtZero: false,
        //             display: true,
        //             padding: 10,
        //             fontSize: 11
        //           },
        //           gridLines: {
        //             color: "rgba(0, 0, 0, 0)",
        //             display: false
        //           },
        //           position: 'bottom',
        //           barPercentage: 0.4
        //         }]
        //       },
        //       legend: {
        //         display: false
        //       },
        //       elements: {
        //         point: {
        //           radius: 0
        //         }
        //       },
        //       tooltips: {
        //         backgroundColor: 'rgba(168, 60, 218, .6)'
        //       }
        //     }
        //   });
        // }
        // memory-chart end
    //   };

    //   renderChart();
    // }, []);

  return (
    <div className="dashboard">
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
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
                                <img src="https://storage.googleapis.com/vingig-swp301.appspot.com/logo/logo_white.png?GoogleAccessId=service-213448872856@gcp-sa-firebasestorage.iam.gserviceaccount.com&Expires=1689102658&Signature=kGbReitseqyr4GjhidFekynn5GPDvLnasGAZLDuHK9o9gEfXArD7nX4xa%2BB7UKRALz7hnZDk40fktrs7a1LlPnEjfYabHTah77FgHDWbPORNk1KLsjBwqsraqIva/OvDfBcKqXaTePfB%2Bs5PtNF0z%2BKaTvmfjvW0n%2BXuFUkuDECCfBb7HX491ufPMSJCkH6O8ZrbA5ckgWd8f%2Bgpv6HHL0EUjvuwxd08FEnr6llkpent2NzHil0BfE7kswkedRHQcbZ/xEWYHIZy1JRRLL2U1SfP4k/h0kCcC6WCZEgVysmoGoqUGGeWvNvvNiCYxF4xIYsM5ja6E9bIwfld/ixlNw%3D%3D" alt="avatar" />
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