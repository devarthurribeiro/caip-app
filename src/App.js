import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import logo from './logo.webp'
import Home from './Home'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {main: "#307938"},
    secondary: { main: '#fbae3e'}
  },
});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logado: false
    }
  }

  handleClick = (event, value) => {
    this.setState({ logado: !this.state.logado });
  };
  
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {
          !this.state.logado ?
          (
            <div className="App">
              <header className="App-header">
                <img src={logo} alt="logo"/>
                <br/>
                <Button onClick={this.handleClick} variant="contained" color="primary">
                  Entrar com sua conta Goole
                </Button>
              </header>
            </div>
          ) :
          <Home onLogout={ this.handleClick } />
        }
      </MuiThemeProvider>
    );
  }
}

export default App;
