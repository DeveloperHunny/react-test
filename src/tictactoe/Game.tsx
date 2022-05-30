import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import TableComponent from "./TableComponent";

const Game = () => {

    const turn = useSelector((state : RootState) => state.tictactoe.turn);

    return(
        <>
            <h1 style={{ marginBottom:60, fontSize:60 }}>TURN : {turn}</h1>
            <TableComponent/>
        </>
    )
}

export default Game;
