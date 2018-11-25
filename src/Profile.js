import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  bigAvatar: {
    margin: 8,
    width: 120,
    height: 120,
  },
};

function Profile(props) {
  const [completed, setCompleted] = useState(50);

  return (
    <div>
      <Card className={props.classes.card}>
        <CardContent>

            <Grid container>
              <Grid item xs={12} container justify="center">
                <Avatar
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  className={props.classes.bigAvatar} />
              </Grid>
              <Grid item xs={12}  container justify="center">
                <Typography className={props.classes.pos} color="textSecondary">
                  Nome do Participante
                </Typography>
              </Grid>
            </Grid>
          <Typography component="p">
            <b>Inicio </b> 25/11/18 <br/>
            <b>Finaliza em </b> 30/11/18 <br/>
            <b>Vendas</b> 600 <b>Un</b>
          </Typography>
          <br/>
          <Typography component="p">
            50% de 100% Para completar o desafio.
          </Typography>
        </CardContent>
      </Card>
      <LinearProgress color="primary" variant="determinate" value={completed} />

    </div>
  )
}

export default withStyles(styles)(Profile);