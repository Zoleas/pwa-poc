import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {working: false}

  registerWorked = () => {
    console.log('wouhou')
    this.setState({working: true})
  }

  onButtonClick = () => {
    this.setState({random: Math.random()})
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>
              Service worker is {'serviceWorker' in navigator ? 'present!' : 'not present :('}
            </p>
            <p>
              Offline mode is {this.state.working ? 'working!' : 'not working :('}
            </p>
            <a
                className="App-link"
                onClick={this.onButtonClick}
            >
              Rerender
            </a>
            <p>{this.state.random}</p>
          </header>
        </div>
    );
  }
}

export default App;
