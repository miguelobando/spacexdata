import { createSlice } from '@reduxjs/toolkit'

export const bookmarkSlice = createSlice({
    name:"bookmark",
    initialState:{
       bookmarks: []
    },
    reducers: {
        addBookmark: (state,action) =>{
            state.bookmarks.push(action.payload)             
        }
    }
})

export const { addBookmark } = bookmarkSlice.actions

export default bookmarkSlice.reducer
