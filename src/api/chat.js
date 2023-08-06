import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from "./base";
import { saveReqest } from '../redux/slices/ChatSlice';



export const postMessage = createAsyncThunk(
    'chat',
    async (request, { rejectWithValue, dispatch }) => {
        try {
            console.log("request: ", request)
            const response = await BASE_URL.post('/chatbot/', request);
            console.log("response: ", response.data)
            // dispatch(saveReqest(response.data))

            return response.data


        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)
