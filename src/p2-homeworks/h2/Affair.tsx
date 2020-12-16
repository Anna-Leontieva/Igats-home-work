import React from "react";

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: (_id: number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {};// need to fix

    return (
        <div>
            // show some text

            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
