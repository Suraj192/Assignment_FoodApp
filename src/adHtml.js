export const adHtml = () => {
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
