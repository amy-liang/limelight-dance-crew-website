import * as React from "react";
import styled from 'styled-components';
import {Colours} from "../stores/Constants";
import {Spacer} from "../components/Spacer";
import {Text} from "../components/Text";
import {ImageCarousel} from "../components/ImageCarousel";

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
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
`

const catdog = {
    url: "http://i3.ytimg.com/vi/6vXI9gN4Z3k/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=6vXI9gN4Z3k",
    title: "TXT (투모로우바이투게더) 'Cat & Dog' Dance Cover",
    subtitle: "Aug 4, 2019"
};

const images = [catdog, catdog, catdog, catdog, catdog, catdog];

export class Home extends React.Component {
    render() {
        return <Container>
            <Section1>
                <Text size={4} color={Colours.white} text={"LIMELIGHT DANCE CREW"}/>
                <Spacer height={24}/>
                <Text size={3} color={Colours.white} text={"Based in Waterloo, Ontario"}/>
            </Section1>
            <Section2>
                <Text lineHeight={2} align={"center"} padding={36} maxWidth={400} size={2}
                      text={"Formed in 2016, Limelight is a dance crew based in Waterloo, " +
                    "Ontario, composed of passionate university students who love K-Pop and dancing. " +
                    "We film covers, hold free tutorials, and also do performances around the community." +
                    " We are always welcoming new Lemons of any skill level and background!"}/>
                <ImageCarousel images={images}/>
                <Spacer height={16}/>
                <ImageCarousel images={images} offset={true}/>
                <Spacer height={32}/>
            </Section2>
            <Section1>
                <h1>LIMELIGHT DANCE CREW</h1>
                <Spacer height={24}/>
                <h2>Based in Waterloo, Ontario.</h2>
            </Section1>
        </Container>
    }
}