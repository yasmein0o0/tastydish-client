import { configureStore } from "@reduxjs/toolkit";
import userSignup from "../redux/signup"
export const store = configureStore({
    reducer: {
        signup: userSignup
    }
})
