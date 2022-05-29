import {createSlice} from "@reduxjs/toolkit";
import {throws} from "assert";

interface IState{
    start : boolean;
    row : number;
    col : number;
    tableData : string[][];
}

const initialState : IState = {
    start : false,
    row : 0,
    col : 0,
    tableData : [],
}

export const tictactoeSlice = createSlice({
    name:"tictactoe",
    initialState,
    reducers:{
        START_GAME : (state,action) => {
            console.log(action.payload);
            state.start = true;
            state.row = action.payload.row;
            state.col = action.payload.col;
            state.tableData = Array(state.row).fill(Array(state.col).fill(''));
        }
    },
});


export const { START_GAME } = tictactoeSlice.actions;
export default tictactoeSlice.reducer;
