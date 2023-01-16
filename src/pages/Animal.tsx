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
  handleDelete: (id: string) => {};
}

const Animal = (props: Props) => {
  const { id, name, handleDelete } = props;

  return (
    <ListItem
      secondaryAction={
        <>
          <Edit id={id} /> <Delete handleDelete={handleDelete} id={id} />
        </>
      }
      sx={{
        border: "1px solid #FFF",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ width: 50, height: 50, bgcolor: "#2a14f3" }}>
          <PetsIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name.toUpperCase()}
        secondary={`ID: ${id}`}
        sx={{
          margin: "1rem",
        }}
        secondaryTypographyProps={{ style: { color: "#FFF" } }}
      />
    </ListItem>
  );
};
export default Animal;
