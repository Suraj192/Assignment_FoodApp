import { FetchWrapper } from "./fetch-wrapper";
import snackbar from "snackbar";
import "snackbar/dist/snackbar.min.css";
import Chart from "chart.js/auto";

const foodname = document.querySelector("#option");
const grid = document.querySelector(".grid");
let myChart = { destroy: () => {} };
let carbs = document.querySelector("#carbs");
let protein = document.querySelector("#protein");
let fat = document.querySelector("#fat");
let foodadd = document.querySelector("#add");
const del = document.querySelector("#reset");
const heading4 = document.querySelector("h4");

//let myChart = { destory: () => {} };

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
  heading4.textContent = `Total Calories: ${log()}`;
  const container = document.createElement("div");
  container.classList.add("container");
  const title = document.createElement("h2");
  title.textContent = foodname.value;
  const para = document.createElement("p");
  para.textContent = `Total Calories: ${log()}`;
  const card = document.createElement("div");
  card.classList.add("card");
  const unorCarbs = document.createElement("ul");
  const lisCarbs = document.createElement("div");
  lisCarbs.textContent = "Carbs";
  const logdataCarbs = document.createElement("div");
  logdataCarbs.textContent = carbs.value;

  const unorProtein = document.createElement("ul");
  const lisProtein = document.createElement("div");
  lisProtein.textContent = "Protein";
  const logdataProtein = document.createElement("div");
  logdataProtein.textContent = protein.value;

  const unorFat = document.createElement("ul");
  const lisFat = document.createElement("div");
  lisFat.textContent = "Fat";
  const logdataFat = document.createElement("div");
  logdataFat.textContent = fat.value;

  grid.appendChild(container);
  container.appendChild(title);
  container.appendChild(para);
  container.appendChild(card);
  card.appendChild(unorCarbs);
  card.appendChild(unorProtein);
  card.appendChild(unorFat);
  unorCarbs.appendChild(lisCarbs);
  unorCarbs.appendChild(logdataCarbs);
  unorProtein.appendChild(lisProtein);
  unorProtein.appendChild(logdataProtein);
  unorFat.appendChild(lisFat);
  unorFat.appendChild(logdataFat);
};

const deleteAll = async () => {
  await API.delete("chapters.json");
};

foodadd.addEventListener("click", foodnutrients);
del.addEventListener("click", deleteAll);

const drawChart = () => {
  myChart.destroy();
  const mycharts = document.querySelector("#chart");
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

const log = () => {
  return (
    parseInt(carbs.value) * 4 +
    parseInt(protein.value) * 4 +
    parseInt(fat.value) * 9
  );
};
