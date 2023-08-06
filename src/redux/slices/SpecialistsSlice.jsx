import { createSlice } from '@reduxjs/toolkit'
import { getSpecialists } from '../../api/specialists';



const specialistsSlice = createSlice({
    name: 'specialists',
    initialState: {

        specialists: [],
        allspecialists: [],
        status: {
            specialistsStatus: null,
        },
        error: {
            specialistsErrors: null,
        }
    },

    extraReducers: {
        [getSpecialists.pending]: (state, action) => {
            state.status.specialistsStatus = 'Loading specialists';
            state.error.specialistsErrors = null
        },

        [getSpecialists.fulfilled]: (state, action) => {
            console.log("action.payload: ", action.payload)
            state.status.specialistsStatus = 'Geted specialists';
            state.specialists = action.payload
            state.allspecialists = action.payload
        },


        [getSpecialists.rejected]: (state, action) => {
            state.status.specialistsStatus = 'Rejected geted specialists';
            state.error.specialistsErrors = action.payload
        },
    },
    reducers: {
        filterSpecialization: (state, action) => {

            let name = '';

            switch (action.payload) {

                case 'Уголовный кодекс':
                    name = 'ugolovnyi';
                    break;
                case 'Семейный кодекс':
                    name = 'semeinyi';
                    break;
                case 'Налоговый кодекс':
                    name = 'nalogovyi';
                    break;
                case 'Гражданский кодекс':
                    name = 'grajdanskyi';
                    break;
                case 'Трудовой кодекс':
                    name = 'trudovoyi';
                    break;
                case 'Бюджетный кодекс':
                    name = 'budjetnyi';
                    break;

                default:
                    break;
            }

            if (action.payload === 'Все') {
                state.specialists = state.allspecialists
            }
            else {
                state.specialists = state.allspecialists.filter(
                    specialist => specialist.specialization === name
                );
            }

        }



    },
    // },

})


export const {
    filterSpecialization
} = specialistsSlice.actions;
export default specialistsSlice.reducer