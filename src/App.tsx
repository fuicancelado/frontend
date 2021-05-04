import React from "react";
import { GlobalStyle, MainContainer } from "./assets/styles/global";
import { Routes } from "./routes/routes";
import { SideMenu } from "./components/SideMenu"

function App() {
  return (
    <>
      <SideMenu />
      <MainContainer>
        <Routes/>
      </MainContainer>
      <GlobalStyle/>
    </>
  );
}

export default App;
