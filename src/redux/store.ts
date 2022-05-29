import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import timerReducer from './timerSlice'
import tictactoeReducer from '../tictactoe/tictactoeSlice'

export const store = configureStore({
    reducer: {
        counter : counterReducer,
        timer : timerReducer,
        tictactoe : tictactoeReducer,
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>

