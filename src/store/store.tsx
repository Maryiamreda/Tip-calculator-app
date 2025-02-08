import { configureStore } from "@reduxjs/toolkit";
import tipReducer from './locationSlice';
const store = configureStore({
    reducer: {
        tip: tipReducer, // Assign the ticketReducer to the 'ticket' key

    }
})
export default store;