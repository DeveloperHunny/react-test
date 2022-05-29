import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import React from "react";
import Counter from "./redux/Counter";
import Timer from "./redux/Timer";
import MainPage from "./MainPage";
import './app.css'
import Page from "./Page";


const Header = () => {
    return(
        <div className={'Header'}>
            <Link to='/'>
                <h1> SHOPING MALL</h1>
            </Link>

        </div>
    )
}

const Footer = () => {
    return(
        <div>
            <h1> LOGO IMAGE </h1>
            <p>회사명: (주)너와나의농촌 / 주소: 서울시 관악구 남부순환로 1427, 3층
                E-mail: youandifarm@naver.com / tel_070-7574-4871 / fax_0504-570-4871
                COPYRIGHT(C) 2015 BY (주)너와나의농촌. ALL RIGHTS RESERVED.</p>
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
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            <hr/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
