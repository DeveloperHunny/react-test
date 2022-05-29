import styles from "./counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import {clear, stop, increment, setId} from "./timerSlice";

const Timer = () => {
    const value = useSelector((state : RootState) => state.timer.value);
    const timerId = useSelector((state : RootState) => state.timer.timerId);
    const dispatch = useDispatch();

    const onClickStart = () => {
        console.log("click");
        let id = setInterval(() => {
            dispatch(increment());
        }, 1000);
        dispatch(setId(id));
    }

    return(
        <>
            <h1>{value}</h1>
            <div>
                <button className={styles.btnStyle}  onClick={() => {onClickStart()}}>Start</button>
                <button className={styles.btnStyle} style={{ marginLeft: 10 }} onClick={() => dispatch(stop())}>Stop</button>
                <button className={styles.btnStyle} style={{ marginLeft: 10 }} onClick={() => dispatch(clear())}>Clear</button>
            </div>
        </>
    )
}

export default Timer;
