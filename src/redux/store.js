import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./hotelSlice";

// store
const store = configureStore({
  reducer: {
    hotels: hotelReducer,
  },
});

store.subscribe(() => {
  try {
    const hotels = store.getState().hotels.hotels;
    localStorage.setItem("hotels", JSON.stringify(hotels));
  } catch (error) {
    console.error("Unable to save hotels:", error);
  }
});

export default store;
