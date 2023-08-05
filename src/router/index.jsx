import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from '../ui/pages/Home/Home';
import { SignIn } from '../ui/pages/Register/SignIn';
import LogIn from '../ui/pages/Auth/LogIn';
import Chat from '../ui/components/Chat/Chat';
import Specialists from '../ui/pages/Specialist/Specialists';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/register' element={<SignIn/>} />
            <Route path='/login' element={<LogIn/>} />
            <Route path='/specialists' element={<Specialists/>} />
        </Routes>
    );
}

