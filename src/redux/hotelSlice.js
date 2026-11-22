import { createSlice } from "@reduxjs/toolkit";
import hotels from "../data/hotels";

// hotelslice
const getInitialHotels = () => {
  try {
    const savedHotels = localStorage.getItem("hotels");
    return savedHotels ? JSON.parse(savedHotels) : hotels;
  } catch (error) {
    console.error("Error loading hotels:", error);
    return hotels;
  }
};

const initialState = {
  hotels: getInitialHotels(),
};

const hotelSlice = createSlice({
  name: "hotels",
  initialState,

  reducers: {
    addHotel: (state, action) => {
      const nextId =
        state.hotels.length > 0
          ? Math.max(...state.hotels.map((hotel) => Number(hotel.id))) + 1
          : 1;

      state.hotels.push({
        ...action.payload,
        id: nextId,
      });
    },

    updateHotel: (state, action) => {
      const index = state.hotels.findIndex(
        (hotel) => Number(hotel.id) === Number(action.payload.id)
      );

      if (index !== -1) {
        state.hotels[index] = {
          ...state.hotels[index],
          ...action.payload,
        };
      }
    },

    deleteHotel: (state, action) => {
      state.hotels = state.hotels.filter(
        (hotel) => Number(hotel.id) !== Number(action.payload)
      );
    },
  },
});

export const { addHotel, updateHotel, deleteHotel } = hotelSlice.actions;

export default hotelSlice.reducer;
