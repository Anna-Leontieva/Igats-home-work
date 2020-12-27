import React from "react";
import { AffairType, filterAffairs } from "./HW2";

 type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback?:(_id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {props.affair._id};// need to fix

    return (
        <div>
            {props.affair.name}
            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
