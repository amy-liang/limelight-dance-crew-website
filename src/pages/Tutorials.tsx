import * as React from "react";
import styled from "styled-components";
import { Dimensions } from "../stores/Constants";

const Container = styled.div`
    margin-top: ${Dimensions.headerHeight}px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export class Tutorials extends React.Component {
    render() {
        return <Container>SCHEDULE</Container>;
    }
}
