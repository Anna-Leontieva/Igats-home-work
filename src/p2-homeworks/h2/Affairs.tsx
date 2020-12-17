import React from "react";
import Affair from "./Affair";
import {AffairType} from "./HW2";

type AffairsPropsType = { // need to fix any
    data:Array<AffairType>
    setFilter: any
    deleteAffairCallback:(_id: number)=>void
    filteredAffairs:(FilterType:Array<AffairType>)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair 
            key={a._id} 
            affair={a}
            deleteAffairCallback={()=>{ props.deleteAffairCallback(a._id)}}
        />
    ))

    const setAll = () => {}; // need to fix
    const setHigh = () => {};
    const setMiddle = () => {};
    const setLow = () => {};

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    );
}

export default Affairs;
