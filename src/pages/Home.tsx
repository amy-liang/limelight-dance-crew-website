import * as React from "react";
import styled from 'styled-components';
import {Color} from "../stores/Constants";
import {Spacer} from "../components/Spacer";
import {Text} from "../components/Text";
import {ImageCarousel} from "../components/ImageCarousel";
import {Button} from "../components/Button";
import {Column} from "../components/Column";
import {ImageGallery} from "../components/ImageGallery";
import { Row } from "../components/Row";

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
    background-color: ${Color.mainBlue};
    position: relative;
`

const Section2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${Color.lightBlue};
    position: relative;
`

const Section2Container = styled(Column)`
    align-items: flex-end;
    padding-right: 48px;
`

const Section3 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: ${Color.mainBlue};
    position: relative;
`

const SectionHeaderText = styled(Text)`
    transform: rotate(-90deg);
    position: absolute;
    left: -20px;
    top: 150px;
    text-transform: uppercase;
`

const catdog = {
    url: "http://i3.ytimg.com/vi/6vXI9gN4Z3k/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=6vXI9gN4Z3k",
    title: "TXT (투모로우바이투게더) 'Cat & Dog' Dance Cover",
    subtitle: "Aug 4, 2019"
};

const amy = {
    url: "https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-19/s320x320/92481724_543128233250435_1991198240594198528_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_ohc=5oKdvlqKUIAAX_Cu5HZ&oh=8c36ccad6ac6aaad16f0327336e95a97&oe=5EF535A5",
    title: "Amy Liang",
    subtitle: "Director"
};

const images = [catdog, catdog, catdog, catdog, catdog, catdog];
const images2 = [catdog, catdog, catdog, catdog, catdog, catdog, catdog];
const profiles = [amy, amy, amy, amy, amy, amy];

export class Home extends React.Component {
    render() {
        return <Container>
            <Section1>
                <Text size={4} color={Color.white}>LIMELIGHT DANCE CREW</Text>
                <Spacer height={24}/>
                <Text size={3} color={Color.lightBlue}>Based in Waterloo, Ontario</Text>
            </Section1>
            <Section2>
                <Spacer height={72}/>
                <Section2Container>
                    <SectionHeaderText size={3}>About Us</SectionHeaderText>
                    <Text lineHeight={2} align={"right"} maxWidth={500} size={2}>
                        Formed in 2016, Limelight is a dance crew based in Waterloo,
                        Ontario, composed of passionate university students who love K-Pop and dancing.
                        We film covers, hold free tutorials, and also do performances around the community.
                        We are always welcoming new Lemons of any skill level and background!</Text>
                    <Spacer height={32}/>
                    <Button text={"Dance With Us"} onClick={() => {}}/>
                    <Spacer height={72}/>
                </Section2Container>
                <ImageCarousel images={images}/>
                <Spacer height={16}/>
                <ImageCarousel images={images2} offset={true}/>
                <Spacer height={72}/>
            </Section2>
            <Section3>
                <Spacer height={72}/>
                <SectionHeaderText size={3} color={Color.white}>Our Team</SectionHeaderText>
                <Row>
                    <ImageGallery images={profiles} maxPerColumn={3}/>
                    <Spacer width={54}/>
                </Row>
                <Spacer height={72}/>
            </Section3>
        </Container>
    }
}