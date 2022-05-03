import { configureStore } from "@reduxjs/toolkit";
import bookmarks from "./slices/bookmarks";

export default configureStore({
    reducer:{
        bookmarks
    }
})