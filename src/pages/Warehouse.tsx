import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Grafico stato animali",
      font: {
        size: 22,
      },
    },
  },
};

const labels = ["available", "sold", "not available", "pending"];

const backgroundColor = ["rgba(252, 0, 255, 0.7)"];

const baseURL = "https://petstore.swagger.io/v2/store/inventory";

export default function Warehouse () {
  const [warehouse, setWarehouse] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setWarehouse(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Animali",
        data: Object.fromEntries(
          Object.entries(warehouse).filter(
            ([key]) =>
              key === "available" ||
              key === "sold" ||
              key === "not available" ||
              key === "pending"
          )
        ),
        backgroundColor: backgroundColor,
      },
    ],
  };
  return (
    <div className="user-logged">
      <h2>Bentornato nel nostro inventario</h2>
      <Bar options={options} data={data} />
    </div>
  );
};

