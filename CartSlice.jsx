// src/redux/CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the cart
const initialState = {
  items: [],
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        // If item already exists, increment its quantity
        existingItem.quantity += item.quantity;
      } else {
        // If item does not exist, add it to the cart
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    // Reducer to update the quantity of a specific item in the cart
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

// Export the actions and the reducer
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
