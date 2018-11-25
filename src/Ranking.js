import React, { useState, useEffect } from 'react';
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
import Firebase from './firebase';


const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function Ranking(props) {
  const [open, setOpen ] = useState(false)
  const [users, setUsers ] = useState([])

  useEffect(() => {
    Firebase.users.orderBy('name').get()
    .then((querySnapshot)=> {
        const list = []
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }, [])

  const handleToggle = () => setOpen(!open)

  const addSale = (qty) => {
    if(qty > 0) {
      const user = Firebase.auth.currentUser;
    
      Firebase.users.doc(user.uid).collection('sales').add({
        qty,
        date: new Date()
      }).then( () => {
        alert("Venda registrada!");
      }).catch( () => {
        alert("Erro ao registrada!")
      });

      handleToggle();
    }else {
      alert("Quantidade inválida")
    }
  }

  return (
    <div className={props.classes.root}>
      <SaleDialog open={open} onClose={handleToggle} onSave={addSale} />
      <Typography style={{padding: 16}} variant="h6" color="inherit">
        Participantes
      </Typography>
        <List dense>
          {users.map((user, index) => (
            <ListItem key={user.id} button>
              <Avatar alt="Remy Sharp" src={user.photoURL} />
              <ListItemText primary={user.name} />
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