import * as React from "react";
import {Home} from "./pages/Home";
import {Header} from "./components/Header";
import styled from 'styled-components';
import { Footer } from "./components/Footer";

const AppContainer = styled.div`
  background-color: #282c34;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  font-family: Montserrat;
  overflow-x: hidden;
`

function App() {
  return (
    <AppContainer>
        <Header/>
        <Home/>
        <Footer/>
    </AppContainer>
  );
}

export default App;
