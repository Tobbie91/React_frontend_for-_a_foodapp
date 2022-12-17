import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import CartInfo  from '../../components/CartDetails/CartInfo'
// import RestuarantContainer from '../../components/RestuarantContainer/RestuarantContainer'


const CartDetails = props => {
  return (
    <div>
        <Navbar />
        <CartInfo />
        <Footer />
    </div>
  )
}



export default CartDetails