import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

import MainPage from './Pages/MainPage/MainPage';
import MilltopLabs from './Pages/MilltopLabs/MilltopLabs';

const PageRoutes = () => (
        <Routes>
            <Route exact path="/Overall-Portfolio/MilltopLabs" element={<MilltopLabs/>}/>
            <Route exact path="/Overall-Portfolio" element={<MainPage/>}/>

            <Route exact path="/" element={<Navigate to ="/Overall-Portfolio"/>}/>

        </Routes>
)

export default PageRoutes;