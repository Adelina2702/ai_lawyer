import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from '../ui/pages/Home/Home';
import { SignIn } from '../ui/pages/Register/SignIn';
import LogIn from '../ui/pages/Auth/LogIn';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<SignIn/>} />
            <Route path='/login' element={<LogIn/>} />
        </Routes>
    );
}

