import * as React from "react";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import styled from "styled-components";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Videos } from "./pages/Videos";
import { Membership } from "./pages/Membership";
import { Tutorials } from "./pages/Tutorials";
import { Contact } from "./pages/Contact";
import { Colors } from "./stores/Constants";
import { action, observable } from "mobx";
import { GlobalStore } from "./stores/GlobalStore";
import { container } from "./inversify.config";
import TYPES from "./stores/Types";
import ScrollToTop from "./components/ScrollToTop";

const AppContainer = styled.div`
    background-color: ${Colors.white};
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: Montserrat;
`;

class App extends React.Component {
    @observable
    private globalStore: GlobalStore = container.get(TYPES.GlobalStore);

    @action
    handleOnScroll = event => {
        this.globalStore.atScrollTop = event.target.scrollTop === 0;
    };

    render() {
        return (
            <AppContainer onScroll={this.handleOnScroll}>
                <Router>
                    <ScrollToTop>
                        <Header />
                        <Switch>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/tutorials">
                                <Tutorials />
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
                        <Footer />
                    </ScrollToTop>
                </Router>
            </AppContainer>
        );
    }
}

export default App;
