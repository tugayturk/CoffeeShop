import { configureStore } from '@reduxjs/toolkit';
import coffeeReducer from "./coffeeSlice"
export const store = configureStore({
    reducer:{
        coffee:coffeeReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch