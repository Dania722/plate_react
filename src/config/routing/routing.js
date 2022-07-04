import React from "react";
import Login from './../../pages/login';
import Dashboard from './../../pages/dashboard';
import Signup from './../../pages/signup';
import NotFound from './../../pages/notFound';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import All from "./nested";
import Overalldashboard from "../../pages/overalldashboard";

export default function Routing() {
  return (
    <Router>
        <Routes>
        {/* <Route path='dashboard/*' element={<Dashboard/>}/>  */}
        {/* <Route path="/dashboard/*" element = {<Dashboard/>} /> */}
        <Route exact path="dashboard/*" element = {<Dashboard/>} />
          <Route path="login" element={<Login/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  );
}
