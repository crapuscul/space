import React from "react";
import Navbar from "./components/navbar/navbar";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/_variables.css';

// import './App.css'


export default function App() {

  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </>
  )
}

