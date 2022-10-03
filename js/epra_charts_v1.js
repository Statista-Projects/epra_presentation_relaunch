

Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 11;
Chart.defaults.global.defaultFontStyle= 'bold';

//-----------------
var ann = [181045];
var ann_labels = ["your data"];

var annotations_array = ann.map(function(value, index) {
    return {
        type: 'line',
        id: 'vline' + index,
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: value,
        borderColor: 'red',
        borderWidth: 15,
        label: {
            enabled: false,
            position: "center",
            content: ann_labels[index]
        }
    }
});
//----------S3_DutchFunds


var S3_DutchChartData = {
  labels: ['1','2'],
  datasets: [{
    label: 'Dutch Funds',
    backgroundColor: [
        'rgba(175, 215, 111, 1)',
        'rgba(255, 255, 255, 1)',
    ],
  data:[85.9,14.1 ],
  borderWidth: 0,
  hoverBorderWidth:0
}] };


//----------S3_OtherFunds


var S3_OtherChartData = {
  labels: ['1','2'],
  datasets: [{
    label: 'Other Euro Area Funds',
    backgroundColor: [
        'rgba(175, 215, 111, 1)',
        'rgba(255, 255, 255, 1)',
    ],
  data:[89.0,11.0],
  borderWidth: 0,
  hoverBorderWidth:0
}] };

//----------S3_UKFunds


var S3_UKChartData = {
  labels: ['1','2'],
  datasets: [{
    label: 'U.K.Funds',
    backgroundColor: [
        'rgba(175, 215, 111, 1)',
        'rgba(255, 255, 255, 1)',
    ],
  data:[81.8,18.2],
  borderWidth: 0,
  hoverBorderWidth:0
}] };


//----------S3_Aggregate asset glass holdings


var S3_HoldingsChartData = {
  labels:['Public Equity','Fixed Income','Unlisted Real Estate','Private Equity','Hedge Funds','Listed Real Estate','Unlisted Infrastructure','Other'],

  datasets: [{
    label: 'U.K.Funds',
    backgroundColor: [
        'rgba(238,189, 101, 1)',
        'rgba(204, 147, 69, 1)',
        'rgba(188, 190, 192, 1)',
        'rgba(78, 127, 247, 1)',
        'rgba(27, 75, 172, 1)',

        'rgba(175, 215, 111, 1)',
        'rgba(107, 139, 48, 1)',
        'rgba(255, 255, 255, 1)'
        ],
  data:[ 45,	39,	5, 3, 3, 2,	1, 1],
  borderWidth: 0,
  hoverBorderWidth:0
}] };



//----------S4_Fees_1_Dutch funds (2010-2016)



var S4_Fees_1_ChartData = {
labels:['Hedge\nFunds','Private\nEquity','Unlisted\nreal\nestate','Other','Unlisted\nInfrastructure','Listed\nReal\nEstate','Fixed\nIncome','Public\nEquity'],
  datasets: [{
    label: 'Dutch funds (2010-2016)',
    backgroundColor: [
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
        'rgba(44, 186, 171, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)'
    ],
    borderColor: [
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)'

    ],
    data:[ 52, 31, 30,  19, 18, 3, 1,  1],
  borderWidth: 0,
  hoverBorderWidth:0
}] };

//----------S4_Fees_2_Other Euro area funds (2010-2016)


var S4_Fees_2_ChartData = {
labels:['Hedge\nFunds','Private\nEquity','Unlisted\nreal estate','Other','Unlisted\nInfrastructure','Listed Real\nEstate','Fixed\nIncome','Public\nEquity'],
  datasets: [{
    label: 'Other Euro area funds (2010-2016)',
    backgroundColor: [
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
        'rgba(44, 186, 171, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)'
    ],
    borderColor: [
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)'

    ],
    data:[30, 23, 6, 265, 20, 2, 1, 1],
  borderWidth: 0,
  hoverBorderWidth:0
}] };

//----------S4_Fees_3_U.K. funds (2010-2016)


var S4_Fees_3_ChartData = {
labels:['Hedge\nFunds','Private\nEquity','Unlisted\nreal estate','Other','Unlisted\nInfrastructure','Listed Real\nEstate','Fixed\nIncome','Public\nEquity'],
  datasets: [{
    label: 'U.K. funds (2010-2016)',
    backgroundColor: [
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
        'rgba(44, 186, 171, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)'
    ],
    borderColor: [
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)'

    ],
    data:[35, 28, 11, 30, 19, 7, 1, 1],
  borderWidth: 0,
  hoverBorderWidth:0
}] };

// Chart_Scene_7

//Benchmark_DUTCH

var S7_Benchmark_1_ChartData = {
  labels: ['Public market based','2'],
  datasets: [{
    label: 'Dutch Funds',
    backgroundColor: [
        'rgba(78, 127, 247, 1)',
    ],
  data:[100],
  borderWidth: 0,
  hoverBorderWidth:0
}] };

//Benchmark_DUTCH

var S7_Benchmark_2_ChartData = {
  labels: ['Peer based','Interest/Inflation rate'],
  datasets: [{
    label: 'U.K.Funds',
    backgroundColor: [
      'rgba(237,110,114, 1)',
        'rgba(92, 183,171, 1)',
    ],
  data:[40,60],
  borderWidth: 0,
  hoverBorderWidth:0
}] };

//Benchmark_DUTCH

var S7_Benchmark_3_ChartData = {
  labels: ['Peer based','2'],
  datasets: [{
    label: 'Other Funds',
    backgroundColor: [
      'rgba(237,110,114, 1)',

    ],
  data:[100],
  borderWidth: 0,
  hoverBorderWidth:0
}] };

//-------------------------Chart_Scene_7 -----------end



///-------------------------Chart Scene 8--------------


//let S8_Development_1

