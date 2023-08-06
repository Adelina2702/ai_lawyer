import { BASE_URL } from "./base";
import { createAsyncThunk } from '@reduxjs/toolkit'


export const specialists = (data) => {
    return BASE_URL.get('users/', data);
};


export const getSpecialists = createAsyncThunk(
    'specialists',
    async (_, { rejectWithValue, }) => {
        try {
            const response = await BASE_URL.get('/users');
            return response.data
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)
