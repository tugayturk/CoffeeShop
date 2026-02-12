import { CoffeeCart } from '@/types/coffee'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: { coffee: CoffeeCart[] } = {
    coffee: [],
}

export const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CoffeeCart>) => {
            state.coffee.push(action.payload)
        },
        removeCart: (state, action) => {
            state.coffee = state.coffee.filter(
                item => item.id !== action.payload
            )
        },
        incrementQuantity: (state, action: PayloadAction<CoffeeCart>) => {
            const coffee = state.coffee.find(item => item.id == action.payload.id)
            if (coffee) coffee.quantity += 1
        },
        decreaseQuantity: (state, action) => {
            const coffee = state.coffee.find(item => item.id == action.payload.id)
            if (coffee && coffee.quantity > 1) {
                coffee.quantity -= 1
            }
        }
    }
})


export const { addToCart, removeCart, incrementQuantity, decreaseQuantity } = coffeeSlice.actions

export default coffeeSlice.reducer