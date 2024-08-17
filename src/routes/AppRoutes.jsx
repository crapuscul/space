import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage'; 
import DestinationPage from '../pages/DestinationPage/DestinationPage';
import CrewPage from '../pages/CrewPage/CrewPage';
import TechnologyPage from '../pages/TechnologyPage/TechnologyPage';



export default function AppRoutes(){
    return (
        <>
        <Router>
            <Routes>
                <Route  path="/" element={<HomePage/>}/>
                <Route  path="/DestinationPage" element={<DestinationPage/>}/>
                <Route  path="/CrewPage" element={<CrewPage/>}/>
                <Route  path="/TechnologyPage" element={<TechnologyPage/>}/>
            </Routes>
        </Router>
        </>
    )
}