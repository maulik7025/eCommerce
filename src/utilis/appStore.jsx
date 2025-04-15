import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// ✅ Load persisted state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

// ✅ Save state to localStorage whenever the cart changes
const saveState = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save cart state:", err);
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadState(), // Load persisted state
});

// ✅ Listen for changes and save them to localStorage
store.subscribe(() => {
  saveState(store.getState().cart);
});

export default store;