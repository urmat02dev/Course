import React, {FC, useState} from 'react';
import './App.scss';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main-page/MainPage";

function App() {



  return (
    <>

    <Header/>
      <MainPage/>

    </>
  );
}

export default App;
