import React, {useState} from "react";
import Switch from "./components/Switch";

const initialState = {
    fat : false,
    bald : false,
    poor : false,
};

const App = () => {
    const [switches, setSwitches] = useState(initialState);
    
    const toggleSwitch = id =>{
        const currentState = switches[id];
        if (currentState === undefined) return;

        const activeSwitches = Object.values(switches).filter(values => values).length;

        if(activeSwitches === 2){
            setSwitches({...initialState, [id]: !currentState});
        }else{
            setSwitches({...switches,[id]: !currentState});
        }

        
    };

    return (
        <div className="container">
            <h1>Fat, Bald or Poor</h1>
            <h2>Choose only two options</h2>
            <Switch onClick ={toggleSwitch} id="fat" active={switches['fat']} label="Fat"/>
            <Switch onClick ={toggleSwitch} id="bald" active={switches['bald']} label="Bald"/>
            <Switch onClick ={toggleSwitch} id="poor" active={switches['poor']} label="Poor"/>
        </div>
    );
}

export default App;