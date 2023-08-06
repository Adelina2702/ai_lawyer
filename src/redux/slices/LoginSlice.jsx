import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/AuthApi";
import { setCookie } from "../../ui/utils/cookie";
import { getApiErrorMessage } from "../../ui/utils/utils";

const initialState = {
    password: '', 
    email: '',
    loading: false,
    error: '',
  };

  export const loginThunk = createAsyncThunk(
    'person/auth',
    async (person, { rejectWithValue }) => {
      try {
        console.log("user2", person)
        const response = await login(person);
        console.warn(response.data.resultCode === 'SUCCESS');
  
        if (response.data.resultCode === 'SUCCESS') {
          setCookie(
            'token',
            response.data.result.authenticationResponse.jwtToken,
            4
          );
          setCookie(
            'refresh',
            response.data.result.authenticationResponse.refreshToken,
            4
          );
          return response.data.result;
        }
        return rejectWithValue(response.data.details);
      } catch (err) {
        return rejectWithValue(getApiErrorMessage(err));
      }
    }
  );


  const loginSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
      setAccessToken: (state, action) => {
        state.accessToken = action.payload;
      },
      logout: (state) => {
        return {
          ...state,
          accessToken: '',
          refreshToken: '',
          email: '',
          password: '',
          loading: false,
          error: '',
        };
      },
    },
    extraReducers(builder) {
      builder.addCase(loginThunk.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.accessToken = payload.authenticationResponse.jwtToken;
        state.password = payload.password;
        state.email = payload.email;
      });
    },
  });
  
  export const { setAccessToken, logout } = loginSlice.actions;
  
  export default loginSlice.reducer;