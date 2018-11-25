import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import SaleDialog from './SaleDialog'


const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function Ranking(props) {
  const [open, setOpen ] = useState(false)

  const handleToggle = () => setOpen(!open)

  return (
    <div className={props.classes.root}>
      <SaleDialog open={open} onClose={handleToggle} />
      <Typography style={{padding: 16}} variant="h6" color="inherit">
        Participantes
      </Typography>
        <List dense>
          {[3, 2, 1, 0].map((value, index) => (
            <ListItem key={value} button>
              <Avatar alt="Remy Sharp" src={`https://randomuser.me/api/portraits/men/${value + 10}.jpg`} />
              <ListItemText primary={`Participante ${value + 1}`} />
              <ListItemSecondaryAction style={{marginRight: 8}}>
                {index + 1}
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <br/>
        <br/>
        <div style={{textAlign: 'center'}}>
          <Button onClick={handleToggle} variant="contained" color="secondary">
            Registrar venda
          </Button>
        </div>
      </div>
  )
}

Ranking.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ranking);