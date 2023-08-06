import { setCookie } from '../../ui/utils/cookie';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { register } from '../../api/AuthApi';
import { getApiErrorMessage } from '../../ui/utils/utils';
import Swal from 'sweetalert';

const initialState = {
  username: '',
  password: '',
  email: '',
  loading: false,
  error: '',
  statusRegist: ''
};

export const registerThunk = createAsyncThunk(
  'user/auth',
  async ({ user, navigate }, { rejectWithValue }) => {

    try {

      const response = await register(user);

      if (response.status === 200 || response.status === 201) {
        Swal({ icon: "success", title: 'Регистрация прошла успешно', dangerMode: true })
        navigate('/login')
      }




      console.warn(response.data.resultCode === 'SUCCESS');

      if (response.data.resultCode === 'SUCCESS') {
        setCookie(
          'token',
          response.data.result.authenticationResponse.jwtToken,
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


const registerSlice = createSlice({
  name: 'user',
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
        username: '',
        email: '',
        password: '',
        loading: false,
        error: '',

      };
    },
  },
  extraReducers(builder) {
    builder.addCase(registerThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.accessToken = payload.authenticationResponse.jwtToken;
      state.password = payload.password;
      state.email = payload.email;
      state.username = payload.username;
      state.statusRegist = 'regists good'
    });
  },
});

export const { setAccessToken, logout } = registerSlice.actions;

export default registerSlice.reducer;
