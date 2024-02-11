import { createSlice } from '@reduxjs/toolkit';
import { items } from '../data/Cards';

const initialState = {
  pizza: items,
};


export const slicePizza = createSlice({
  name: 'pizza',
  initialState,
  reducer: {}
});

export default slicePizza.reducer;