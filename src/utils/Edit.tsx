import { useState, useContext, ChangeEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UndoIcon from "@mui/icons-material/Undo";
import { useUser } from "./UserProvider";

interface Props {
  id: string;
  name: string;
  handleEdit: (id: string, name: string) => {};
}

const baseURL = "https://petstore.swagger.io/v2/pet";

export default function Edit(props: Props) {
  const [open, setOpen] = useState(false);
  const [updatedName, handleUpdatedName] = useInput("");
  const { setMessage } = useUser();

  const { id, name, handleEdit } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditConfirm = () => {
    axios
      .put(baseURL, {
        id: id,
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
            "La richiesta di modifica è stata eseguita correttamente."
          );
        } else {
          setMessage(
            "La richiesta di modifica non è stata eseguita correttamente."
          );
        }
      })
      .catch((error) => {
        setMessage(
          `Si è verificato un errore nella richiesta di modifica: 
          ${error}`
        );
      });
    handleClose();
    handleEdit(id, updatedName);
  };

  return (
    <>
      <IconButton
        edge="end"
        aria-label="edit"
        color="warning"
        onClick={handleClickOpen}
        sx={{ background: "#FFF", margin: "0 2rem" }}
      >
        <EditIcon fontSize="large" />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>MODIFICA NOME ANIMALE</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Inserisci il nuovo nome da dare all'animale: {name.toUpperCase()}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="nuovo nome"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleUpdatedName}
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
            endIcon={<CheckCircleIcon />}
            variant="outlined"
            onClick={handleEditConfirm}
          >
            Conferma Modifica
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function useInput(
  defaultValue: string
): [string, (e: ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return [value, onChange];
}
