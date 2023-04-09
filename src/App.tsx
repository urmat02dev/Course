import React, {FC, useState} from 'react';
import './App.scss';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main-page/MainPage";

function App() {
  const [dark , setDark] = useState(false)
  function getDark ()  {
    setDark(!dark)
  }
  console.log(dark)

  return (
    <div className="App" style={{
      background:dark ? "white" : "black",
      color: dark ? "black" : "white"
    }}>
    <Header  getDark={getDark} dark={dark}/>
      <MainPage
          dark={dark} getDark={getDark}/>

    </div>
  );
}

export default App;
