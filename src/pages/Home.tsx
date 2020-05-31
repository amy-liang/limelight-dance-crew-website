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
import { action, observable } from "mobx";
import { GlobalStore } from "../stores/GlobalStore";
import { container } from "../inversify.config";
import TYPES from "../stores/Types";
import { YoutubeStore } from "../stores/YoutubeStore";
import { observer } from "mobx-react";
import { Loading } from "../components/Loading";

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

@observer
export class Home extends React.Component {
    @observable
    private youtubeStore: YoutubeStore = container.get(TYPES.YoutubeStore);

    @observable
    private isLoading: boolean = true;

    @action
    private setLoading = (loading: boolean) => {
        this.isLoading = loading;
    };

    componentDidMount() {
        this.youtubeStore
            .fetchYoutubeVideos()
            .then(() => this.setLoading(false));
    }

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
                    {this.isLoading ? (
                        <Loading />
                    ) : (
                        <React.Fragment>
                            <ImageCarousel
                                images={this.youtubeStore
                                    .getVideosByIndex(0, 6)
                                    .map(video => {
                                        return {
                                            url: video.thumbnail_url,
                                            link: video.url,
                                            title: video.title
                                        };
                                    })}
                            />
                            <Spacer height={16} />
                            <ImageCarousel
                                images={this.youtubeStore
                                    .getVideosByIndex(6, 13)
                                    .map(video => {
                                        return {
                                            url: video.thumbnail_url,
                                            link: video.url,
                                            title: video.title
                                        };
                                    })}
                                offset={true}
                            />
                        </React.Fragment>
                    )}
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
                        <Column>
                            {sections.map(section => {
                                return (
                                    <TextSlider title={section.title}>
                                        {section.paragraph}
                                    </TextSlider>
                                );
                            })}
                        </Column>
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
        paragraph: (
            <p>
                Yes! Limelight teaches tutorial classes every Friday at the
                University of Waterloo. For more information, check out
                our&nbsp;
                <Link to={"/tutorials"}>tutorial page</Link>
            </p>
        )
    },
    {
        title: "How can I join a cover or performance?",
        paragraph: (
            <p>
                Covers and performances are announced depending on the interest
                and availability of our members. Find out how to become a
                member&nbsp;
                <Link to={"membership"}>here</Link>!
            </p>
        )
    },
    {
        title:
            "Can I join as a social media manager / videographer / editor / makeup artist?",
        paragraph: (
            <p>
                Yes! Limelight holds executive team applications before the
                beginning of every term (January, May, September). We have many
                open positions for those with experience in leading, marketing,
                designing, filming, and more. Sign ups are currently: closed.
            </p>
        )
    },
    {
        title:
            "Can I join Limelight if I don't go to the University  of Waterloo?",
        paragraph: (
            <p>
                You definitely can! Limelight is not officially affiliated with
                the University. Certain performances may have restrictions on
                member demographics, but that will be made clear in the sign up
                form.
            </p>
        )
    },
    {
        title:
            "How many practices happen in a week if I join a cover or performance?",
        paragraph: (
            <p>
                Practice schedules are determined by the performance coordinator
                leading the cover/performance, but generally, you can expect
                around 2-3 practices per week (ranging in length from 1-3
                hours).
            </p>
        )
    },
    {
        title:
            "I'm interested in joining this cover/performance, but I'm in 10 other clubs, have 3 midterms, and co-op interviews, what's the commitment level like?",
        paragraph: (
            <p>
                Practice times are usually adjusted to fit the schedules of the
                participating members. However, in joining a cover or
                performance, you are expected to do your best to attend all
                practices possible. If you can't make a practice (for a valid
                reason), it's your responsibility to catch up!
            </p>
        )
    }
];
