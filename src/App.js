import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="addUser" element={<AddUser/>}/>
                <Route exact path="/editUser/:id" element={<EditUser/>}/>
                <Route exact path="/viewUser/:id" element={<ViewUser/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
