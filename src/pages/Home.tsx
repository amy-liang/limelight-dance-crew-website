import * as React from "react";
import styled from 'styled-components';
import {Colours} from "../stores/Constants";
import {Spacer} from "../components/Spacer";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Section1 = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${Colours.mainBlue};
`

const Section2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
`

export class Home extends React.Component {
    render() {
        return <Container>
            <Section1>
                <h1>LIMELIGHT DANCE CREW</h1>
                <Spacer height={24}/>
                <h2>Based in Waterloo, Ontario.</h2>
            </Section1>
            <Section2>
                <h1>LIMELIGHT DANCE CREW</h1>
                <Spacer height={24}/>
                <h2>Based in Waterloo, Ontario.</h2>
            </Section2>
            <Section1>
                <h1>LIMELIGHT DANCE CREW</h1>
                <Spacer height={24}/>
                <h2>Based in Waterloo, Ontario.</h2>
            </Section1>
        </Container>
    }
}