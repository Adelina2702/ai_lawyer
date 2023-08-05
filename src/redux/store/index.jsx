import { combineReducers, configureStore } from '@reduxjs/toolkit';
import RegisterSlice from '../slices/RegisterSlice';



export const reducer = combineReducers({
    register: RegisterSlice
})

export const store = configureStore({
    reducer
})
