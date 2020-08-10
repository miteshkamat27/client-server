import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiResponse: ''
    };    
    this.connecToServer = this.connecToServer.bind(this); 
  }

  callAPI() {
    fetch("http://localhost:9000/api/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }
  componentDidMount() {    
    this.connecToServer();  
    this.callAPI();
  }

  connecToServer() {    
    fetch('/');  
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p className="App-intro">{this.state.apiResponse}</p>
          <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/list' component={List}/>
            </Switch>
          </div>
        </header>
      </div>
    );
  }
}

export default App;