import { createSlice } from '@reduxjs/toolkit'
import { postMessage } from '../../api/chat';





const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        message: [],
        status: {
            postMessageStatus: null,
        },
        error: {
            postMessageErrors: null,
        }
    },

    extraReducers: {
        [postMessage.pending]: (state, action) => {
            state.status.postMessageStatus = 'Loading message';
            state.error.postMessageErrors = null
        },

        [postMessage.fulfilled]: (state, action) => {


            state.status.postMessageStatus = 'Geted message';
            state.message.push(action.payload)
        },

        [postMessage.rejected]: (state, action) => {

            state.status.postMessageStatus = 'Rejected geted message';
            state.error.postMessageErrors = action.payload
        },
    },
    reducers: {
        saveReqest: (state, action) => {

            state.message.push(action.payload)

        },
    },
})


export const {
    saveReqest
} = chatSlice.actions;


export default chatSlice.reducer