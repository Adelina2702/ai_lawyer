import { combineReducers, configureStore } from '@reduxjs/toolkit';
import RegisterSlice from '../slices/RegisterSlice';
import LoginSlice from '../slices/LoginSlice';



export const reducer = combineReducers({
    register: RegisterSlice,
    login: LoginSlice
})

export const store = configureStore({
    reducer
})
