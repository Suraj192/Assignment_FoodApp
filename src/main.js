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
const del = document.querySelector("#reset");
const heading4 = document.querySelector("h4");

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
  adHtml();
};

const deleteAll = async () => {
  await API.delete("chapters.json");
};

foodadd.addEventListener("click", foodnutrients);
del.addEventListener("click", deleteAll);
