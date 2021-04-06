import reducerDialogs from "./reducer-dialogs";
import reducerProfile from "./reducer-profile";
import reducerSidebar from "./reducer-sidebar";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: '12' },
        { id: 2, message: 'It is my first post', likesCount: '6' },
        { id: 3, message: 'It is my second post', likesCount: '7' },
        { id: 4, message: 'hahahh', likesCount: '1' },
        { id: 5, message: 'kiss', likesCount: '25' },
        { id: 6, message: 'llolo', likesCount: '7' },
      ],
      newPostText: '',
    },
    messagePage: {
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
    },
    sidebar: {
      sectionFriends: [
        { id: 1, name: 'Anna', photo: 'https://i.mycdn.me/i?r=AzEOxUXG5QgodWC3x6hM10Ckx0BZLGOfgD6nXhJoLZbA4MAmq-mVtRg1TeCwydjhl-Q&fn=sqr_288' },
        { id: 2, name: 'Zhenya', photo: 'https://whatsism.com/uploads/posts/2018-07/1530546118_t2icojrry7o.jpg' },
        { id: 3, name: 'Larisa', photo: 'https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg' },
      ],
    },
  },
  _rerenderEntireTree() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = reducerProfile(this._state.profilePage, action);
    this._state.messagePage = reducerDialogs( this._state.messagePage, action);
    this._state.sidebar = reducerSidebar(this._state.sidebar, action);
    this._rerenderEntireTree(this._state);
  },
};


export default store;
