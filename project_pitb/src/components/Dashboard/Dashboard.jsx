import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import styled from "styled-components"
import {pieChartData , barChartData} from './highChartData'
import CountUp from "react-countup"
import { useState } from 'react'
import userService from "../Services/UserService"

const ChartContainer = styled.div`
  padding-top: 10px;;
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
`

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



  let pieChartData = {
    chart: {
        backgroundColor: 'ghostwhite',
        height:350,
        width:600,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Technologies'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b'
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
        name:"Technology",
        colorByPoint: true,
        data: records.technology
    }]
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
        <CountUp delay={1} end={records?.status[0]?.data}  start={0}   />
        <span>In Development</span>
    </CounterDiv>
    <CounterDiv>
        <CountUp delay={1} end={records?.status[1]?.data}  start={0}   />
        <span style={{fontSize:"14px"}}>Live & Continuous Development</span>
    </CounterDiv> 
   <CounterDiv>
        <CountUp delay={1} end={records?.status[2]?.data}  start={0}   />
        <span style={{fontSize:"14px"}}>Live without Development</span>
    </CounterDiv>
    <CounterDiv>
        <CountUp delay={1} end={records?.status[3]?.data}  start={0}   />
        <span>Closed</span>
    </CounterDiv>
  </CounterBox>


    <ChartContainer>
    <HighchartsReact
    highcharts={Highcharts}
    options={pieChartData}
  />
  <HighchartsReact
    highcharts={Highcharts}
    options={barChartData}
  />
</ChartContainer>
    </>
  }
</>
  )
}

export default Dashboard