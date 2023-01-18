import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UndoIcon from "@mui/icons-material/Undo";
import { UserContext } from "./UserProvider";

interface Props {
  handleAdd: () => {};
}

const baseURL = "https://petstore.swagger.io/v2/pet";

const Add = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const { setMessage } = useContext(UserContext);

  const { handleAdd } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddConfirm = () => {
    axios
      .post(baseURL, {
        id: Math.floor(Math.random() * (updatedName.length + 10) + 1),
        category: {
          id: 0,
          name: "string",
        },
        name: updatedName,
        photoUrls: ["string"],
        tags: [
          {
            id: 0,
            name: "string",
          },
        ],
        status: "sold",
      })
      .then((response) => {
        if (
          response.status === 200 ||
          (response.status === 204 && !response.data.error)
        ) {
          setMessage(
            "La richiesta di aggiunta è stata eseguita correttamente."
          );
        } else {
          setMessage(
            "La richiesta di aggiunta non è stata eseguita correttamente."
          );
        }
      })
      .catch((error) => {
        setMessage(
          `Si è verificato un errore nella richiesta di aggiunta: 
          ${error}`
        );
      });

    handleClose();
    handleAdd();
  };

  return (
    <div>
      <Button
        variant="contained"
        aria-label="add"
        color="primary"
        onClick={handleClickOpen}
        endIcon={<AddCircleOutlineIcon />}
      >
        Aggiungi un nuovo animale
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>AGGIUNGI UN ANIMALE</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Inserisci il nome da dare all'animale
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="nome"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUpdatedName(e.target.value)}
          />
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
            onClick={handleAddConfirm}
            endIcon={<CheckCircleIcon />}
          >
            Conferma Inserimento
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Add;
