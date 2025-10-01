import { configureStore } from "@reduxjs/toolkit";
import { injectStore } from "../utils/api";
import userSignup from "./signup"
import userlogin from "./login"
import home from "./home"
import contact from "./contatct"
import recipe from "./recipe"
import autocomplete from "./autocomplete"
import search from "./search"
import accessToken from "./refresh"
import favourites from "./favourites"
import logout from "./logout"
import deleteAccount from "./delete"
export const store = configureStore({
    reducer: {
        signup: userSignup,
        login: userlogin,
        contact: contact,
        home: home,
        recipe: recipe,
        autocomplete: autocomplete,
        search: search,
        accessToken: accessToken,
        favourites: favourites,
        logout: logout,
        deleteAccount: deleteAccount
    }
})

injectStore(store); 