import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.css';
import logo from './logo.webp';
import Home from './Home';
import Firebase from './firebase';


const theme = createMuiTheme({
  palette: {
    primary: {main: "#307938"},
    secondary: { main: '#fbae3e'}
  },
});

function App() {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    setupFb(setLogado);
  }, [])
  
  const handleClick = (event, value) => {
    Firebase.signInGoogle().then(function(result) {
      setLogado(!logado)
    }).catch(function(error) {
      alert("Erro!")
    });
  };

  return (
    <MuiThemeProvider theme={theme}>
      {
        !logado ?
        (
          <div className="App">
            <header className="App-header">
              <img src={logo} alt="logo"/>
              <br/>
              <Button onClick={handleClick} variant="contained" color="primary">
                Entrar com sua conta Goole
              </Button>
            </header>
          </div>
        ) :
        <Home onLogout={ handleClick } />
      }
    </MuiThemeProvider>
  );
  
}

const setupFb = (setLogado) => {
  Firebase.auth.onAuthStateChanged((user) => {
    if (user) {
      Firebase.users.doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          const userData = doc.data()
          setLogado(true);
        }else {
          console.log(user)
          Firebase.users.doc(user.uid).set({name: user.displayName, photoURL: user.photoURL});
        }
      }).catch((error) => {
        console.log(error)
      })
    }else {
      setLogado(false);
    }
  })
}

export default App;
