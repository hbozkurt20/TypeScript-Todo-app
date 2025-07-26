import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//! notes



//! reducer nedir
//  reducer, store’un state’i nasıl yöneteceğini tanımlar.
// Her action geldiğinde, reducer çağrılır.

// Yeni state’i döndürür.

// store → tüm global state’i saklar.

// reducer → gelen action’a göre statei nasıl değiştireceğini belirler.

// configureStore → reducer’ları birleştirip store’u oluşturur.

// İstersen useSelector, dispatch, ya da birden fazla reducer nasıl eklenir konusuna geçebiliriz.