import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducer-dialogs';
import Dialogs from './Dialogs';



const mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage, 
    }
}

const mapDispatchToProps = (dispatch) => {
        return {
            updateNewMessageText: (newMessage) => {
                dispatch(updateNewMessageTextActionCreator(newMessage))
            },
            addMessage: () => {
                dispatch(addMessageActionCreator())
            },
        
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;