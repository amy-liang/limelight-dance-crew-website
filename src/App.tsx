import * as React from "react";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import styled from 'styled-components';
import { Footer } from "./components/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Videos} from "./pages/Videos";
import {Membership} from "./pages/Membership";
import {Schedule} from "./pages/Schedule";
import {Contact} from "./pages/Contact";
import {Colors} from "./stores/Constants";

const AppContainer = styled.div`
    background-color: ${Colors.white};
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
        <Router>
            <Header/>
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/schedule">
                        <Schedule />
                    </Route>
                    <Route path="/membership">
                        <Membership />
                    </Route>
                    <Route path="/videos">
                        <Videos />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
        <Footer/>
        </Router>
    </AppContainer>
  );
}

export default App;
