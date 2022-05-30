import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import TRComponent from "./TRComponent";

const TableComponent = () => {
    const tableData = useSelector((state : RootState) => state.tictactoe.tableData);

    return(
        <table>
            {Array(tableData.length).fill(null).map((elem, index) => <TRComponent row={index}/>)}
        </table>
    )
}


export default TableComponent
