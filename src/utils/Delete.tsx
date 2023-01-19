import { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { UserContext } from "./UserProvider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UndoIcon from "@mui/icons-material/Undo";

interface Props {
  id: string;
  handleDelete: (id: string) => {};
}
export default function Delete (props: Props) {
  const { setMessage } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const { id, handleDelete } = props;

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
        if (
          response.status === 200 ||
          (response.status === 204 && !response.data.error)
        ) {
          setMessage(
            "La richiesta di eliminazione è stata eseguita correttamente."
          );
        } else {
          setMessage(
            "La richiesta di eliminazione non è stata eseguita correttamente."
          );
        }
      })
      .catch((error) => {
        setMessage(
          `Si è verificato un errore nella richiesta di eliminazione: 
          ${error}`
        );
      });
    handleClose();
    handleDelete(id);
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
            Una volta eliminato l'elemento selezionato non sarai più in grado di
            recuperarlo.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            endIcon={<UndoIcon />}
            onClick={handleClose}
            color="error"
          >
            Annulla
          </Button>
          <Button
            variant="outlined"
            endIcon={<CheckCircleIcon />}
            onClick={handleDeleteConfirm}
            autoFocus
          >
            Conferma Elimina
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
