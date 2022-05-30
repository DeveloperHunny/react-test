import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {CHECK_WINNER, CLICK_TD} from "./tictactoeSlice";


const TDComponent:FC<{ row : number, col : number}> = ({row, col}) => {

    const tableData = useSelector((state:RootState) => state.tictactoe.tableData);
    const dispatch = useDispatch();
    const handleOnClick = () => {
            dispatch(CLICK_TD({row, col}));
            dispatch(CHECK_WINNER({row, col}));
    }

    return (
        <td onClick={handleOnClick}>
            {tableData[row][col]}
        </td>
    )
}

export default TDComponent
