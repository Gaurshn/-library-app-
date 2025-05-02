import { useState } from "react";
import "./App.css";

import Logo from "./components/logo";
import Slotlist from "./components/slotlist";
import PlanList from "./components/planlist";
import Footer from "./components/footer";
import Register from "./components/register";
import LogIn from "./components/loginpage";

const ownerDetail = [
  {
    name: "Aditya Sahani",
    designation: "Owner",
    phoneno: 7457021151,
    emailid: "adityaSahani36@gmail.com",
    photo: "",
  },
  {
    name: "Shona Sahani",
    designation: "Owner-wife",
    phoneno: 7457021151,
    emailid: "adityaSahani36@gmail.com",
    photo: "",
  },
  {
    name: "Guddar kumar",
    designation: "Manager",
    phoneno: 7457021151,
    emailid: "adityaSahani36@gmail.com",
    photo: "",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  function handleNavClick(page) {
    setCurrentPage(page);
  }
  return (
    <div className="library-container">
      <Logo onNavClick={handleNavClick} />

      {currentPage === "home" && (
        <div className="mainlist">
          <Slotlist />
          <PlanList />
        </div>
      )}
      {currentPage === "contact" && (
        <div className="ownercard-container">
          {ownerDetail.map((person) => (
            <div className="owner-card">
              <img alt=" " src={person.photo} />
              <h1>{person.name}</h1>
              <h2>{person.designation}</h2>
              <h3>{person.phoneno}</h3>
              <h4>{person.emailid}</h4>
            </div>
          ))}
        </div>
      )}
      {currentPage === "register" && <Register />}
      {currentPage === "login" && (
        <div>
          <LogIn />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
