import {ReactReduxContextValue, useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./counterSlice";
import styles from './counter.module.css'

const Counter = () => {
    const count = useSelector((state : any) => state.counter.value);
    const dispatch = useDispatch();

    return(

        <>
            <h1>{count}</h1>
            <div>
                <button className={styles.btnStyle}  onClick={() => dispatch(increment())}>Increment</button>
                <button className={styles.btnStyle} style={{ marginLeft: 10 }} onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </>

    )
}



export default Counter;
