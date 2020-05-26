import * as React from "react";
import styled from "styled-components";
import { Colors, Images } from "../stores/Constants";
import { Spacer } from "../components/Spacer";
import { Text } from "../components/Text";
import { ImageCarousel } from "../components/ImageCarousel";
import { Button } from "../components/Button";
import { Column } from "../components/Column";
import { ImageGallery } from "../components/ImageGallery";
import { Row } from "../components/Row";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Section1 = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: url("${Images.banner}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const Section2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${Colors.lightBlue};
    background-image: url("${Images.groupImage}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -50px;
`;

const Section2Container = styled(Column)`
    align-items: flex-end;
    padding-right: 48px;
`;

const Section3 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: ${Colors.blue1};
    position: relative;
`;

const SectionHeaderText = styled(Text)`
    transform: rotate(-90deg);
    position: absolute;
    left: -42px;
    top: 150px;
    text-transform: uppercase;
`;

const catdog = {
    url: "http://i3.ytimg.com/vi/6vXI9gN4Z3k/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=6vXI9gN4Z3k",
    title: "TXT (투모로우바이투게더) 'Cat & Dog' Dance Cover",
    subtitle: "Aug 4, 2019"
};

const images = [catdog, catdog, catdog, catdog, catdog, catdog];
const images2 = [catdog, catdog, catdog, catdog, catdog, catdog, catdog];

export class Home extends React.Component {
    render() {
        return (
            <Container>
                <Section1>
                    <Text size={4} color={Colors.white}>
                        LIMELIGHT DANCE CREW
                    </Text>
                    <Spacer height={24} />
                    <Text size={3} color={Colors.lightBlue}>
                        Based in Waterloo, Ontario
                    </Text>
                </Section1>
                <Section2>
                    <Spacer height={72} />
                    <Section2Container>
                        <SectionHeaderText size={3}>About Us</SectionHeaderText>
                        <Text size={3}>OPEN TO ALL</Text>
                        <Spacer height={16} />
                        <Text
                            lineHeight={2}
                            align={"right"}
                            maxWidth={400}
                            size={2}
                        >
                            Formed in 2016, Limelight is a dance crew based in
                            Waterloo, Ontario, composed of passionate university
                            students who love K-Pop and dancing. We film covers,
                            hold free tutorials, and also do performances around
                            the community.
                            <br />
                            The crew is always welcoming new Lemons <br />
                            of any skill level and background!
                        </Text>
                        <Spacer height={32} />
                        <Link to={"/membership"}>
                            <Button text={"Dance With Us"} />
                        </Link>
                        <Spacer height={72} />
                    </Section2Container>
                    <ImageCarousel images={images} />
                    <Spacer height={16} />
                    <ImageCarousel images={images2} offset={true} />
                    <Spacer height={72} />
                </Section2>
                <Section3>
                    <Spacer height={72} />
                    <SectionHeaderText size={3} color={Colors.white}>
                        Our Team
                    </SectionHeaderText>
                    <Row>
                        <ImageGallery images={Images.execs} maxPerColumn={3} />
                        <Spacer width={54} />
                    </Row>
                    <Spacer height={72} />
                </Section3>
            </Container>
        );
    }
}
