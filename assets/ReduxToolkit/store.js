import  { configureStore } from '@reduxjs/toolkit'
import InfospReducer from "./InfospSlice";
import LoginReducer from "./LoginSlice";

export const store = configureStore ( {
    reducer : {
        Infospersonel : InfospReducer,
        UserLogin : LoginReducer
    }
})