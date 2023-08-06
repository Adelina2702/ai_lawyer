import { combineReducers, configureStore } from '@reduxjs/toolkit';
import RegisterSlice from '../slices/RegisterSlice';
import ChatSlice from '../slices/ChatSlice';
import SpecialistsSlice from '../slices/SpecialistsSlice';

import LoginSlice from '../slices/LoginSlice';



export const reducer = combineReducers({
    register: RegisterSlice,
    chat: ChatSlice,
    specialists: SpecialistsSlice,
    login: LoginSlice
})

export const store = configureStore({
    reducer
})
