import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers : {
        increment:(state) => {
            state.value += 1;
        },
        decrement:(state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload;
        }
    }
})
export const incrementAsync = (amount) => (disapatch) => {
    setTimeout(() => {
        disapatch(incrementByAmount(amount));
    },1000)
}
export const decrementAsync = (amount) => (disapatch) => {
    setTimeout(() => {
        disapatch(decrementByAmount(amount));
    },1000)
}


export const { 
    increment, 
    decrement, 
    incrementByAmount,
    decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;