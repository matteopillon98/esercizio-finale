import { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import Animal from "./Animal";
import { UserContext } from "../utils/UserProvider";
import Alert from "@mui/material/Alert";
import { useContext } from "react";

const baseURL = "https://petstore.swagger.io/v2/pet/findByStatus?status=sold";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const { message } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        if (response.data) {
          setAnimals(response.data);
        }
      })
      .catch((error) => alert(error));
  }, []);

  const handleDelete = (id: string) => {
    let newAnimals = animals.filter((animal) => animal.id !== id);
    setAnimals(newAnimals);
  };
  /*useEffect(() => {
    axios
      .post("https://petstore.swagger.io/v2/pet", {
        id: Math.floor(Math.random() * (animals.length + 10) + 1),
        category: {
          id: 0,
          name: "string",
        },
        name: "pippo",
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
        console.log(response.data);
      });
  }, []);*/

  return (
    <div className="user-logged">
      <h2>Gestione animali</h2>

      {message && <Alert severity="info">{message}</Alert>}
      <List>
        {animals &&
          animals.map((animal, index) => {
            if (animal.name && animal.id < 100000) {
              return (
                <Animal
                  id={animal.id}
                  key={animal.id + index}
                  name={animal.name}
                ></Animal>
              );
            }
          })}
      </List>
    </div>
  );
};

export default Animals;
