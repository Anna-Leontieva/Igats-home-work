import React from "react";

type AffairPropsType = {
    affair: string 
    deleteAffairCallback:(_id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {props.deleteAffairCallback(Affair.length)};// need to fix

    return (
        <div>
            // show some text
            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
