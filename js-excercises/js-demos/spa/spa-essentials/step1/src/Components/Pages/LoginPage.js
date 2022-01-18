import HomePage from "./HomePage";
/**
 * View the Login form :
 * render a login page into the #page div (formerly login function)
 */
function LoginPage() {
  // reset #page div
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = "";
  // create a login form
  const form = document.createElement("form");
  form.className = "p-5";
  const username = document.createElement("input");
  username.type = "text";
  username.id = "username";
  username.placeholder = "username";
  username.required = true;
  username.className = "form-control mb-3";
  const password = document.createElement("input");
  password.type = "password";
  password.id = "password";
  password.required = true;
  password.placeholder = "password";
  password.className = "form-control mb-3";
  const submit = document.createElement("input");
  submit.value = "Login";
  submit.type = "submit";
  submit.className = "btn btn-danger";
  form.appendChild(username);
  form.appendChild(password);
  form.appendChild(submit);

  form.addEventListener("submit", onSubmit);
  pageDiv.appendChild(form);

  async function onSubmit(e) {
    e.preventDefault();
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    console.log("credentials", username.value, password.value);
    try {
      const options = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }), // body data type must match "Content-Type" header
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/auths/login", options); // fetch return a promise => we wait for the response

      if (!response.ok) {
        throw new Error(
          "fetch error : " + response.status + " : " + response.statusText
        );
      }
      const user = await response.json(); // json() returns a promise => we wait for the data
      console.log("user authenticated", user);
      // what to do whith the token ?

      // Rerender the navbar for an authenticated user
      // hide the Login and Register button
      const login = document.getElementById("loginItem");
      login.style.display = "none";
      const register = document.getElementById("registerItem");
      register.style.display = "none";
      //Show new button for authenticated users
      const logout = document.getElementById("logoutItem");
      logout.classList.remove("d-none");

      // call the HomePage
      HomePage();
    } catch (error) {
      console.error("LoginPage::error: ", error);
    }
  }
}

export default LoginPage;
