import { FetchWrapper } from "./fetch-wrapper";
import snackbar from "snackbar";
import "snackbar/dist/snackbar.min.css";
import Chart from "chart.js/auto";

const foodname = document.querySelector("#option");
let carbs = document.querySelector("#carbs");
let protein = document.querySelector("#protein");
let fat = document.querySelector("#fat");
let foodadd = document.querySelector("#add");
const del = document.querySelector("#reset");

let myChart = { destory: () => {} };

const API = new FetchWrapper(
  "https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/"
);

const foodnutrients = async (event) => {
  event.preventDefault();
  datavalue = {
    nutrition: {
      carbs: { integerValue: carbs.value },
      protein: { integerValue: protein.value },
      fat: { integerValue: fat.value },
      foodname: { stringValue: foodname.value },
    },
  };
  await API.post("chapters.json", datavalue);
  drawChart();
};

const deleteAll = async () => {
  await API.delete("chapters.json");
};

foodadd.addEventListener("click", foodnutrients);
del.addEventListener("click", deleteAll);

const drawChart = () => {
  const mycharts = document.querySelector("#chart");
  myChart.destory();
  myChart = new Chart(mycharts, {
    type: "bar",
    data: {
      labels: ["Carbs", "Protein", "Fat"],
      datasets: [
        {
          label: foodname.value,
          data: [carbs.value, protein.value, fat.value],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
