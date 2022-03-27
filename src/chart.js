export const drawChart = () => {
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
