import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LogIn } from '../ui/pages/Auth/LogIn';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<LogIn/>} />
        </Routes>
    );
}

