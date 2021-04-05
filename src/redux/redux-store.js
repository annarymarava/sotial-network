import { combineReducers, createStore } from "redux";
import reducerDialogs from "./reducer-dialogs";
import reducerProfile from "./reducer-profile";
import reducerSidebar from "./reducer-sidebar";
import reducerUsers from "./reducer-users";

let reducers = combineReducers({
  profilePage: reducerProfile,
  messagePage: reducerDialogs,
  sidebar: reducerSidebar,
  usersPage: reducerUsers,
})

let store = createStore(reducers);

export default store;