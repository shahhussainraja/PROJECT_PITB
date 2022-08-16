import React from 'react'
import styled from "styled-components"

const Container = styled.div`
height: 60px;
max-width: 100wv;
background-color: green;
align-items:center;
display: flex;
justify-content:space-between;

@media screen and (max-width: 480px){
  background-color: yellow;
}
`
const Left = styled.div`
display:flex;
flex-direction: row;
cursor: pointer;
flex: 1;
`
const Center = styled.div`
display: flex;
flex: 1;
`
const Right = styled.div`
display: flex;
/* flex: 1; */
align-items: center;
`

const LandPage = () => {
  return (
    <>
    <h3>here data will show According to need</h3>
    <h1>Landing Page is here</h1>
    </>
  )
}

export default LandPage;