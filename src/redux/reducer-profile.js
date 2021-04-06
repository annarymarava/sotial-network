const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, message: 'Hi, how are you?', likesCount: '12' },
    { id: 2, message: 'It is my first post', likesCount: '6' },
    { id: 3, message: 'It is my second post', likesCount: '7' },
    { id: 4, message: 'hahahh', likesCount: '1' },
    { id: 5, message: 'kiss', likesCount: '25' },
    { id: 6, message: 'llolo', likesCount: '7' },
  ],
  newPostText: '',
};

const reducerProfile = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      let newPost = {
        id: 7,
        message: state.newPostText,
        likesCount: 0
      };
      return { 
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
       };
    case UPDATE_NEW_POST_TEXT: 
    return { 
        ...state,
        newPostText: action.text,
       };
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return { type: ADD_POST }
}

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, text: text }
}

export default reducerProfile;