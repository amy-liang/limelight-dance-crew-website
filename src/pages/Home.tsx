import * as React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export class Home extends React.Component {
    render() {
        return <Container><h1>LIMELIGHT DANCE CREW</h1></Container>
    }
}