import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import RestuarantContainer from '../../components/RestuarantContainer/RestuarantContainer'


const Restuarant = props => {
  return (
    <div>
        <Navbar />
        <RestuarantContainer />
        <Footer />
    </div>
  )
}



export default Restuarant