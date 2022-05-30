import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {START_GAME} from "./tictactoeSlice";
import {RootState} from "../redux/store";
import Game from "./Game";
import styles from './tictactoe.module.css'

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
        <div style={{ marginTop : 30}}>
            <form onSubmit={handleOnSubmit} className={styles.formStyle}>
                <label  className={styles.labelStyle}> ROW
                    <input className={styles.inputStyle} type="text" value={row} onChange={handleOnChangeRow}/>
                </label>
                <label className={styles.labelStyle}> COL
                    <input className={styles.inputStyle} type="text" value={col} onChange={handleOnChangeCol}/>
                </label>

                <input className={styles.btnStyle} type="submit" value="START"/>
            </form>
        </div>
    )
}



const TicTacToe = () => {

    const start = useSelector((state : RootState) => state.tictactoe.start);
    const winner = useSelector((state : RootState) => state.tictactoe.winner);
    return(
        <div style={{ display: "flex", justifyContent: "center", flexDirection:"column",}}>
            {winner && <h1>{winner}가 승리했습니다!</h1>}
            {!start && <SetGameComponent/>}
            {start && <Game/>}
        </div>
    )
}

export default TicTacToe;
