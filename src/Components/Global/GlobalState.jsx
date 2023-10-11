import { createSlice } from '@reduxjs/toolkit';
// import { useState } from 'react';

// let id = "id"
// console.log(id)
const initialState = {
    user: null,
    product: [],
    cartItem: [],
    qty: 0,
    totalPrice: 0,
};

const GlobalState = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        // createUser: (state, { payload }) => {
        //     state.user = payload;
        // },
        addProduct: (state, { payload }) => {
            state.product = payload;
        },

        addToCart: (state, { payload }) => {
            const check = state.cartItem.findIndex((el) => el._id === payload._id);
            let cart = []

            if (check >= 0) {
                state.cartItem[ check ].qty += 1;
            } else {
                state.cartItem.push({ ...payload, qty: 1 });
            }

            state.qty += 1;
            state.totalPrice += payload.qty * payload.price;
        },

        removeCart: (state, { payload }) => {
            const check = state.cartItem.findIndex((el) => el._id === payload._id);

            if (state.cartItem[ check ].qty > 1) {
                state.cartItem[ check ].qty -= 1;
            } else {
                state.cartItem = state.cartItem.filter((el) => el._id !== payload._id);
            }
            state.qty -= 1;
            state.totalPrice -= payload.price;
        },
        removeFromCart: (state, { payload }) => {
          state.cartItem = state.cartItem.filter((el)=> el._id !== payload._id)  
        },

        removeAllCart: (state) => {
            state.cartItem = [];
            state.qty = 0
        },

        total: (state, { payload }) => {
            const { totalCost, totalItems } = state.cart.reduce(
                (cost, items) => {
                    const { price, QTY } = items;
      
                    const mainCost = price * QTY;
      
                    cost.totalItems += QTY;
                    cost.totalCost += mainCost;
      
                    return cost;
                },
                {
                    totalCost: 0,
                    totalItems: 0,
                }
            );
            state.MyTotalQTY = totalItems;
            state.MyTotalCost = totalCost;
        },

        signOut: (state) => {
            state.user = null;
        }
    }
});

export const { signOut, addProduct, addToCart, removeCart,removeAllCart,removeFromCart } = GlobalState.actions;

export default GlobalState.reducer;