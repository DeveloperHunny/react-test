import React, {FC, ReactComponentElement, ReactElement} from 'react';
import {Link} from "react-router-dom";
import Page from "./Page";

const ContentBox:FC<{path : string}> = ({path}) => {

    return(
        <div className={"contentBox"}>
            <Link to={"/" + path}>
                <h1> {path} </h1>
            </Link>
        </div>
    )
}




const MainPage = () => {
    return(

        <div className={"MainPage"}>
            <ContentBox path="Counter"/>
            <ContentBox path="Timer"/>
            <ContentBox path="TicTacToe"/>
            <ContentBox path="TestPage"/>
            <ContentBox path="None"/>
            <ContentBox path="None"/>
        </div>


    )
}

export default MainPage
