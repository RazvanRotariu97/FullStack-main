import {configureStore} from "@reduxjs/toolkit";
import booksReducer from "../reducers/booksReducer";

const store = configureStore(
    {
        reducer:booksReducer
    }
)
export default store