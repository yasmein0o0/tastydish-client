import { configureStore } from "@reduxjs/toolkit";
import userSignup from "./signup"
import userlogin from "./login"
import home from "./home"
import contact from "./contatct"
export const store = configureStore({
    reducer: {
        signup: userSignup,
        login: userlogin,
        contact: contact,
        home: home,
    }
})
