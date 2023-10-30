
import React from 'react'
import { add, remove, getTotal, clear, decrease } from './Cartslice'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const {cartItems, cartTotalAmount, cartQty}=useSelector((state)=>state.cart)
  const dispatch=useDispatch()

  if(cartQty===0){
    return <div className='emptyCart'>
      <h4>Cart is empty!</h4>
    </div>
  }
  return (
    <div>
      {cartItems.map((item, id)=>{
        return(
          <div key={id} className='cart-flex'>
           <div className='cart-product'>
           <img src={item.image} alt=""/>
            <h4>{item.title}</h4>
            <h4>${item.price}</h4>
            

            <h4>{item.cartQty}</h4>
            <h4>SubTotal: ${item.price * item.cartQty}</h4>
            <button onClick={()=>dispatch(add(item))}>+</button>
            <button onClick={()=>dispatch(decrease(item))}>-</button>
            <br />
            <button onClick={()=>dispatch(remove(item))}>Remove</button>
           </div>
          </div>
        )
      })}
      <br />
      <br />
      <hr />
     <div className='bottom-clear'>
     <button onClick={()=>dispatch(clear())}>Clear</button>
      <h4>Total: ${cartTotalAmount}</h4>
     </div>
    </div>
  )
}

export default Cart
