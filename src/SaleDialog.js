import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


export default (props) => (
  <div>
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Registrar venda</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Quantas Caip você vendeu?
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Quantidade"
          type="number"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={props.onClose} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  </div>
)