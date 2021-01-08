import React, {useState} from "react";
import { isPropertySignature } from "typescript";
import { v1 } from "uuid";
import GreetingContainer from "./GreetingContainer";
import s from './HW3.module.css';

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<string>>([]); // need to fix any

    const addUserCallback = (name: string) => { 
        setUsers([name,...users]);
       // need to fix 
    }

    return (
        <div className={s.WrapperHW3}>
            <hr/>
            <div className={s.title}>
            homeworks 3
            </div>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
