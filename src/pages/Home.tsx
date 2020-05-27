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
import { TextSlider } from "../components/TextSlider";

const Container = styled(Column)`
    width: 100%;
`;

const Section1 = styled(Column)`
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: url("${Images.banner}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const Section2 = styled(Column)`
    width: 100%;
    height: 100%;
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

const Section3 = styled(Column)`
    width: 100%;
    align-items: flex-end;
    background-color: ${Colors.blue1};
    position: relative;
`;

const SectionHeaderText = styled(Text)`
    transform: rotate(-90deg);
    position: absolute;
    left: ${props => (props.left ? props.left : "-42px")};
    top: ${props => (props.top ? props.top : "150px")};
    text-transform: uppercase;
`;

const Section4 = styled(Column)`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: ${Colors.blue3};
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
                <Section4>
                    <Spacer height={72} />
                    <SectionHeaderText
                        left={"20px"}
                        top={"100px"}
                        size={3}
                        color={Colors.white}
                    >
                        Q&A
                    </SectionHeaderText>
                    <Row padding={"0 0 0 108px"} maxWidth={500}>
                        <TextSlider sections={sections} />
                    </Row>
                    <Spacer height={72} />
                </Section4>
            </Container>
        );
    }
}

const sections = [
    {
        title: "Does Limelight teach classes?",
        paragraph:
            "Yes! Limelight teaches tutorial classes every Friday at the University of Waterloo. For more information, check out our tutorial page"
    },
    {
        title: "How can I join a cover or performance?",
        paragraph:
            "Covers and performances are announced depending on the interest and availability of our members. Find out how to become a member here!"
    },
    {
        title:
            "Can I join as a social media manager / videographer / editor / makeup artist?",
        paragraph:
            "Yes! Limelight holds executive team applications before the beginning of every term (January, May, September). We have many open positions for You do not have to be a member or University of Waterloo student or member to apply"
    },
    {
        title:
            "Can I join Limelight if I don't go to the University  of Waterloo?",
        paragraph:
            "You definitely can! Limelight is not officially affiliated with the University. Certain performances may have restrictions on member demographics, but that will be made clear in the sign up form."
    },
    {
        title:
            "How many practices happen in a week if I join a cover or performance?",
        paragraph:
            "Practice schedules are determined by the performance coordinator leading the cover/performance, but generally, you can expect around 2-3 practices per week (ranging in length from 1-3 hours)."
    },
    {
        title:
            "I'm interested in joining this cover/performance, but I'm in 10 other clubs, have 3 midterms, and co-op interviews, what's the commitment level like?",
        paragraph:
            "Practice times are usually adjusted to fit the schedules of the participating members. However, in joining a cover or performance, you are expected to do your best to attend all practices possible. If you can't make a practice (for a valid reason), it's your responsibility to catch up!"
    }
];
