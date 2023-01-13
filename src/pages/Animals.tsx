import { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import Animal from "./Animal";

const baseURL =
  "https://petstore.swagger.io/v2/pet/findByStatus?status=available";

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setAnimals(response.data);
    });
  }, []);

  return (
    <div className="user-logged">
      <h2>Gestione animali</h2>
      <List>
        {animals &&
          animals
            .slice(animals.length - 10, animals.length)
            .map((animal, index) => {
              return (
                <Animal
                  id={animal.id}
                  key={animal.id + index}
                  name={animal.name}
                ></Animal>
              );
            })}
      </List>
    </div>
  );
};

export default Animals;
