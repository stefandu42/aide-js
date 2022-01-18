/**
 * Render a view of the pizzas into the #page div (formerly pizzaView function )
 */

const HomePage = async () => {
  // reset #page div
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = "";

  try {
    // hide data to inform if the pizza menu is already printed
    const response = await fetch("/api/pizzas"); // fetch return a promise => we wait for the response

    if (!response.ok) {
      // status code was not 200, error status code
      throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
      );
    }
    const pizzas = await response.json(); // json() returns a promise => we wait for the data
    // create a wrapper to provide a responsive table
    const tableWrapper = document.createElement("div");
    tableWrapper.className = "table-responsive pt-5";
    // create an HTMLTableElement dynamically, based on the pizzas data (Array of Objects)
    const table = document.createElement("table");
    table.className = "table table-danger";
    tableWrapper.appendChild(table);
    // deal with header
    const thead = document.createElement("thead");
    const header = document.createElement("tr");
    thead.appendChild(header);
    const header1 = document.createElement("th");
    header1.innerText = "Pizza";
    const header2 = document.createElement("th");
    header2.innerText = "Description";
    header.appendChild(header1);
    header.appendChild(header2);
    table.appendChild(thead);
    // deal with data rows for tbody
    const tbody = document.createElement("tbody");
    pizzas.forEach((pizza) => {
      const line = document.createElement("tr");
      const titleCell = document.createElement("td");
      titleCell.innerText = pizza.title;
      line.appendChild(titleCell);
      const descriptionCell = document.createElement("td");
      descriptionCell.innerText = pizza.content;
      line.appendChild(descriptionCell);
      // hide info within each row, the pizza id
      line.dataset.pizzaId = pizza.id;
      tbody.appendChild(line);
    });
    table.appendChild(tbody);
    // add the HTMLTableElement to the main, within the #page div
    pageDiv.appendChild(tableWrapper);
  } catch (error) {
    console.error("pizzaView::error: ", error);
  }
};

export default HomePage;
