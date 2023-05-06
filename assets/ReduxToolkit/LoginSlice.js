import { createSlice} from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name : 'login',
    initialState : {
        isLogged : true,
        userLog : ''
    },
    reducers : {
        setLogin : (state, action) => {
            state.isLogged = action.payload
        },
        setUser : (state, action)=>{
            state.userLog = action.payload
        }
    }
})

export const {setLogin, setUser} = LoginSlice.actions

export default LoginSlice.reducer