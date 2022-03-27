import "./App.css";
import React from "react";
import HomePage from "./Components/HomePage.jsx";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { AuthContext } from "./Contexts/AuthContext";

function App() {
  let dataFromContext = React.useContext(AuthContext);
  const { isAuth} = dataFromContext;
  return (
    <div className="App">
      <Navbar />
      {isAuth && <HomePage />}
      {!isAuth && <Login />}
    </div>
  );
}

export default App;