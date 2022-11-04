import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

import MainPage from './Pages/MainPage/MainPage';
import MilltopLabs from './Pages/MilltopLabs/MilltopLabs';

const PageRoutes = () => (
        <Routes>
            <Route exact path="/Plutarcos/MilltopLabs" element={<MilltopLabs/>}/>
            <Route exact path="/Plutarcos" element={<MainPage/>}/>

            <Route exact path="/" element={<Navigate to ="/Plutarcos"/>}/>

        </Routes>
)

export default PageRoutes;