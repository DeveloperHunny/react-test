import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import timerReducer from './timerSlice'
import exp from "constants";

export const store = configureStore({
    reducer: {
        counter : counterReducer,
        timer : timerReducer,
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>

