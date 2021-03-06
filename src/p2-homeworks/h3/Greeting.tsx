import React, { ChangeEvent } from "react";
import { isPropertySignature } from "typescript";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass; // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} />
            <button onClick={addUser} className={s.buttonHW3}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    );
}

export default Greeting;
