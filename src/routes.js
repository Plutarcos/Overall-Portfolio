import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MainPage from './Pages/MainPage/MainPage';
import MilltopLabs from './Pages/MilltopLabs/MilltopLabs';

const PageRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/MilltopLabs" element={<MilltopLabs/>}/>
        </Routes>
    </Router>
)

export default PageRoutes;