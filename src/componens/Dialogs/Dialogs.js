import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import React from 'react';

const Dialogs = (props) => {
    let newMessageText = props.messagePage.newMessageText;
    let dialogsElements = props.messagePage.dialogsData.map(item => <Dialog name={item.name} id={item.id} />)
    let messageElements = props.messagePage.messagesData.map(item => <Message message={item.message} id={item.id} />)
    let onSendMessageClick = () => {
        props.addMessage();
    }

    let onChangeMessage = (e) => {
        let newMessage = e.target.value;
        props.updateNewMessageText(newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.containerForm}>
                <input className={s.form} onChange={onChangeMessage} value={newMessageText}/>
                <button className={s.btn} onClick={onSendMessageClick}>Отправить</button>
                </div>
            </div>
        </div> 
    )
}

export default Dialogs;