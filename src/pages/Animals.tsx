import { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import Animal from "./Animal";
import { UserContext } from "../utils/UserProvider";
import { useContext } from "react";
import Add from "../utils/Add";
import Alert from "@mui/material/Alert";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

interface Animal {
  id: string;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: string[];
  tags: {
    id: number;
    name: string;
  }[];
  status: string;
}

const baseURL = "https://petstore.swagger.io/v2/pet/findByStatus?status=sold";

export default function Animals () {
  const { message, setMessage } = useContext(UserContext);
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    let progressValue = 0;
    let intervalId = setInterval(() => {
      setProgress(progressValue);
      progressValue += 5;
      if (progressValue > 95) {
        clearInterval(intervalId);
        axios
          .get(baseURL)
          .then((response) => {
            if (response.data) {
              setAnimals(response.data);
            }
          })
          .catch((error) => alert(error))
          .finally(() => {
            setProgress(100);
          });
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [message]);

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

  return (
    <div className="user-logged">
      <h2>Gestione animali</h2>

      <Add handleAdd={() => handleAdd} />

      {message && (
        <Alert severity="info" onClose={() => setMessage("")}>
          {message}
        </Alert>
      )}

      {progress !== 100 ? (
        <Box sx={{ width: "100%" }}>
          <p>Sto caricando i dati relativi agli animali ... </p>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      ) : (
        <List>
          {animals &&
            animals.map((animal, index) => {
              if (animal.name && animal.id < "10000") {
                return (
                  <Animal
                    id={animal.id}
                    key={animal.id + index}
                    name={animal.name}
                    handleDelete={() => handleDelete}
                    handleEdit={() => handleEdit}
                  ></Animal>
                );
              }
            })}
        </List>
      )}
    </div>
  );
};

