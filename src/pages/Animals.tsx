import { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import Animal from "./Animal";
import { UserContext } from "../utils/UserProvider";
import { useContext } from "react";
import Add from "../utils/Add";
import Alert from "@mui/material/Alert";

const baseURL = "https://petstore.swagger.io/v2/pet/findByStatus?status=sold";

const Animals = () => {
  const { message, setMessage } = useContext(UserContext);
  const [animals, setAnimals] = useState([]);

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

  const handleAdd = () => {
    axios
      .get(baseURL)
      .then((response) => {
        if (response.data) {
          setAnimals((prevAnimals) => [...prevAnimals, response.data]);
        }
      })
      .catch((error) => alert(error));
  };

  const handleEdit = (id: string, name: string) => {
    setAnimals((prevAnimals) => {
      const newAnimals = prevAnimals.slice();
      const animalIndex = newAnimals.findIndex((animal) => animal.id === id);
      newAnimals[animalIndex] = { ...newAnimals[animalIndex], name: name };
      return newAnimals;
    });
  };

  /*useEffect(() => {
    
  }, []);*/

  return (
    <div className="user-logged">
      <h2>Gestione animali</h2>

      <Add handleAdd={handleAdd} />

      {message && (
        <Alert severity="info" onClose={() => setMessage("")}>
          {message}
        </Alert>
      )}
      <List>
        {animals &&
          animals.map((animal, index) => {
            if (animal.name && animal.id < 10000) {
              return (
                <Animal
                  id={animal.id}
                  key={animal.id + index}
                  name={animal.name}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                ></Animal>
              );
            }
          })}
      </List>
    </div>
  );
};

export default Animals;
