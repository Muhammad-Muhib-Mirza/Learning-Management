import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./Routes/Home";

import Navbar from "./Component/Navbar";
import Fotter from "./Component/Fotter"; // Fixed spelling
import Type from "./Routes/Type";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Routes/detail"
import Login from "./Routes/login";
import Signin from "./Routes/SignUp";
import AssesMe from "./Routes/AssesMePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* Main Content Area */}
        <Routes>
          {/* Set Home component as the default route */}
          <Route index element={<Home />} />
          <Route path="/type/:typeName" element={<Type />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/assesme" element={<AssesMe />} />
        </Routes>
        <Fotter /> {/* Footer outside of the Switch block */}
      </Router>
    </div>
  );
}

export default App;
