import {createSlice} from "@reduxjs/toolkit";
import {throws} from "assert";

interface IState{
    start : boolean;
    turn : 'O' | 'X';
    tableData : string[][];
    winner : 'O' | 'X' | null;
}

const initialState : IState = {
    start : false,
    turn : 'O',
    tableData : [],
    winner : null,
}

export const tictactoeSlice = createSlice({
    name:"tictactoe",
    initialState,
    reducers:{
        START_GAME : (state,action) => {
            state.start = true;
            state.winner = null;
            state.tableData = Array(action.payload.row).fill(Array(action.payload.col).fill(null));
        },
        CLICK_TD : (state, action) => {
                if(state.tableData[action.payload.row][action.payload.col] !== null){
                    return;
                }
                state.tableData[action.payload.row][action.payload.col] = state.turn;
                state.turn = (state.turn === 'O' ? 'X' : 'O');
        },
        CHECK_WINNER : (state, action) => {
            let row = state.tableData.length;
            let col = state.tableData[0].length;
            let tableData = [...state.tableData];
            let winner:string|null = null;

            //가로줄 검사
            let oneLine = true;
            for(let i = 1; i < col-1; i ++){
                if(tableData[action.payload.row][i-1] !== tableData[action.payload.row][i]){
                    oneLine = false; break;
                }
            }

            if(oneLine){
                state.start = false;
                state.winner = (state.turn === 'O' ? 'X' : 'O');
                return;
            }



            //세로줄 검사
            oneLine = true;
            for(let i = 1; i < row-1; i ++){
                if(tableData[i-1][action.payload.col] !== tableData[i][action.payload.col]){
                    oneLine = false; break;
                }
            }
            if(oneLine){
                state.start = false;
                state.winner = (state.turn === 'O' ? 'X' : 'O');
                return;
            }

            //대각선 검사
            if(row !== col) return;
            let dxy_leftTop = [+1,+1]; let dxy_rightTop = [+1,-1];
            let left = true; let right = true;

            let leftTopElem = tableData[0][0]; let leftTop = [0,0];
            if(leftTopElem === null){left = false;}

            let rightTopElem = tableData[0][col-1]; let rightTop = [0, col-1];
            if(rightTopElem === null){right = false;}

            console.log(leftTopElem);
            console.log(left);

            for(let i = 0; i < row; i++){
                if(!left && !right) break;

                if(left){
                    leftTop[0] += dxy_leftTop[0]; leftTop[1] += dxy_leftTop[1];
                    if( tableData[leftTop[0]][leftTop[1]] === null){left = false; }
                    if(leftTopElem !== tableData[leftTop[0]][leftTop[1]]){left = false;}

                }

                if(right){
                    rightTop[0] += dxy_rightTop[0]; rightTop[1] += dxy_rightTop[1];
                    if( tableData[rightTop[0]][rightTop[1]] === null){right = false; }
                    if(leftTopElem !== tableData[rightTop[0]][rightTop[1]]){right = false;}
                }
            }

            if(left || right){
                state.start = false;
                state.winner = (state.turn === 'O' ? 'X' : 'O');
                return;
            }


        }
    },
});


export const { START_GAME, CLICK_TD, CHECK_WINNER } = tictactoeSlice.actions;
export default tictactoeSlice.reducer;
