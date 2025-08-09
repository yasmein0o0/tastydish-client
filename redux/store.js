import { configureStore } from "@reduxjs/toolkit";
import userSignup from "../redux/signup"
import userlogin from "../redux/login"
export const store = configureStore({
    reducer: {
        signup: userSignup,
        login: userlogin
    }
})
