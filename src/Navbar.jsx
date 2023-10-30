import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import About from './About'
import Blog from './Blog'
import Shop from './Shop'
import {Squash as Hamburger} from 'hamburger-react'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const {cartQty}=useSelector((state)=>state.cart)
  const[open, setOpen]=useState()

  function toggle(){
    setOpen(!open)
  }
  return (
    <div>
      <Router>

          <nav>
              <div className='icon' >
                <h2>XeCom</h2>
               
              </div>
              <div className='lg-NavBar'>
                <Link to='/' className='links'>Home</Link>
                <Link to='/Cart' className='links'>Cart</Link>
                <Link to='/Shop' className='links' >Shop</Link>
                <Link to='/Blog' className='links'>Blog</Link>
                <Link to='/About' className='links'>About</Link>
              </div>

              <div  className='smm-NavBar'>
              <Hamburger onToggle={toggle}/>
                </div> 
          </nav>

          {open && <div className='sm-NavBar'>
                <Link to='/' className='links'>Home</Link>
                <Link to='/Cart' className='links'>Cart {cartQty}</Link>
                <Link to='/Shop' className='links' >Shop</Link>
                <Link to='/Blog' className='links'>Blog</Link>
                <Link to='/About' className='links'>About</Link>
                {/* <Link to='/Footer' className='links'>Footer</Link> */}
              </div>}
          
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Shop' element={<Shop/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            {/* <Route path='/Footer' element={<Footer/>}/> */}
          </Routes>
         </Router>
    </div>
  )
}

export default Navbar
