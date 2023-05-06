import  { configureStore } from '@reduxjs/toolkit'
import InfospReducer from "./InfospSlice";
import LoginReducer from "./LoginSlice";
import UserReducer from './UserSlice'
import EmploiArticlesReducer from "./EmploiArticlesSlice";

export const store = configureStore ( {
    reducer : {
        Infospersonel : InfospReducer,
        UserLogin : LoginReducer,
        UserData : UserReducer,
        EmploiArticles : EmploiArticlesReducer,
    }
})