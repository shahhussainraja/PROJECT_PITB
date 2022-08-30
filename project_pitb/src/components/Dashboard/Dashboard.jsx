import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import styled from "styled-components"
import {pieChartData , barChartData} from './highChartData'
import CountUp from "react-countup"

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
  return (
    <>
  <CounterBox>
    <CounterDiv>
        <CountUp delay={1} end={100}  start={0}   />
        <span>Total Projects</span>
    </CounterDiv>
    <CounterDiv>
        <CountUp delay={1} end={100}  start={0}   />
        <span>In Development</span>
    </CounterDiv>
    <CounterDiv>
        <CountUp delay={1} end={100}  start={0}   />
        <span style={{fontSize:"14px"}}>Live & Continuous Development</span>
    </CounterDiv> 
   <CounterDiv>
        <CountUp delay={1} end={100}  start={0}   />
        <span style={{fontSize:"14px"}}>Live without Development</span>
    </CounterDiv>
    <CounterDiv>
        <CountUp delay={1} end={100}  start={0}   />
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
  )
}

export default Dashboard