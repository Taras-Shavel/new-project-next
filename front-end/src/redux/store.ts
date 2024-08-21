"use client"
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { dataReducers } from "./slices/data.slice";


const rootReducer = combineReducers({
    dataReducers
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}
