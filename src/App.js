import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LANDINGPAGE from './components/pages/LandingPage/LandingPage';
import REGISTERPAGE from './components/pages/RegisterPage/RegisterPage';
import LOGINPAGE from './components/pages/LoginPage/LoginPage';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <BrowserRouter>
        <div id="app" >
          <Switch>
            <Route exact path='/' render={(props) => (<LANDINGPAGE {...props} isAuthed={true} />)} />
            <Route path='/register/:usertype' render={(props) => (<REGISTERPAGE {...props} isAuthed={true} />)} />
            <Route path='/login/:usertype' render={(props) => (<LOGINPAGE {...props} isAuthed={true} />)} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

