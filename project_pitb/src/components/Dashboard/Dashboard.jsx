import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import styled from "styled-components"
import {pieChartData , barChartData} from './highChartData'
import CountUp from "react-countup"
import { useState } from 'react'
import userService from "../Services/UserService"


const CounterBox = styled.div`
display: flex;
flex-direction:row;
align-items: center;
justify-content: space-between;

`
const CounterDiv  = styled.div`
margin: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 55px;
width: 230px;
background-color: #1b4965;
border-radius: 2px;
color:white;
font-size: medium;
font-weight:400;
`
  const ChartContainer = styled.div`
    padding-top: 20px;;
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    justify-content: space-between;


 @media screen and (max-width: 789px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
  `

function Dashboard() {

  const [records,setRecords] = useState({});

  const fetch =()=>{
    userService.getStatusReport().then((res)=>{
      console.log(res);
      setRecords(res);
    }).catch((err) => {
      console.log(err.message);
    })
  }

  useEffect(fetch,[]);



  let techPieChartData = {
    chart: {
        backgroundColor: 'ghostwhite',
        // height:350,
        // width:600,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Technologies'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b> ,Projects {point.actualValue}'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} % '
            }
        }
    },
    series: [{
        name:"In Use",
        colorByPoint: true,
        data: records.technologyChart
    }]
}


let statusBarChartData ={
  chart: {
      type: 'column',
      backgroundColor: 'ghostwhite',
      height: 400,
      width:500,
  },

  title: {
      text: 'Status-wise Project Stats'
  },

  subtitle: {
      text: ''
  },

  legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
  },

  xAxis: {
      categories: ['NDP', 'PC-1'],
      labels: {
          x: -10
      }
  },

  yAxis: {
      allowDecimals: false,
      title: {
          text: 'Amount'
      }
  },
  series: records.statusBarChart,
  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
              },
              yAxis: {
                  labels: {
                      align: 'left',
                      x: 0,
                      y: -5
                  },
                  title: {
                      text: null
                  }
              },
              subtitle: {
                  text: null
              },
              credits: {
                  enabled: false
              }
          }
      }]
  }
}



let dgProjectStatusData = {
    chart: {
        type: 'bar',
        backgroundColor: 'ghostwhite',
        height: 400,
        width:700,

    },
    title: {
        text: 'DG-wise Project Stats'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['NDP', 'PC-1'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total projects',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: records.dgBarChart
}



let ndpPcPieChartData = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        },
    height: 470,
    backgroundColor: 'ghostwhite', 
    },
    title: {
        text: 'NDP/PC-1 Projects'
    },
    subtitle: {
        text: ''
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: records.ndpPieData
}


  return (

    <>   
     {Object.keys(records).length === 0 ? <> </>:
    <>
    <CounterBox>
    <CounterDiv>
        <CountUp delay={1} end={records?.totalProject}  start={0}   />
        <span>Total Projects</span>
    </CounterDiv>
    <CounterDiv>
        <CountUp delay={1} end={records?.statusBox[0]?.data}  start={0}   />
        <span>In Development</span>
    </CounterDiv>
    <CounterDiv>
        <CountUp delay={1} end={records?.statusBox[1]?.data}  start={0}   />
        <span style={{fontSize:"14px"}}>Live & Continuous Development</span>
    </CounterDiv> 
   <CounterDiv>
        <CountUp delay={1} end={records?.statusBox[2]?.data}  start={0}   />
        <span style={{fontSize:"14px"}}>Live without Development</span>
    </CounterDiv>
    <CounterDiv>
        <CountUp delay={1} end={records?.statusBox[3]?.data}  start={0}   />
        <span>Closed</span>
    </CounterDiv>
  </CounterBox>


<ChartContainer>
   
<HighchartsReact
    highcharts={Highcharts}
    options={dgProjectStatusData}
  />

  
  <HighchartsReact
    highcharts={Highcharts}
    options={statusBarChartData}
  />
</ChartContainer>

<ChartContainer>
 <HighchartsReact
    highcharts={Highcharts}
    options={techPieChartData}
  />
<HighchartsReact
    highcharts={Highcharts}
    options={ndpPcPieChartData}
  />
</ChartContainer>




    </>
  }
</>
  )
}

export default Dashboard