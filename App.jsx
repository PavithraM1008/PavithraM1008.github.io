import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Login from "./components/Login/login";
// import Signup from "./components/Signup/Signup";
import Header from "./components/Header/Header";
// import Id from "./components/id/id";
// import Exercise from "./components/exercise/exercise";
// import Identity from "./components/identity/identity";
// import Pagination from "./components/Pagination/Pagination";
import Main from "./components/Main/Main";
import EmpProviders from "./context/employee.provider";
import { BrowserRouter } from "react-router-dom";
import Resume from "./Resume/Resume";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        {/* <Id></Id>
        <Login></Login>
        <Signup></Signup>
        <Exercise></Exercise>
        <Identity></Identity>
        <Pagination></Pagination> */}
        <Main></Main>
      </BrowserRouter>
      <Resume></Resume>
    </div>
  );
}

export default App;

// <
// div className = "App" >
//     <
//     Login > < /Login> <
// Signup > < /Signup>  / < /Signup>
// div >
