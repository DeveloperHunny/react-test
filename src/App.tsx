import React, {
    ChangeEvent, createContext, FC, useContext,
    useState

} from 'react';
import './App.css';

const Box1:FC<{color:string}> = ({color}) => {

    return(
        <div className={"box"} style={{ flex:1, borderColor:color }}>
            <h2>BOX1</h2>
            <Box2 color={color} />
        </div>
    )
}

const Box2:FC<{ color: string }> = ({color}) => {
    return(
        <div className={"box"} style={{borderColor:color}}>
            <h2>BOX2</h2>
            <Box3 color={color} />
        </div>
    )
}

const Box3:FC<{ color: string }> = ({color}) => {
    return(
        <div className={"box"} style={{borderColor:color}}>
            <h2>BOX3</h2>
            <Box4 color={color} />
        </div>
    )
}

const Box4:FC<{ color: string }> = ({color}) => {

    const {value} = useContext(TestContext);
    return(
        <div className={"box"} style={{borderColor:color}}>
            <h2>BOX4</h2>
            <h4>{value}</h4>
        </div>
    )
}

const TestContext = createContext({
    value : "",
})

function App() {

    const [value, setValue] = useState("ROOT VALUE");

    const contextValue = { value : value }

    const handleOnChange = (e : ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

  return (
      <TestContext.Provider value={contextValue}>
          <div className={"box"}>
              <input className={"inputStyle"} onChange={handleOnChange} value={value}/>
              <div style={{ display: "flex"}}>
                  <Box1 color={'red'}/>
                  <Box1 color="blue"/>
              </div>



          </div>
      </TestContext.Provider>

  );
}

export default App;
