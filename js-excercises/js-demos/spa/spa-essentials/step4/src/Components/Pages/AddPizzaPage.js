import { Redirect } from "../Router/Router";
import { getSessionObject } from "../../utils/session";

/**
 * Form to add a pizza :
 * Anonymous users shall be redirected to "/login" Page
 */
function AddPizzaPage() {
  let user = getSessionObject("user");
  if (!user) return Redirect("/login");

  // reset #page div
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = "";

  // create the "Add a pizza" form
  const form = document.createElement("form");
  form.className = "p-5";
  const title = document.createElement("input");
  title.type = "text";
  title.id = "title";
  title.placeholder = "title of pizza";
  title.required = true;
  title.className = "form-control mb-3";
  const content = document.createElement("input");
  content.type = "text";
  content.id = "content";
  content.required = true;
  content.placeholder = "content of pizza : e.g cheese, tomato...";
  content.className = "form-control mb-3";
  const submit = document.createElement("input");
  submit.value = "Add";
  submit.type = "submit";
  submit.className = "btn btn-danger";
  form.appendChild(title);
  form.appendChild(content);
  form.appendChild(submit);

  form.addEventListener("submit", onSubmit);
  pageDiv.appendChild(form);

  async function onSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    console.log("forms values : ", title.value, content.value);
    try {
      const options = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify({
          title: title.value,
          content: content.value,
        }), // body data type must match "Content-Type" header
        headers: {
          "Content-Type": "application/json",
          Authorization: user.token,
        },
      };

      const response = await fetch("/api/pizzas", options); // fetch return a promise => we wait for the response

      if (!response.ok) {
        throw new Error(
          "fetch error : " + response.status + " : " + response.statusText
        );
      }
      const pizza = await response.json(); // json() returns a promise => we wait for the data
      console.log("pizza added : ", user);

      // call the HomePage via the Router
      Redirect("/");
    } catch (error) {
      console.error("AddPizzaPage::error: ", error);
    }
  }
}

export default AddPizzaPage;
