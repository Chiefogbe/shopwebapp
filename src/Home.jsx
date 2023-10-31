import React from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { add } from './Cartslice'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Blog from './Blog'
import About from './About'
import Footer from './Footer'

const Home = () => {
  const[product, setProduct]=useState([])
  const navigate=useNavigate()

  const fetchData=async()=>{
    try {
      const res=await Axios.get('https://fakestoreapi.com/products?limit=5')
      const data=res.data
      console.log(data)
      setProduct(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
      fetchData()
  }, [])

  const dispatch=useDispatch()

  function handlecart(product){
    dispatch(add(product))
  }
  return (
    <div>
      
      <div className='HomePage'>
      <h2>Best Jewellery Collection Hub</h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when lokking at its layout. The point is using the lorem</p>
      <button>SHOP NOW</button>
      </div>

      {product.map((item, id)=>{
        return(
          <div className='cart-flex'>
            <div key={id}>
              <img src={item.image} alt=""/>
              <h4>{item.title}</h4>
              <h4>${item.price}</h4>
              <button onClick={()=>handlecart(item)}>add</button>
            </div>
          </div>
        )
      })}

      <div className='vap'>
      <button onClick={()=>navigate('/Shop')}>View All Products</button>
      </div>
      <Blog/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
