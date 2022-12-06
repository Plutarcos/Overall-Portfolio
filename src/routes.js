import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

import MainPage from './Pages/MainPage/MainPage';
import Chatbot from './Pages/Chat/GamePage';
import GamePage from './Pages/Chat/GamePage';

const PageRoutes = () => (
        <Routes>
            <Route exact path="/Overall-Portfolio/Chat" element={<Chatbot/>}/>
            <Route exact path="/Overall-Portfolio/GamePage" element={<GamePage/>}/>
            <Route exact path="/Overall-Portfolio" element={<MainPage/>}/>

            <Route exact path="/" element={<Navigate to ="/Overall-Portfolio"/>}/>

        </Routes>
)

export default PageRoutes;