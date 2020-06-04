import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component<any> {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            console.log("SCROLL BITCH");
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
