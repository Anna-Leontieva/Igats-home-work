import React from "react";
import Message from './Message'
const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

function HW1() {
    let messageData = {
        avatar: "https://i.pinimg.com/originals/61/37/a6/6137a6917dac9f20b563b04bbbda910c.jpg",
        name: "Artem",
        message: "Npm start нажимал?",
        time: 12.15
    }
    return (
        <div>
            <hr/>
            homeworks 1
           < Message avatar={messageData.avatar} name={messageData.name} message={messageData.message} time={messageData.time}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
