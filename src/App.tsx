import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import React from "react";
import Counter from "./redux/Counter";
import Timer from "./redux/Timer";
import MainPage from "./MainPage";
import './app.css'
import Page from "./Page";
import TicTacToe from "./tictactoe/TicTacToe";


const Header = () => {
    return(
        <div className={'Header'}>
            <Link to='/'>
                <h1> REACT TEST SITE </h1>
            </Link>

        </div>
    )
}

const Footer = () => {
    return(
        <div>
            <h1> REACT TEST </h1>
            <p> react test react test react test react test react test react test react test react test
                react test react test react test react test react test react test react test react test
                react test react test react test react test react test react test react test react test</p>
        </div>
    )
}


const App = () => {

    return(
        <BrowserRouter>
            <Header/>
            <hr/>
            <Routes>
                <Route path="/" element={<Page><MainPage/></Page>}/>
                <Route path="/Counter" element={<Page><Counter/></Page>}/>
                <Route path="/Timer" element={<Page><Timer/></Page>}/>
                <Route path="/TicTacToe" element={<Page><TicTacToe/></Page>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            <hr/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
