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

const backgroundColor = [
  "rgba(0,255, 0, 0.7)",
  "rgba(255, 0, 0, 0.7)",
  "rgba(252, 0, 255, 0.7)",
  "rgba(255, 255, 0, 0.7)",
];

const Warehouse = () => {
  const [warehouse, setWarehouse] = useState([]);
  //const [labels, setLabels] = useState([]);

  useEffect(() => {
    fetch("https://petstore.swagger.io/v2/store/inventory")
      .then((response) => response.json())
      .then((data) => {
        setWarehouse(data);
        //Object.keys(data).map((key, i) => setLabels(key));
      })
      .catch((err) => console.error(err));
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Animali",
        data: labels.map((label) => warehouse[label]),
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

export default Warehouse;
