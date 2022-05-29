import {createSlice} from "@reduxjs/toolkit";

interface IState{
    value : number;
    timerId : number | null;
}

const initialState : IState = {
    value : 0,
    timerId : null,
}

export const timerSlice = createSlice({
    name : 'timer',
    initialState,
    reducers : {

        increment : state => {
            state.value += 1;
        },

        setId : (state,action) => {
            state.timerId = action.payload
        },

        stop : state => {
            if(state.timerId !== null){
                clearInterval(state.timerId);
            }
            state.timerId = null;
        },

        clear : state => {
            state.value = 0;
        }
    }
});

export const { increment, stop, clear, setId } = timerSlice.actions;
export default timerSlice.reducer;


