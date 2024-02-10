import { configureStore } from "@reduxjs/toolkit"
import reducerPizza from "./slicePizza"
import reducerCart from "./sliceCart"

export const store = configureStore({
	reducer: {
		pizza: reducerPizza,
		cart: reducerCart,
	},
})
