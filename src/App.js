import './App.css';
import Header from './componens/Header/Header';
import Navbar from './componens/Navbar/Navbar';
import Profile from './componens/Profile/Profile';
import DialogsContainer from './componens/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './componens/News/News';
import Music from './componens/Music/Music';
import Settings from './componens/Settings/Settings';
import UsersContainer from './componens/Users/UsersContainer';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={() => <DialogsContainer/>} />
          <Route path='/profile'
            render={() => <Profile/>} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
