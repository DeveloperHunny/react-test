import React, {ChangeEvent, FC, FormEvent, useContext, useState} from "react";
import {CHANGE_ROOT_VALUE, CLEAR_TIMERID, INCREMENT_TIMER, SET_TIMERID, TestContextAPI} from "./TestContext";

const Box1:FC<{color:string}> = ({color}) => {

    return(
        <div className={"box"} style={{ flex:1, borderColor:color }}>
            <h2>BOX1</h2>
            <Box2 color={color} />
        </div>
    )
}

const Box2:FC<{ color: string }> = ({color}) => {

    const {time} = useContext(TestContextAPI);

    return(
        <div className={"box"} style={{borderColor:color}}>
            <h2>BOX2</h2>
            <h2>{time}</h2>
            <Box3 color={color} />
        </div>
    )
}

const Box3:FC<{ color: string }> = ({color}) => {

    const { time, timerId, dispatch } = useContext(TestContextAPI);

    const onStartTimer = () => {
        let id = setInterval(() => {
            dispatch({type : INCREMENT_TIMER});
        }, 1000);
        dispatch({type : SET_TIMERID, timerId:Number(id) });
    }

    const onStopTimer = () => {
        clearInterval(timerId!);
        dispatch({type: CLEAR_TIMERID});
    }

    return(
        <div className={"box"} style={{borderColor:color}}>
            <h2>BOX3</h2>
            <Box4 color={color} />
            <button onClick={onStartTimer}>Start Timer</button>
            <button onClick={onStopTimer}>Stop Timer</button>
        </div>
    )
}

const Box4:FC<{ color: string }> = ({color}) => {

    const {rootValue, dispatch} = useContext(TestContextAPI);
    const [ value, setValue ] = useState(rootValue);

    const handleOnChange = (e : ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleOnSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type : CHANGE_ROOT_VALUE, text : value});
    }

    return(
        <div className={"box"} style={{borderColor:color}}>
            <h2>BOX4</h2>
            <h4>rootValue : {rootValue}</h4>
            <form onSubmit={handleOnSubmit}>
                <input type="text" onChange={handleOnChange} placeholder="root Value 바꿀 값 입력" value={value}/>
                <input type='submit' value='CHANGE ROOT VALUE'/>
            </form>
        </div>
    )
}

export default Box1
