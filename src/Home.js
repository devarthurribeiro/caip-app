import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './Home.css'

import Ranking from './Ranking'
import Profile from './Profile'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function HomeH(props) {
  const [index, setIndex ] = useState(0);

  const handleChange = (event, value) => setIndex(value);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={props.classes.grow}>
            Ranking Caip
          </Typography>
          <Button onClick={ () => props.onLogout() } color="inherit">Sair</Button>
        </Toolbar>
      </AppBar>
    
      { index === 0 ? <Ranking /> : <Profile /> }
    
      <BottomNavigation
        value={index}
        onChange={handleChange}
        showLabels
        className="Nav">
        <BottomNavigationAction label="Inicio" icon={<HomeIcon />} />
        <BottomNavigationAction label="Meus dados" icon={<AccountCircle />} />
      </BottomNavigation>
    </div>
  )
}

export default withStyles(styles)(HomeH);
