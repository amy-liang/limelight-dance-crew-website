import * as React from "react";
import styled from "styled-components";
import { Dimensions } from "../stores/Constants";

const Container = styled.div`
    padding-top: ${Dimensions.headerHeight}px;
    display: flex;
    flex-direction: column;
`;

export class Videos extends React.Component {
    render() {
        return <Container>VIDEOS</Container>;
    }
}
