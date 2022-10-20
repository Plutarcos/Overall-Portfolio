import React from 'react';
import { Routes, Route} from 'react-router-dom';

import MainPage from './Pages/MainPage/MainPage';
import MilltopLabs from './Pages/MilltopLabs/MilltopLabs';

const PageRoutes = () => (
        <Routes>
            <Route exact path="/MilltopLabs" element={<MilltopLabs/>}/>
            <Route exact path="/" element={<MainPage/>}/>

        </Routes>
)

export default PageRoutes;