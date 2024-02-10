import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cart: [],
	totalPrice: 0,
}

export const sliceCart = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addPizza: (state, action) => {
			const find = state.cart.find(c => c.id === action.payload.id)
			if (find) {
				find.count++
			} else {
				state.cart.push({
					...action.payload,
					count: 1,
				})
			}
			state.totalPrice = state.cart.reduce((sum, item) => {
				return item.price * item.count + sum
			}, 0)
		},
		removePizza: (state, action) => {
			state.cart = state.cart.filter(c => c.id !== action.payload)
		},

		decrementPizza: (state, action) => {
			const find = state.cart.find(c => c.id === action.payload)
			if (find) {
				if (find.count > 1) {
					find.count--
				}
			}
		},

		clearPizza: state => {
			state.cart = []
		},
	},
})

export const { removePizza, addPizza, decrementPizza, clearPizza } =
	sliceCart.actions
export default sliceCart.reducer
