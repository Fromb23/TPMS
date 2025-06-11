import {  createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest(state) {
        state.loading = true;
        state.error = null;
        },
        loginSuccess(state, action) {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
        },
        loginFailure(state, action) {
        state.error = action.payload;
        state.loading = false;
        },
        logout(state) {
        state.user = null;
        state.isAuthenticated = false;
        },
    },
    });

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout
} = authSlice.actions;

export default authSlice.reducer;