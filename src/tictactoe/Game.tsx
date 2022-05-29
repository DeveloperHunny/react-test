import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

const Game = () => {
    const row = useSelector((state : RootState) => state.tictactoe.row);
    const col = useSelector((state : RootState) => state.tictactoe.col);

    return(
        <table>
            {Array(row).fill(null).map((elem, index) => {

            })}
        </table>
    )
}


export default Game
