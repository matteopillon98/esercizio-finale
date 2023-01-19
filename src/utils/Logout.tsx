import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext, useState } from "react";
import { UserContext } from "./UserProvider";
import LogoutIcon from "@mui/icons-material/Logout";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UndoIcon from "@mui/icons-material/Undo";

export default function Logout () {
  const [open, setOpen] = useState(false);
  const { logout } = useContext(UserContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        endIcon={<LogoutIcon />}
      >
        Logout
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Sei sicuro di voler effettuare il logout?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Effettuando il logout dal nostro sistema non sarai più in grado di
            accedere alle sue funzionalità.
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
            onClick={logout}
            autoFocus
          >
            Effettua Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

