// import { userData } from "./Fakedata";
import { createSlice } from "@reduxjs/toolkit";

const Cartslice=createSlice({
  name:'user',
  initialState:{
    cartItems:localStorage.getItem('cartProducts')?JSON.parse(localStorage.getItem('cartProducts')):[],
    cartQty:0,
    cartTotalAmount:0
  },
  reducers:{
    add:(state,action)=>{
      const ItemIndex=state.cartItems.findIndex(item=>item.id===action.payload.id)
      if(ItemIndex>=0){
        state.cartItems[ItemIndex].cartQty+=1
      }
      else{
        const tempProduct={...action.payload, cartQty:1}
        state.cartItems.push(tempProduct)

      }

      localStorage.setItem('cartProducts', JSON.stringify(state.cartItems))

    },

    remove:(state, action)=>{
      const nextCartItems=state.cartItems.filter(item=>item.id !==action.payload.id)
      state.cartItems=nextCartItems
      localStorage.setItem('cartProducts', JSON.stringify(state.cartItems))
    },

    decrease:(state, action)=>{
      const ItemIndex=state.cartItems.findIndex(item=>item.id===action.payload.id)
      if(state.cartItems[ItemIndex].cartQty>1){
        state.cartItems[ItemIndex].cartQty-=1
      }
      else if(state.cartItems[ItemIndex].cartQty===1){
        const nextCartItems=state.cartItems.filter(item=>item.id !==action.payload.id)
        state.cartItems=nextCartItems 
      }
      localStorage.setItem('cartProducts', JSON.stringify(state.cartItems))

    },

    clear:(state)=>{
      state.cartItems=[]
      localStorage.setItem('cartProducts', JSON.stringify(state.cartItems))
    },

    getTotal:(state)=>{
      let{total, quantity}=state.cartItems.reduce((cartTotal, item)=>{
        const {price, cartQty}=item
        const itemTotal=price * cartQty
        cartTotal.total+=itemTotal
        cartTotal.quantity+=cartQty
        return cartTotal
      }, {total:0, quantity:0})
      state.cartQty=quantity
      state.cartTotalAmount=total
    }
  }
})

export const{add, remove, clear, decrease, getTotal}=Cartslice.actions
export default Cartslice.reducer