import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      cartItems: [],
   },
   reducers: {
      addItems: (state, action) => {
         const newItem = action.payload;
         const existingItem = state.cartItems.find((i) => i.id === newItem.id);

         if (existingItem) {
            state.cartItems = state.cartItems.map((i) => i.id === newItem.id ? {...i, quantity: i.quantity + 1} : i)
         
         } 
         else{
            state.cartItems.push({...action.payload, quantity: 1});
         }
         
      },
      removeItems: (state, action) => {
         state.cartItems = state.cartItems.filter((i) => i.id !== action.payload.id);
      },
      increaseQty: (state, action) => {
         state.cartItems = state.cartItems.map((i) => i.id === action.payload.id ? {...i, quantity: i.quantity + 1}: i)
      },
      decreaseQty: (state, action) => {
         console.log(action.payload.quantity)
         if(action.payload.quantity>1){
            state.cartItems = state.cartItems.map((i) => i.id === action.payload.id ? {...i, quantity: i.quantity - 1}: i)
         }
         
      },
      clearCart: (state, action) => {
         state.cartItems.length = 0;
      }
   }
})

export const {addItems, removeItems, clearCart, increaseQty, decreaseQty} = cartSlice.actions;
export default cartSlice.reducer;