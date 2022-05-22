import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, actions) => { 
            state.itemsInCart.push(actions.payload)
        },
        deleteItemFromCart: (state, actions) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== actions.payload)
        }
    }
})

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions
export default cartSlice.reducer