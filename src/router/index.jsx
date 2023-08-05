import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LogIn } from '../ui/pages/Auth/LogIn';
import Home from '../ui/pages/Home/Home';

export const Router = () => {
    return (
        <Routes>
            {/* <Route path='/' element={<LogIn />} /> */}
            <Route path='/' element={<Home />} />
        </Routes>
    );
}

