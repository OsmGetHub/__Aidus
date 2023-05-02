import {createSlice} from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name : 'login',
    initialState : {
        isLogged : true
    },
    reducers : {
        setLogin : (state, action) => {
            state.isLogged = action.payload
        }
    }
})

export const {setLogin} = LoginSlice.actions

export default LoginSlice.reducer