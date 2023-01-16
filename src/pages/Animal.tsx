import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import PetsIcon from "@mui/icons-material/Pets";
import Delete from "../utils/Delete";
import Edit from "../utils/Edit";

interface Props {
  id: string;
  key: string;
  name: string;
}

const Animal = (props: Props) => {
  const { id, name } = props;

  return (
    <ListItem
      secondaryAction={
        <>
          <Edit id={id} /> <Delete id={id} />
        </>
      }
      sx={{
        background: "#b3b3b3",
        border: "1px solid #000",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ width: 50, height: 50, bgcolor: "#2a14f3" }}>
          <PetsIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name.toUpperCase()} secondary={`ID: ${id}`} />
    </ListItem>
  );
};
export default Animal;
