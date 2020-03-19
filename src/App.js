import React from 'react';
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header/>
        <Nav/>
        <div className="app_wrapper_content">
          <Route path='/profile' render={ () => <Profile posts={props.posts}/>} />
          <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
          <Route path='/news' render={ () => <News />}/>
          <Route path='/music' render={ () => <Music />}/>
          <Route path='/settings' render={ () => <Settings />}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
