import React from "react";
import Navbar from "./components/navbar/navbar";
import AppRoutes from "./routes/approutes";
import { BrowserRouter as Router } from 'react-router-dom';

// import './App.css'


export default function App() {

  return (
    <>
        <Navbar />
      <AppRoutes />
      <h1>Hello World</h1>

    </>
  )
}

