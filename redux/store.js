import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/slices/todoSlice"

export default configureStore({
    reducer:{
        todos: todoReducer
    }
})


// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./slices/todoSlice";
// import { combineReducers } from 'redux';
// import {
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';



// const persistConfig = {
//     key: 'todo',
//     storage,
// };

// const reducers = combineReducers({ todos: todoReducer });


// const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });