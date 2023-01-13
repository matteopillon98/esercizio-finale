import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

const Delete = (props) => {
  const [open, setOpen] = React.useState(false);
  const { id } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`https://petstore.swagger.io/v2/pet/${id}`)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <IconButton
        edge="end"
        aria-label="delete"
        color="error"
        onClick={handleClickOpen}
        sx={{ background: "#FFF", margin: "0 2rem" }}
      >
        <DeleteIcon fontSize="large" />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Sei sicuro di voler cancellare l'animale con ID ${id}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Effettuando il logout dal nostro sistema non sarai più in grado di
            accedere alle sue funzionalità.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="error">
            Annulla
          </Button>
          <Button onClick={handleDeleteConfirm} autoFocus>
            Conferma Elimina
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Delete;
