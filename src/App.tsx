import {ThemeProvider} from 'styled-components';
import light from './assets/styles/themes/light'
 
import { GlobalStyle } from "./assets/styles/global";
import Header from "./components/header";

function App() {
  return (
    <ThemeProvider theme={light}>
    <>
      <Header/>
      <GlobalStyle/>
    </>
    </ThemeProvider>
  );
}

export default App;
