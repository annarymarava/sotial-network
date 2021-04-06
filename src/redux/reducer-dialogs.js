const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How' },
        { id: 3, message: 'yooo' },
      ],
      dialogsData: [
        { id: 1, name: 'Anna' },
        { id: 2, name: 'Zhenya' },
        { id: 3, name: 'Larisa' },
        { id: 4, name: 'Dasha' },
        { id: 5, name: 'Sergey' },
        { id: 6, name: 'Vladimir' },
      ],
      newMessageText: '',
}

const reducerDialogs = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: 
        return {
            ...state,
            newMessageText: action.textMessage,
          };
        case ADD_MESSAGE: 
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            };
            return {
              ...state,
              messagesData: [...state.messagesData, newMessage],
              newMessageText: '',
            };
        default:
            return state;
    }
}

export const updateNewMessageTextActionCreator =(textMessage) => {
  return {type: UPDATE_NEW_MESSAGE_TEXT, textMessage: textMessage}
}

export const addMessageActionCreator =() => {
  return {type: ADD_MESSAGE}
}


export default reducerDialogs;