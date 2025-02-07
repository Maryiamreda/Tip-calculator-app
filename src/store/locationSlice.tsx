import { createSlice } from '@reduxjs/toolkit';
const initialState = {

    tipAmount: 0.00,
    total: 0.00
}
export const tipSlice = createSlice({
    name: "tip",
    initialState,
    reducers: {
        setTipAmount: (state, action) => {
            state.tipAmount = action.payload;
        },
        setTotal: (state, action) => {
            state.total = action.payload;
        }
    }
});
export const { setTipAmount, setTotal } = tipSlice.actions; //These are functions that return actions that can be dispatched.
export default tipSlice.reducer; // It's responsible for applying the changes based on the dispatched actions.