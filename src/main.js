import { FetchWrapper } from "./fetch-wrapper";
import snackbar from "snackbar";
import "snackbar/dist/snackbar.min.css";
import Chart from "chart.js/auto";
import { adHtml } from "./adHtml";
import { drawChart } from "./chart";
import { log } from "./log";

const foodname = document.querySelector("#option");
const grid = document.querySelector(".grid");
let myChart = { destroy: () => {} };
let carbs = document.querySelector("#carbs");
let protein = document.querySelector("#protein");
let fat = document.querySelector("#fat");
let foodadd = document.querySelector("#add");
const heading4 = document.querySelector("h4");

const API = new FetchWrapper(
  //"https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/"
  "https://firestore.googleapis.com/v1/projects/programmingjs-90a13/databases/(default)/documents/"
);

const endpoint = "suraj8345734";

const foodnutrients = async (event) => {
  event.preventDefault();
  body = {
    fields: {
      carbs: { integerValue: carbs.value },
      protein: { integerValue: protein.value },
      fat: { integerValue: fat.value },
      foodname: { stringValue: foodname.value },
    },
  };

  const newITEM = await API.post(endpoint, body);
  console.log(newITEM);
  drawChart(foodname, carbs, protein, fat);
  heading4.textContent = `Total Calories: ${log()}`;
  adHtml(newITEM);
  snackbar.show("Food Added succesfully");
};

foodadd.addEventListener("click", foodnutrients);

const getResponse = async () => {
  API.get(endpoint).then((data) => data.document.map((item) => adHtml(item)));
};

API.get(endpoint).then((data) =>
  console.log(data.documents.map((item) => item))
);
