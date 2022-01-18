import Navbar from "../Navbar/Navbar";
import {Redirect} from "../Router/Router";

const Logout = () => {
  console.log("Logout");
  // re-render the navbar for a non-authenticated user
  Navbar();
  Redirect("/login"); 
};

export default Logout;
