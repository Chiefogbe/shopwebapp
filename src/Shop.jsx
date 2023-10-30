import React from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { add } from './Cartslice'
import { useDispatch } from 'react-redux'
import Footer from './Footer'


const Shop = () => {
  
  const[product, setProduct]=useState([])

  const fetchData=async()=>{
    try {
      const res=await Axios.get('https://fakestoreapi.com/products?limit=20')
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

      <Footer/>
    </div>
  )
}

export default Shop
