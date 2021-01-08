import React from "react";
import classes from './Message.module.css';

type MessageDataProps = {
    avatar: string
    name: string
    message: string
    time: number | string
}

function Message(props: MessageDataProps) {
    return (
        <div className={classes.wrapperMessageContent}>
            <div className={classes.avatarImg}><img src={props.avatar}></img></div>
            <div className={classes.container}>
                <div className={classes.arrow}>
                    <div className={classes.outer}></div>
                    <div className={classes.inner}></div>
                </div>
                <div className={classes.messageBody}>
                   <div className={classes.messageName}>{props.name}</div>
                    <div className={classes.messageContent}>{props.message}</div>
                    <div className={classes.messageTime}>{props.time}</div>
                </div>
            </div>
        </div>
    );
}

export default Message;
