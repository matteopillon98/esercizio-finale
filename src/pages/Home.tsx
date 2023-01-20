import { useUser } from "../utils/UserProvider";
import { useContext } from "react";
import Alert from "@mui/material/Alert";

export default function Home () {
  const { message, setMessage } = useUser();
  return (
    <div className="user-logged">
      <h2>Benvenuto nella home del nostro sistema</h2>
      {message && (
        <Alert severity="info" onClose={() => setMessage("")}>
          {message}
        </Alert>
      )}
    </div>
  );
};
