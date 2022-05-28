import {ReactReduxContextValue, useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./counterSlice";

const Counter = () => {
    const count = useSelector((state : any) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <>
            <div>
                <button aria-label="Increment-Value" onClick={() => dispatch(increment())}>Increment</button>
                <span>{count}</span>
                <button aria-label="Decrement-Value" onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </>
    )
}

export default Counter;