var S8_Development_1_ChartData = {
labels:['Office','Industrial','Retail','Residential','Self Storage','Healthcare','Industrial & Office Mix','Lodging & Resorts'],

  datasets: [{
    label: 'U.K.Funds',
    backgroundColor: [
      'rgba(92, 182, 171, 1)',
        'rgba(197, 197, 194, 1)',
        'rgba(237, 109, 113, 1)',
        'rgba(162, 119, 247, 1)',
        'rgba(27, 74, 171, 1)',
        'rgba(163, 195, 143, 1)',
        'rgba(238, 188, 100, 1)',

    ],
  data:[37,7,	46,	7	,1	,0	,1,	0],
  borderWidth: 0,
  hoverBorderWidth:0
}] };
//let S8_Development_2

var S8_Development_2_ChartData = {
labels:['Office','Industrial','Retail','Residential','Self Storage','Healthcare','Industrial & Office Mix','Lodging & Resorts'],
  datasets: [{
    label: 'U.K.Funds',
    backgroundColor: [
      'rgba(92, 182, 171, 1)',
        'rgba(197, 197, 194, 1)',
        'rgba(237, 109, 113, 1)',
        'rgba(162, 119, 247, 1)',
        'rgba(27, 74, 171, 1)',
        'rgba(163, 195, 143, 1)',
        'rgba(238, 188, 100, 1)',
        'rgba(255, 255, 255, 1)'
    ],
  data:[20,	7	,31	,35	,2,	3	,2	,1],
  borderWidth: 0,
  hoverBorderWidth:0
}] };

//------------S3_DutchFunds



var barChartData_Dutch = {
  labels: ['Listed Real Estate', 'Public Equity ', 'Private Equity ', 'Unlisted Infrastructure ', 'Fixed Income ', 'Unlisted Real Estate', 'Hedge Funds', 'Other'],
  datasets: [{
    label: 'Average Net Return',
    backgroundColor: "#eebe64",
    data: [ 10.88,	10.26,	10.21,	7.32, 6.73,	2.66, 2.43,	-1.93 ]
  }, {
    label: 'Average Cost',
    backgroundColor: "#5cb7ab",
    data: [ -0.28, -0.07, -4.54, -1.59, -0.06, -1.14, -2.61, -0.31 ]
  }]

};

var barChartData_Other = {
  labels: ['Listed Real Estate', 'Public Equity ', 'Private Equity ', 'Unlisted Infrastructure ', 'Fixed Income ', 'Unlisted Real Estate', 'Hedge Funds', 'Other'],
  datasets: [{
    label: 'Average Net Return',
      backgroundColor: "#eebe64",

    data: [ 9.93, 10.47, 12.55, 6.15, 4.79, 7.21, 6.07, -0.89]

  }, {
    label: 'Average Cost',
    backgroundColor: "#5cb7ab",
    data: [ -0.24,-0.12,-3.82,-1.5, -0.04, -0.46, -2.58, -0.64]


  }]

};
var barChartData_UK_Funds = {
  labels: ['Listed Real Estate', 'Public Equity ', 'Private Equity ', 'Unlisted Infrastructure ', 'Fixed Income ', 'Unlisted Real Estate', 'Hedge Funds', 'Other'],
  datasets: [{
    label: 'Average Net Return',
        backgroundColor: "#eebe64",
    data: [ 10.93,10.76,10.86,7.89,8.17,5.77,4.13,2.32]


  }, {
    label: 'Average Cost',
      backgroundColor: "#5cb7ab",
    data: [ -0.78,-0.11,-4.15,-1.87,-0.05,-0.69,-2.27,-1.00]

  }]

};


// Satter plotmap
//--------------------------------------
var DEFAULT_DATASET_SIZE = 7;

