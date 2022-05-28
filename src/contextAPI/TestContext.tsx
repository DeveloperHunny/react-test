import React, {
    ChangeEvent, createContext, FC, useContext, useReducer,
    useState, Dispatch

} from 'react';
import './testContext.css';
import Box1 from "./Box";


export const TestContextAPI = createContext<{rootValue : string, dispatch: Dispatch<ReducerAction>, time: number, timerId: number|null}>({
    rootValue : '',
    dispatch : () => {},
    time : 0,
    timerId : 0,
});

interface IState{
    rootValue : string;
    box1Value : string;
    box2Value : string;
    box3Value : string;
    time : number,
    timerId : number | null,
}

export const CHANGE_ROOT_VALUE = 'CHANGE_ROOT_VALUE';
export const SET_TIMERID = 'SET_TIMERID';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';
export const CLEAR_TIMERID = 'CLEAR_TIMERID';

interface CLEAR_TIMERID_ACTION{
    type: typeof CLEAR_TIMERID,
}

interface SET_TIMERID_ACTION{
    type: typeof SET_TIMERID,
    timerId : number,
}

interface CHANGE_ROOT_ACTION{
    type: typeof CHANGE_ROOT_VALUE,
    text : string,
}

interface INCREMENT_TIMER_ACTION{
    type: typeof INCREMENT_TIMER,
}

type ReducerAction = CHANGE_ROOT_ACTION | SET_TIMERID_ACTION | INCREMENT_TIMER_ACTION | CLEAR_TIMERID_ACTION

const reducer = (state : IState , action : ReducerAction) => {
    switch (action.type){
        case CHANGE_ROOT_VALUE:
            return {
                ...state,
                rootValue : action.text,
            }
        case INCREMENT_TIMER:
            console.log(state.time);
            return {
                ...state,
                time : state.time + 1,
            }
        case SET_TIMERID:
            return{
                ...state,
                timerId : action.timerId
            }
        case CLEAR_TIMERID:
            return{
                ...state,
                timerId : null,
            }
        default:
            return state;
    }

}

const initialState : IState = {
    rootValue : '',
    box1Value : '',
    box2Value : '',
    box3Value : '',
    time : 0,
    timerId : 0,
}

const TestContext = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const contextValue = { rootValue : state.rootValue, dispatch, time : state.time, timerId : state.timerId}

    const handleOnChange = (e : ChangeEvent<HTMLInputElement>) => {
        dispatch({type : CHANGE_ROOT_VALUE, text : e.target.value});
    }

    return (
        <TestContextAPI.Provider value={contextValue}>
            <div className={"box"}>
                <input className={"inputStyle"} onChange={handleOnChange} value={state.rootValue}/>
                <div style={{ display: "flex"}}>
                    <Box1 color={'red'}/>
                    <Box1 color="blue"/>
                </div>



            </div>
        </TestContextAPI.Provider>

    );
}

export default TestContext;
