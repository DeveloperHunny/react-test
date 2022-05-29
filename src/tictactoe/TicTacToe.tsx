import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {START_GAME} from "./tictactoeSlice";
import {RootState} from "../redux/store";

const SetGameComponent = () => {

    const dispatch = useDispatch();

    const [row, setRow] = useState(5);
    const [col, setCol] = useState(5);

    const handleOnSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(START_GAME({row : row, col : col}))
    }

    const handleOnChangeRow = (e : ChangeEvent<HTMLInputElement>) => {
        setRow(Number(e.target.value));
    }

    const handleOnChangeCol = (e : ChangeEvent<HTMLInputElement>) => {
        setCol(Number(e.target.value));
    }

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" value={row} onChange={handleOnChangeRow}/>
                <input type="text" value={col} onChange={handleOnChangeCol}/>
                <input type="submit" value="START"/>
            </form>
        </div>
    )
}



const TicTacToe = () => {

    const start = useSelector((state : RootState) => state.tictactoe.start);

    return(
        <>
            {!start && <SetGameComponent/>}
            {start && <Game/>}
        </>
    )
}

export default TicTacToe;
