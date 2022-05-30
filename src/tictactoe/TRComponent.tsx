import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import TDComponent from "./TDComponent";


const TRComponent:FC<{row : number}> = ({ row }) => {
    const tableData = useSelector((state : RootState) => state.tictactoe.tableData)
    return (
        <tr>
            {Array(tableData[0].length).fill(null).map((elem, index) => <TDComponent row={row} col={index}/>)}
        </tr>
    )
}

export default TRComponent;

