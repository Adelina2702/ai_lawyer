import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../ui/pages/Register/SignIn';
import LogIn from '../ui/pages/Auth/LogIn';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/login' element={<LogIn/>} />
        </Routes>
    );
}