var addedCount = 0;
var color = Chart.helpers.color;
//-------------------------------S6_Risk_Dutch_ChartData------------------------
var S6_Risk_Dutch_ChartData = {
  animation: {
    duration: 10000
  },

      labels: ["Listed Real Estate", "Private Equity", "Public Equity","Fixed Income", "Unlisted Infrastructure", "Unlisted Real Estate","Hedge Funds", "Other"],
    backgroundColor:"#c6c5c2",
    borderWidth: 1,



        datasets: [

          {label: 'Listed Real Estate', data: [ {	value:0.28	,x: 10.141,	y:10.88	} ],  backgroundColor:"#c6c5c2",hoverBackgroundColor: "#c6c5c2" },
          {label: 'Public Equity', data: [ {	value:0.07,	x: 8.11,	y:10.26	} ],  borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7"},
          {label: 'Private Equity', data: [ {	value:4.54	,x: 11.24,	y:10.21	} ],  borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7"},
          {label: 'Unlisted Infrastructure', data: [ {	value:1.59	,x: 7.33	,y:7.32	} ],  borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7"},
          {label: 'Fixed Income', data: [ {	value:0.06,	x: 5.93,	y:6.73	} ],  borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7"},
          {label: 'Unlisted Real Estate', data: [ {	value:1.14,	x: 12.83,	y:2.66	} ],  borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7"},
          {label: 'Hedge Funds', data: [ {	value:2.61,	x: 3.57,	y:2.43	} ],  borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7"},
          {label: 'Other', data: [ {	value:0.31,	x: 11.71,	y:-1.93	} ],  borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7"},
          ]


};

//-------------------------------S6_Risk_UK_ChartData------------------------
var S6_Risk_UK_ChartData = {
  animation: {
    duration: 10000
  },


      labels: ["Listed Real Estate", "Private Equity", "Public Equity","Fixed Income", "Unlisted Infrastructure", "Unlisted Real Estate","Hedge Funds", "Other"],
    backgroundColor:"#c6c5c2",
    borderWidth: 1,



    datasets: [

{label: 'Listed Real Estate', data: [ {	value:0.78 ,	x: 10.55	,	y:10.93	} ], backgroundColor:"#c6c5c2",hoverBackgroundColor: "#c6c5c2" },
{label: 'Private Equity', data: [ {	value:4.15,	x: 19.05	,	y:10.86	} ], borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },
{label: 'Public Equity', data: [ {	value:0.11,	x: 9.83	,	y:10.76	} ], borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },
{label: 'Fixed Income', data: [ {	value:0.05,	x: 6.85	,	y:8.17	} ], borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },
{label: 'Unlisted Infrastructure', data: [ {	value:1.87,	x: 8.27	,	y:7.89	} ], borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },
{label: 'Unlisted Real Estate', data: [ {	value:0.69,	x: 10.55	,	y:5.77	} ], borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },
{label: 'Hedge Funds', data: [ {	value:2.27,	x: 1.89	,	y:4.13	} ], borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },
{label: 'Other', data: [ {	value:1.00,	x: 8.02	,	y:2.32	} ], borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },


      ]


};

//-------------------------------S6_Risk_Other_ChartData------------------------
var S6_Risk_Other_ChartData = {
  animation: {
    duration: 10000
  },


      labels: ["Listed Real Estate", "Private Equity", "Public Equity","Fixed Income", "Unlisted Infrastructure", "Unlisted Real Estate","Hedge Funds", "Other"],
    backgroundColor:"#c6c5c2",
    borderWidth: 1,



    datasets: [
    {label: 'Listed Real Estate', data: [ {	value:0.24,	x: 9.13	,	y:9.93	} ],  backgroundColor:"#c6c5c2",hoverBackgroundColor: "#c6c5c2" },
    {label: 'Private Equity', data: [ {	value:3.82,	x: 12.13	,	y:12.55	} ],   borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },
    {label: 'Public Equity', data: [ {	value:0.12,	x: 10.85	,	y:10.47	} ],   borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },
    {label: 'Fixed Income', data: [ {	value:0.04,	x: 3.24	,	y:4.79	} ],   borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },
    {label: 'Unlisted Infrastructure', data: [ {	value:1.50,	x: 9.83	,	y:6.15	} ],   borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },
    {label: 'Unlisted Real Estate', data: [ {	value:0.46,	x: 10.25	,	y:7.21	} ],   borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },
    {label: 'Hedge Funds', data: [ {	value:2.58,	x: 3.59	,	y:6.07	} ],   borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },
    {label: 'Other', data: [ {	value:0.64,	x: 6.28	,	y:-0.89	} ],   borderWidth:2, borderColor:"#a277f7",hoverBorderWidth:2,hoverBorderColor: "#a277f7" },
      ]






};

///--------------------------------------window.onload--------------------------------

window.onload = function() {
  var S3_Returns_Dutch = document.getElementById('S1_Returns_Dutch').getContext('2d');
  var S3_Returns_UK = document.getElementById('S1_Returns_UK').getContext('2d');
  var S3_Returns_Other = document.getElementById('S1_Returns_Other').getContext('2d');



  var S3_DutchFunds = document.getElementById('S3_Dutch_Funds').getContext('2d');
  var S3_OtherFunds = document.getElementById('S3_Other_Funds').getContext('2d');
  var S3_UKFunds = document.getElementById('S3_UK_Funds').getContext('2d');
  var S3_Holdings = document.getElementById('S3_Asset_Holdings').getContext('2d');

  var S4_Fees1_investment = document.getElementById('S4_Fees_1').getContext('2d');
  var S4_Fees2_investment = document.getElementById('S4_Fees_2').getContext('2d');
  var S4_Fees3_investment = document.getElementById('S4_Fees_3').getContext('2d');


 var S7_Benchmark_1 = document.getElementById('S7_Benchmark_Dutch').getContext('2d');
 var S7_Benchmark_2 = document.getElementById('S7_Benchmark_UK').getContext('2d');
  var S7_Benchmark_3 = document.getElementById('S7_Benchmark_Other').getContext('2d');


var S8_Development_1 = document.getElementById('S8_Development1').getContext('2d');
var S8_Development_2 = document.getElementById('S8_Development2').getContext('2d');


//----------------SCENE 3-------------------------
window.S3_DutchFunds_ChartData  = new Chart(S3_DutchFunds,{
type: 'doughnut',
  data: S3_DutchChartData,
  options:{
      maintainAspectRatio : false,
    tooltips: {enabled:false,intersect:false},
    layout: {  margins: { left: 0, right: 0,  top: 0,  bottom: 0 },
               padding: {  left: 0, right: 10,   top:20,  bottom: 0 }, },
    legend: {  display: false, labels: { fontColor: 'rgb(255, 99, 132)',  }  },
    cutoutPercentage:93,
    title:{ display:false, text:'Dutch Funds', fontSize:12, fontColor: '#12497F',position:'bottom' } }

})


window.S3_OtherFunds_ChartData  = new Chart(S3_OtherFunds,{
type: 'doughnut',
  data: S3_OtherChartData,
  options:{
      maintainAspectRatio : false,
    tooltips: {enabled:false,intersect:false},
    layout: {  margins: { left: 0, right: 0,  top: 0,  bottom: 0 },
               padding: {  left: 0, right: 10,   top:20,  bottom: 0 }, },
    legend: {  display: false, labels: { fontColor: 'rgb(255, 99, 132)',  }  },
    cutoutPercentage:93,
    title:{ display:false, text:'Other Euro Area Funds', fontSize:12, fontColor: '#12497F',position:'bottom' } },

})


window.S3_UKFunds_ChartData  = new Chart(S3_UKFunds,{
type: 'doughnut',
  data: S3_UKChartData ,
  options:{
      maintainAspectRatio : false,
    tooltips: {enabled:false,intersect:false},
    layout: {  margins: { left: 0, right: 0,  top: 0,  bottom: 0 },
               padding: {  left: 0, right: 10,   top:20,  bottom: 0 }, },
    legend: {  display: false, labels: { fontColor: 'rgb(255, 99, 132)',  }  },
    cutoutPercentage:93,
    title:{ display:false, text:'U.K.Funds', fontSize:12, fontColor: '#12497F',position:'bottom' }

  }

})


window.S3_Holdings_ChartData  = new Chart(S3_Holdings,{
type: 'doughnut',
  data: S3_HoldingsChartData ,
  options:{

    maintainAspectRatio : false,
    layout: {  margins: { left: 0, right: 0,  top: 0,  bottom: 0 },
               padding: {  left: 0, right: 50,   top:10,  bottom: 0 }, },

    legend: {  display: false, labels: { fontColor: 'rgb(255, 99, 132)',  }  },
    cutoutPercentage:70,
    title:{ display:false, text:'Aggregate asset glass holdings (2016)', fontSize:12, fontColor: '#12497F',position:'bottom' },
    tooltips: {
        position: 'nearest',
        mode: 'nearest',
        intersect: false,
        yPadding: 16,
        xPadding: 16,
        caretSize:8,
        backgroundColor: 'rgba(10,36,59,0.9)',
        titleFontColor: "#dea955",
        titleFontSize:14,

        titleMarginBottom:10,
        bodyFontColor: 'rgba(255,255,255,1)',
        borderColor: '#a4d95e',
        borderWidth: 1,
        bodyFontStyle:'normal',
        bodySpacing: 8,
        callbacks: {

                   label: function (tooltipItems, data) {
                       return data.labels[tooltipItems.index] + ': ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '%';
                   }
                 }
      },

  }

})

//----------------SCENE 3-------------------------END

//----------------SCENE 4-------------------------
window.S4_Fees_1_ChartData  = new Chart(S4_Fees1_investment,{
type: 'bar',
  data: S4_Fees_1_ChartData,


    options:{

      legend: {  display: false },
      responsive : true,
      maintainAspectRatio: true,
      layout: {  margins: { left: 0, right: 0,  top: 0,  bottom: 0 },
                 padding: {  left: 25, right: 100,   top:25,  bottom: 139 }, },

      scales: {
        xAxes: [{
            gridLines: { display:false, drawBorder: false },
            ticks: { display:false, fontSize:11 , autoSkip: false,  maxRotation: 0,  minRotation: 0, },
              },],

        yAxes: [{
          ticks: {display:true, fontSize:18 ,  padding: 15, callback: function(value){ return value+ "%"}, },
          gridLines: {   display:true,  drawBorder: false,  lineWidth: 1,  color: "rgba(255,255,255,1)",  zeroLineColor: "rgba(255,255,255,1)",},
          }] },

          tooltips: {
              position: 'nearest',
              mode: 'index',
              intersect: false,
              yPadding: 16,
              xPadding: 16,
              caretSize:8,
              backgroundColor: 'rgba(10,36,59,0.9)',
              titleFontColor: "#2cbaab",
              titleFontSize:14,

              titleMarginBottom:10,
              bodyFontColor: 'rgba(255,255,255,1)',
              borderColor: '#2cbaab',
              borderWidth: 1,
              bodyFontStyle:'normal',
              bodySpacing: 8,
              callbacks: {
                  label: function(tooltipItem, data) {

                      return " " + data['datasets'][0]['label']+ ": " + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                  }}
            },

         },


})


window.S4_Fees_3_ChartData  = new Chart(S4_Fees2_investment,{
type: 'bar',
  data: S4_Fees_3_ChartData,

  options:{

    legend: {  display: false },
    responsive : true,
    maintainAspectRatio: true,
    layout: {  margins: { left: 0, right: 0,  top: 0,  bottom: 0 },
               padding: {  left: 25, right: 100,   top:25,  bottom: 139 }, },

    scales: {
      xAxes: [{
          gridLines: { display:false, drawBorder: false },
          ticks: { display:false, fontSize:11 , autoSkip: false,  maxRotation: 0,  minRotation: 0, },
            },],

      yAxes: [{
        ticks: {display:true, fontSize:18 ,  padding: 15, callback: function(value){ return value+ "%"}, },
        gridLines: {   display:true,  drawBorder: false,  lineWidth: 1,  color: "rgba(255,255,255,1)",  zeroLineColor: "rgba(255,255,255,1)",},
        }] },
        tooltips: {
            position: 'nearest',
            mode: 'index',
            intersect: false,
            yPadding: 16,
            xPadding: 16,
            caretSize:8,
            backgroundColor: 'rgba(10,36,59,0.9)',
            titleFontColor: "#2cbaab",
            titleFontSize:14,

            titleMarginBottom:10,
            bodyFontColor: 'rgba(255,255,255,1)',
            borderColor: '#2cbaab',
            borderWidth: 1,
            bodyFontStyle:'normal',
            bodySpacing: 8,
            callbacks: {
                label: function(tooltipItem, data) {

                    return " " + data['datasets'][0]['label']+ ": " + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                }}
          },

       },


})

window.S4_Fees_2_ChartData  = new Chart(S4_Fees3_investment,{
type: 'bar',
  data: S4_Fees_2_ChartData,

  options:{

    legend: {  display: false },
    responsive : true,
    maintainAspectRatio: true,
    layout: {  margins: { left: 0, right: 0,  top: 0,  bottom: 0 },
               padding: {  left: 25, right: 100,   top:25,  bottom: 139 }, },

    scales: {
      xAxes: [{
          gridLines: { display:false, drawBorder: false },
          ticks: { display:false, fontSize:11 , autoSkip: false,  maxRotation: 0,  minRotation: 0, },
            },],

      yAxes: [{
        ticks: {display:true, fontSize:18 ,  padding: 15, callback: function(value){ return value+ "%"}, },
        gridLines: {   display:true,  drawBorder: false,  lineWidth: 1,  color: "rgba(255,255,255,1)",  zeroLineColor: "rgba(255,255,255,1)",},
        }] },
        tooltips: {
            position: 'nearest',
            mode: 'index',
            intersect: false,
            yPadding: 16,
            xPadding: 16,
            caretSize:8,
            backgroundColor: 'rgba(10,36,59,0.9)',
            titleFontColor: "#2cbaab",
            titleFontSize:14,

            titleMarginBottom:10,
            bodyFontColor: 'rgba(255,255,255,1)',
            borderColor: '#2cbaab',
            borderWidth: 1,
            bodyFontStyle:'normal',
            bodySpacing: 8,
            callbacks: {
                label: function(tooltipItem, data) {

                    return " " + data['datasets'][0]['label']+ ": " + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                }}
          },
       },


})


//---------------SCENE 7 ---1---------------------------------
window.S7_Benchmark_1_ChartData  = new Chart(S7_Benchmark_1,{
type: 'doughnut',
  data: S7_Benchmark_1_ChartData ,
  options:{
      maintainAspectRatio : false,
    tooltips: {enabled:true,intersect:false},
    layout: {  margins: { left: 0, right: 0,  top: 0,  bottom: 0 },
               padding: {  left: 0, right: 10,   top:35,  bottom: 15 }, },
    legend: {  display: false, labels: { fontColor: 'rgb(255, 99, 132)',  }  },
    cutoutPercentage:95,

    title:{ display:false, text:'DutchFunds', fontSize:11, fontColor: '#12497F' ,position:'bottom' } ,

    tooltips: {
        position: 'average',
      mode: 'nearest',
        intersect: false,
        yPadding: 16,
        xPadding: 16,
        caretSize:8,
        backgroundColor: 'rgba(10,36,59,0.9)',
        titleFontColor: "#3f7eff",
        titleFontSize:14,

        titleMarginBottom:10,
        bodyFontColor: 'rgba(255,255,255,1)',
        borderColor: '#3f7eff',
        borderWidth: 1,
        bodyFontStyle:'normal',
        bodySpacing: 8,

        callbacks: {
            label: function(tooltipItem, data) {
                return data['labels'][0]+ ": " + data['datasets'][0]['data'][tooltipItem['index']] + '%';
            }}
      },


  }

})

//---------------SCENE 7 ---2---------------------------------
window.S7_Benchmark_2_ChartData  = new Chart(S7_Benchmark_2,{
type: 'doughnut',
  data: S7_Benchmark_2_ChartData ,
  options:{
    maintainAspectRatio : false,
    layout: {  margins: { left: 0, right: 0,  top: 0,  bottom: 0 },
               padding: {  left: 0, right: 0,   top:35,  bottom: 15 }, },
    tooltips: {enabled:true,intersect:false},
    legend: {  display: false, labels: { fontColor: 'rgb(255, 99, 132)',  }  },
    //circumference:100,
    cutoutPercentage:95,

    title:{ display:false, text:'XDutchFunds', fontSize:11, fontColor: '#12497F' ,position:'bottom' },
    tooltips: {
        position: 'average',
      mode: 'nearest',
        intersect: false,
        yPadding: 16,
        xPadding: 16,
        caretSize:8,
        backgroundColor: 'rgba(10,36,59,0.9)',
        titleFontColor: "#3f7eff",
        titleFontSize:14,

        titleMarginBottom:10,
        bodyFontColor: 'rgba(255,255,255,1)',
        borderColor: '#3f7eff',
        borderWidth: 1,
        bodyFontStyle:'normal',
        bodySpacing: 8,
        callbacks: {
            label: function(tooltipItem, data) {
                  return data['labels'][tooltipItem['index']]+ ": " + data['datasets'][0]['data'][tooltipItem['index']] + '%';
            }}
      },
   }

})

window.S7_Benchmark_3_ChartData  = new Chart(S7_Benchmark_3,{
type: 'doughnut',
  data: S7_Benchmark_3_ChartData ,
  options:{
      maintainAspectRatio : false,
    tooltips: {enabled:true,intersect:false},
    layout: {  margins: { left: 0, right: 0,  top: 0,  bottom: 0 },
               padding: {  left: 0, right: 10,   top:35,  bottom: 15 }, },
    legend: {  display: false, labels: { fontColor: 'rgb(255, 99, 132)',  }  },
    cutoutPercentage:95,
    title:{ display:false, text:'DutchFunds', fontColor: '#12497F' ,position:'bottom' },
    tooltips: {
        position: 'average',
        mode: 'nearest',
        intersect: false,
        yPadding: 16,
        xPadding: 16,
        caretSize:8,
        backgroundColor: 'rgba(10,36,59,0.9)',
        titleFontColor: "#3f7eff",
        titleFontSize:14,

        titleMarginBottom:10,
        bodyFontColor: 'rgba(255,255,255,1)',
        borderColor: '#3f7eff',
        borderWidth: 1,
        bodyFontStyle:'normal',
        bodySpacing: 8,
        callbacks: {
            label: function(tooltipItem, data) {

                return data['labels'][0]+ ": " + data['datasets'][0]['data'][tooltipItem['index']] + '%';
            }}
      },
   }

})
//---------------SCENE 7 ---END---------------------------------

//---------------SCENE 8 ---1---------------------------------

window.S8_Development_1_ChartData  = new Chart(S8_Development_1,{
type: 'doughnut',
  data: S8_Development_1_ChartData ,
  options:{
    //plugins: { deferred: {   yOffset: '50%',  delay: 500  }},
      maintainAspectRatio : false,

  layout: {  margins: { left: 0, right: 0,  top: 0,  bottom: 0 },
             padding: {  left: 0, right: 25,   top:0,  bottom: 20 }, },
    legend: {  display: false, labels: { fontColor: 'rgb(255, 99, 132)',  }  },
    cutoutPercentage:70,
        title:{ display:false, text:'Aggregate asset glass holdings (2016)', fontSize:11, fontColor: '#12497F' },
        tooltips: {

            position: 'average',
            mode: 'nearest',
            intersect: false,
            yPadding: 16,
            xPadding: 16,
            caretSize:8,
            backgroundColor: 'rgba(10,36,59,0.9)',
            titleFontColor: "#FFFFFF",
            titleFontSize:14,

            titleMarginBottom:10,
            bodyFontColor: 'rgba(255,255,255,1)',
            borderColor: '#FFFFFF',
            borderWidth: 1,
            bodyFontStyle:'normal',
            bodySpacing: 8,
            callbacks: {

                       label: function (tooltipItems, data) {
                            return data.labels[tooltipItems.index] + ': ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '%';
                       }
                     }
          },
      }

})

//---------------SCENE 8 ---1---------------------------------

window.S8_Development_2_ChartData  = new Chart(S8_Development_2,{
type: 'doughnut',
  data: S8_Development_2_ChartData ,
  options:{

//plugins: { deferred: {   yOffset: '50%',  delay: 500  }},

      maintainAspectRatio : false,
  //  tooltips: {enabled:false,intersect:false},
  layout: {  margins: { left: 0, right: 0,  top: 0,  bottom: 0 },
             padding: {  left: 0, right: 0,   top:0,  bottom: 20 }, },
    legend: {  display: false, labels: { fontColor: 'rgb(255, 99, 132)',  }  },
    cutoutPercentage:70,
        title:{ display:false, text:'Aggregate asset glass holdings (2016)', fontSize:11, fontColor: '#12497F' },

        tooltips: {
            position: 'average',
            mode: 'nearest',
            intersect: false,
            yPadding: 16,
            xPadding: 16,
            caretSize:8,
            backgroundColor: 'rgba(10,36,59,0.9)',
            titleFontColor: "#FFFFFF",
            titleFontSize:14,

            titleMarginBottom:10,
            bodyFontColor: 'rgba(255,255,255,1)',
            borderColor: '#FFFFFF',
            borderWidth: 1,
            bodyFontStyle:'normal',
            bodySpacing: 8,
            callbacks: {

                       label: function (tooltipItems, data) {
                           return data.labels[tooltipItems.index] + ': ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '%';
                       }
                     }
          },


       }

})

//________


var ann_1 = ['Listed Real Estate'];
var ann_labels_1 = ["your data"];

var annotations_array_1 = ann_1.map(function(value, index) {
    return {
        type: 'line',
        id: 'vline' + index,
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: value,
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 60,


        label: {
            enabled: false,
            position: "center",
            content: ann_labels[index],
            xAdjust: -150,



        }
    }
});


  window.S3_ReturnsChart_Dutch = new Chart(S1_Returns_Dutch, {
    type: 'horizontalBar',
    data: barChartData_Dutch,

    options: {

      scaleShowVerticalLines: false,
      scaleShowHorizontalLines: false,
      scaleShowGridLines: false,
      scaleGridLineWidth: 0,
      scaleGridLineColor: "rgba(0,0,0,0.1)",

      //elements: { point: { radius: 0 } },
              annotation: {
                  drawTime: 'afterDatasetsDraw',
                  annotations: annotations_array_1,
              },


      layout: {

        margins: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },

        padding: {
          left: 13,
          right: 100,
          top:55,
          bottom: 10
        },


      },

      title: {
        display: false,
        text: 'Scene 3 Returns',
        fontColor: 'black'
      },
      legend: {
        display: false,
        labels: {
          fontColor: 'black',
          fontSize: 12,

        }
      },
      tooltips: {
          position: 'average',
          mode: 'index',
          intersect: false,
          yPadding: 16,
          xPadding: 16,
          caretSize:8,
          backgroundColor: 'rgba(10,36,59,0.9)',
          titleFontColor: "#dea955",
          titleFontSize:14,

          titleMarginBottom:10,
          bodyFontColor: 'rgba(255,255,255,1)',
          borderColor: '#d59f4e',
          borderWidth: 1,
          bodyFontStyle:'normal',
          bodySpacing: 8,

          callbacks: {

                     label: function (tooltipItems, data) {
                         return data.datasets[tooltipItems.datasetIndex].label + ': ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '%';
                     }
                   }
        },
      responsive: true,
      maintainAspectRatio: false,

      scales: {
        xAxes: [{
          ticks: {
                      display: true, fontSize:17,padding: 10},
          stacked: true,
          barValueSpacing: 0,
          gridLines: {
            drawBorder: false,
            lineWidth: 1,
            color: "rgba(255,255,255,0.5)",
            zeroLineColor: "rgba(255,255,255,0.5)",
          }

        }],
        yAxes: [{
          ticks: {
                      display: false, },
          tickOptions: {
            showGridline: true,
          },
          stacked: true,
          barThickness: 25,
          barValueSpacing: 10,

          gridLines: {
            lineWidth: 0,
            color: "rgba(255,255,255,0)"
          }

        }]
      }
    }
  });


  window.S3_ReturnsChart_UK = new Chart(S1_Returns_UK, {
    type: 'horizontalBar',
    data: barChartData_UK_Funds,

    options: {

      scaleShowVerticalLines: false,
      scaleShowHorizontalLines: false,
      scaleShowGridLines: false,
      scaleGridLineWidth: 0,
      scaleGridLineColor: "rgba(0,0,0,0.1)",

              annotation: {
                  drawTime: 'afterDatasetsDraw',
                  annotations: annotations_array_1,
              },


      layout: {

        margins: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },

        padding: {
          left: 13,
          right: 100,
          top:55,
          bottom: 10
        },


      },

      title: {
        display: false,
        text: 'Scene 3 Returns',
        fontColor: 'black'
      },
      legend: {
        display: false,
        labels: {
          fontColor: 'black',
          fontSize: 12,

        }
      },
      tooltips: {
          position: 'average',
          mode: 'index',
          intersect: false,
          yPadding: 16,
          xPadding: 16,
          caretSize:8,
          backgroundColor: 'rgba(10,36,59,0.9)',
          titleFontColor: "#dea955",
          titleFontSize:14,

          titleMarginBottom:10,
          bodyFontColor: 'rgba(255,255,255,1)',
          borderColor: '#d59f4e',
          borderWidth: 1,
          bodyFontStyle:'normal',
          bodySpacing: 8,
          callbacks: {

                     label: function (tooltipItems, data) {
                         return data.datasets[tooltipItems.datasetIndex].label + ': ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '%';
                     }
                   }

        },

      responsive: true,
      maintainAspectRatio: false,

      scales: {
        xAxes: [{
          ticks: {
                      display: true, fontSize:17,padding: 10},
          stacked: true,
          barValueSpacing: 0,
          gridLines: {
              drawBorder: false,
            lineWidth: 1,
            color: "rgba(255,255,255,0.5)",
            zeroLineColor: "rgba(255,255,255,0.5)",
          }

        }],
        yAxes: [{
          ticks: {
                      display: false},
          tickOptions: {
            showGridline: true,
          },
          stacked: true,
          barThickness: 25,
          barValueSpacing: 10,

          gridLines: {
            lineWidth: 0,
            color: "rgba(255,255,255,0)"
          }

        }]
      }
    }
  });
  window.S3_ReturnsChart_Other= new Chart(S1_Returns_Other, {
    type: 'horizontalBar',
    data: barChartData_Other,

    options: {

      scaleShowVerticalLines: false,
      scaleShowHorizontalLines: false,
      scaleShowGridLines: false,
      scaleGridLineWidth: 0,
      scaleGridLineColor: "rgba(0,0,0,0.1)",

              annotation: {
                  drawTime: 'afterDatasetsDraw',
                  annotations: annotations_array_1,
              },


      layout: {

        margins: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },

        padding: {
          left: 13,
          right: 100,
          top:55,
          bottom: 10
        },


      },

      title: {
        display: false,
        text: 'Scene 3 Returns',
        fontColor: 'black'
      },
      legend: {
        display: false,
        labels: {
          fontColor: 'black',
          fontSize: 12,

        }
      },
      tooltips: {
          position: 'average',
          mode: 'index',
          intersect: false,
          yPadding: 16,
          xPadding: 16,
          caretSize:8,
          backgroundColor: 'rgba(10,36,59,0.9)',
          titleFontColor: "#dea955",
          titleFontSize:14,

          titleMarginBottom:10,
          bodyFontColor: 'rgba(255,255,255,1)',
          borderColor: '#d59f4e',
          borderWidth: 1,
          bodyFontStyle:'normal',
          bodySpacing: 8,
          callbacks: {

                     label: function (tooltipItems, data) {
                         return data.datasets[tooltipItems.datasetIndex].label + ': ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '%';
                     }
                   }

        },
      responsive: true,
      maintainAspectRatio: false,

      scales: {
        xAxes: [{
          ticks: {
                      display: true, fontSize:17,  padding: 10},
          stacked: true,
          barValueSpacing: 0,

          gridLines: {
              drawBorder: false,
            lineWidth: 1,
            color: "rgba(255,255,255,0.5)",
            zeroLineColor: "rgba(255,255,255,0.5)",
          }

        }],
        yAxes: [{
          ticks: {
                      display: false},
          tickOptions: {
            showGridline: true,
          },
          stacked: true,
          barThickness: 25,
          barValueSpacing: 10,

          gridLines: {
            lineWidth: 0,
            color: "rgba(255,255,255,0)"
          }

        }]
      }
    }
  });
//------------------------------------------------------------------------//
//-------------------Scatter_Dutch Chart 1 -------------------------------//

var S6_Risk_DutchChart = document.getElementById('S6_Risk_Chart_1').getContext('2d');
window.Risk_chart = new Chart(S6_Risk_DutchChart, {
  type: 'bubble',
  data: S6_Risk_Dutch_ChartData,

  options: {



        pointHoverBorderWidth: 2,
             pointRadius: 1,
             pointHitRadius: 10,

          //  datasets: [ {label: 'Listed Real Estate', data: [ {	value:0.24,	x: 9.13	,	y:9.93	} ],  backgroundColor:"#a277f7",hoverBackgroundColor: "#a277f7" },
 //-------------------------------------------------------
                     elements: {
                         point: {


radius: function(context) {
var value = context.dataset.data[context.dataIndex].value;
var size = context.chart.width/0.07;
var base = Math.abs(value) / 100;
return (size / 10) * base;

}

                         }},
             //-------------------------------------------------------
                 scales: {
               xAxes: [{
                 color: 'blue',
                 gridLines: {
                   display: false,

                   	color: "#a277f7",
                   	lineWidth: 2,

                 },
                 ticks: {
                   fontSize: 18,
                   fontStyle: "normal",
                   fontColor: "#FFFFFF",
                 }
               }],
               yAxes: [{
                 color: 'blue',
                 gridLines: {
                   display: false,
                   color: "#a277f7",
                   lineWidth: 2,

                 },
                 ticks: {
                   fontSize: 18,
                   fontStyle: "normal",
                   fontColor: "#FFFFFF",
                   min: -3,
                  max: 15,
                 }
               }]
             },
             //-------------------------------------------------------


 maintainAspectRatio : false,
  responsive: true,

  layout: {

    margins: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },

    padding: {
      left: 0,
      right: 100,
      top:40,
      bottom: 6
    },


  },
    title: {display: false, text: 'Risk/Return/Fees' },
    legend: { display: false },


    tooltips: {
        position: 'average',
        mode: 'point',
        intersect: false,
        yPadding: 16,
        xPadding: 16,
        caretSize:8,
        backgroundColor: 'rgba(10,36,59,0.9)',
        titleFontColor: "#dea955",
        titleFontSize:14,

        titleMarginBottom:10,
        bodyFontColor: 'rgba(255,255,255,1)',
        borderColor: '#a277f7',
        borderWidth: 1,
        bodyFontStyle:'normal',
        bodySpacing: 8,

        callbacks: {
            label: function(tooltipItem, data,index) {
              var label_name = data.datasets[tooltipItem.datasetIndex].label;
              var size = data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']].value;
              var xpos=data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']].x
              var ypos=data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']].y

                return label_name + " " + " x: " + xpos + " y: " + ypos+ " size: " +size;
            }}


      },


  }


});
//------------------------------------------------------------------------//
//----------------------Scatter_UK Chart 1 -------------------------------//
var S6_Risk_UKChart = document.getElementById('S6_Risk_Chart_2').getContext('2d');
window.Risk_chart = new Chart(S6_Risk_UKChart, {
  type: 'bubble',
  data: S6_Risk_UK_ChartData,

  options: {

        pointHoverBorderWidth: 2,
             pointRadius: 1,
             pointHitRadius: 10,

             //-------------------------------------------------------
                 scales: {
               xAxes: [{
                 color: 'blue',
                 gridLines: {
                   display: false,

                   	color: "#a277f7",
                   	lineWidth: 2,

                 },
                 ticks: {
                   fontSize: 18,
                   fontStyle: "normal",
                   fontColor: "#FFFFFF",
                 }
               }],
               yAxes: [{
                 color: 'blue',
                 gridLines: {
                   display: false,
                   color: "#a277f7",
                   lineWidth: 2,

                 },
                 ticks: {
                   fontSize: 18,
                   fontStyle: "normal",
                   fontColor: "#FFFFFF",
                        min: 0,
                       max: 15,
                 }
               }]
             },
             //-------------------------------------------------------

        elements: {
            point: {

              radius: function(context) {
              var value = context.dataset.data[context.dataIndex].value;
              var size = context.chart.width/0.07;
              var base = Math.abs(value) / 100;
              return (size / 10) * base;

              }


            }},

 maintainAspectRatio : false,
  responsive: true,

  layout: {

    margins: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },

    padding: {
      left: 0,
      right: 100,
      top:40,
      bottom: 6
    },


  },
    title: {display: false, text: 'Risk/Return/Fees' },
    legend: { display: false },


    tooltips: {
        position: 'average',
        mode: 'point',
        intersect: false,
        yPadding: 16,
        xPadding: 16,
        caretSize:8,
        backgroundColor: 'rgba(10,36,59,0.9)',
        titleFontColor: "#dea955",
        titleFontSize:14,

        titleMarginBottom:10,
        bodyFontColor: 'rgba(255,255,255,1)',
        borderColor: '#a277f7',
        borderWidth: 1,
        bodyFontStyle:'normal',
        bodySpacing: 8,
        callbacks: {
            label: function(tooltipItem, data,index) {
              var label_name = data.datasets[tooltipItem.datasetIndex].label;
              var size = data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']].value;
              var xpos=data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']].x
              var ypos=data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']].y

                return label_name + " " + " x: " + xpos + " y: " + ypos+ " size: " +size;
            }}

      },


  }


});


//------------------------------------------------------------------------//
//-------------------Scatter_OTHER Chart 1 -------------------------------//
var S6_Risk_OtherChart = document.getElementById('S6_Risk_Chart_3').getContext('2d');
window.Risk_chart = new Chart(S6_Risk_OtherChart, {
  type: 'bubble',
  data: S6_Risk_Other_ChartData,

  options: {


            elements: {
                point: {

                  radius: function(context) {
                  var value = context.dataset.data[context.dataIndex].value;
                  var size = context.chart.width/0.07;
                  var base = Math.abs(value) / 100;
                  return (size / 10) * base;

                  }


                }},

        pointHoverBorderWidth: 2,
             pointRadius: 1,
             pointHitRadius: 10,

             //-------------------------------------------------------
                 scales: {
               xAxes: [{
                 color: 'blue',
                 gridLines: {
                   display: false,

                   	color: "#a277f7",
                   	lineWidth: 2,

                 },
                 ticks: {
                   fontSize: 18,
                   fontStyle: "normal",
                   fontColor: "#FFFFFF",
                 }
               }],
               yAxes: [{
                 color: 'blue',
                 gridLines: {
                   display: false,
                   color: "#a277f7",
                   lineWidth: 2,

                 },
                 ticks: {
                   fontSize: 18,
                   fontStyle: "normal",
                   fontColor: "#FFFFFF",

          //  min: 0,
            max: 15,
            //stepSize: 20

                 }
               }]
             },
             //-------------------------------------------------------


 maintainAspectRatio : false,
  responsive: true,

  layout: {

    margins: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },

    padding: {
      left: 0,
      right: 100,
      top:40,
      bottom: 6
    },


  },
    title: {display: false, text: 'Risk/Return/Fees' },
    legend: { display: false },


    tooltips: {
        position: 'average',
        mode: 'point',
        intersect: false,
        yPadding: 16,
        xPadding: 16,
        caretSize:8,
        backgroundColor: 'rgba(10,36,59,0.9)',
        titleFontColor: "#dea955",
        titleFontSize:14,

        titleMarginBottom:10,
        bodyFontColor: 'rgba(255,255,255,1)',
        borderColor: '#a277f7',
        borderWidth: 1,
        bodyFontStyle:'normal',
        bodySpacing: 8,
        callbacks: {
            label: function(tooltipItem, data,index) {
              var label_name = data.datasets[tooltipItem.datasetIndex].label;
              var size = data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']].value;
              var xpos=data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']].x
              var ypos=data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']].y

                return label_name + " " + " x: " + xpos + " y: " + ypos+ " size: " +size;
            }}

      },


  }


});

//------------------------------------------------------------------------//

};
