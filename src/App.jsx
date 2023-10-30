import React, { useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from './Cartslice'
import Home from './Home'

const App = () => {
  const {cartItems}=useSelector((state)=>state.cart)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getTotal())
  }, [cartItems, dispatch])
  return (
    <div>
     
      <Navbar/>
    </div>
  )
}

export default App