import { GlobalStyle, MainContainer } from "./assets/styles/global";
import { Routes } from "./routes/routes";
import { SideMenu } from "./components/SideMenu"
import { makeServer } from "./server/server"

if (process.env.NODE_ENV === "development")
  makeServer({ environment: "development" })

function App() {
  return (
    <>
      <MainContainer>
        <Routes/>
      </MainContainer>
      <GlobalStyle/>
    </>
  );
}

export default App;
