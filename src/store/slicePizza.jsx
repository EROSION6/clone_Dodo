import { createSlice } from '@reduxjs/toolkit';
import { items } from '../date/Cards';

const initialState = {
  pizza: items,
};


export const slicePizza = createSlice({
  name: 'pizza',
  initialState,
  reducer: {}
});

export default slicePizza.reducer;