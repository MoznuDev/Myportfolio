import React from 'react'
import Header from '../Layout/Header'
import Banner from '../Layout/Banner'
import CounterPart from '../Layout/CounterPart'
import Service from '../Service'
import ContractMe from '../Layout/ContractMe'
import Myportfolio from '../Layout/Myportfolio'
import Reviwe from '../Layout/Reviwe'
import Contract from '../Layout/Contract'

const Home = () => {
  return (
    <>
    <Banner/>
    <CounterPart/>
    <Service/>
    <ContractMe/>
    <Myportfolio/>
    <Reviwe/>
    <Contract/>
     </>
  )
}

export default Home