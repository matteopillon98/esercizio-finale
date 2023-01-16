import { UserContext } from "../utils/UserProvider";
import { useContext } from "react";
import Alert from "@mui/material/Alert";

const Home = () => {
  const { message, setMessage } = useContext(UserContext);
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

export default Home;
