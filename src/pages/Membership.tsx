import * as React from "react";
import styled from "styled-components";
import { Colors, Dimensions, Images } from "../stores/Constants";
import { Text } from "../components/shared/Text";
import { Button } from "../components/shared/Button";
import { Column } from "../components/shared/Column";
import { Row } from "../components/shared/Row";
import { Link } from "react-router-dom";
import { MembershipPanel } from "../components/MembershipPanel";
import jump from "../resources/jump.svg";
import announcement from "../resources/announcement.svg";
import video from "../resources/video.svg";
import fireCracker from "../resources/fire-cracker.svg";
import { Spacer } from "../components/shared/Spacer";

const Container = styled.div`
    padding-top: ${Dimensions.headerHeight}px;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Section1 = styled(Column)`
    width: 60vw;
    height: 100vh;
    justify-content: center;
    position: absolute;
    background-color: ${Colors.blue1};
    > * {
        margin-left: 36px;
    }
`;

const Section1Image = styled.div`
    width: 75vw;
    align-self: flex-end;
    height: 100vh;
    position: relative;
    background-image: url("${Images.victoriaParkPerformance}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 150px;
`;

const StyledTitleText = styled(Text)`
    background-color: ${Colors.transparentBlue1};
`;

const Section2 = styled(Row)`
    width: 100%;
    padding: 32px 0;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.lightBlue};
`;

const Section3 = styled(Column)`
    width: 100%;
    background-color: ${Colors.blue2};
    padding: 48px 0px;
`;

const Section4 = styled(Column)`
    width: 100%;
    background-color: ${Colors.blue1};
    padding: 48px 0px;
    * {
        color: ${Colors.white};
    }
`;

const Divider = styled.div`
    margin-top: 20px;
    width: 200px;
    height: 1px;
    background-color: ${Colors.white};
`;

const CurrentlySuspended = styled(Text)`
    width: 100%;
    padding: 32px 0px;
    border: 1px solid ${Colors.white};
    text-align: center;
`;

export class Membership extends React.Component {
    render() {
        return (
            <Container>
                <Section1Image />
                <Section1>
                    <StyledTitleText size={4} color={Colors.white}>
                        MEMBERSHIP
                    </StyledTitleText>
                    <Spacer height={16} />
                    <Text size={3} color={Colors.white}>
                        Join our covers and performances!
                    </Text>
                    <Spacer height={16} />
                    <Text color={Colors.white}>
                        $7 before the beginning of term event. $10 afterwards.
                    </Text>
                    <Spacer height={80} />
                    <Button text={"BUY NOW"} color={Colors.lightBlue} />
                </Section1>
                <Section2>
                    <Row verticalAlignment={"center"} padding={"0 0 0 36px"}>
                        <Text size={3}>TUTORIALS // </Text>
                        <Text size={2} padding={"0 0 0 14px"}>
                            Our weekly tutorial classes are FREE for
                            non-members!
                        </Text>
                    </Row>
                    <Link to={"/tutorials"}>
                        <Button
                            margin={"0 32px 0 0"}
                            small
                            text={"Learn More"}
                        />
                    </Link>
                </Section2>
                <Section3>
                    <Text size={3} padding={"0 36px"} color={Colors.white}>
                        COVERS
                    </Text>
                    <Spacer height={36} />
                    <Row>
                        <Spacer width={36} />
                        <MembershipPanel
                            icon={announcement}
                            title={"An announcement is made"}
                            number={1}
                        >
                            A cover is announced in our Messenger groups and
                            Facebook page based on the interests of our members
                            and the availability of our performance coordinators
                        </MembershipPanel>
                        <MembershipPanel
                            icon={jump}
                            title={"Learn the dance"}
                            number={2}
                        >
                            A snippet of the dance to be covered is usually
                            taught in one of our tutorial sessions (link to
                            schedule). In cases where the timing does not work
                            out, you may have to learn the dance by yourself!
                        </MembershipPanel>
                        <MembershipPanel
                            icon={video}
                            title={"Send your audition video"}
                            number={3}
                        >
                            Send your video via email to
                            limelightdanceauditions@gmail.com, including your
                            name. Make sure you have purchased membership as
                            well!
                        </MembershipPanel>
                        <MembershipPanel
                            icon={fireCracker}
                            title={"You made it!"}
                            number={4}
                        >
                            A decision on the final lineup will be made by the
                            performance coordinators, and announced on our
                            social media. Congratulations, you’re now in a
                            Limelight cover!
                        </MembershipPanel>
                        <Spacer width={36} />
                    </Row>
                </Section3>
                <Section4>
                    <Row verticalAlignment={"center"}>
                        <Column padding={"0 36px"}>
                            <Text size={3} color={Colors.white}>
                                PERFORMANCES
                            </Text>
                            <Spacer height={20} />
                            <Text size={2} maxWidth={480}>
                                We perform at various community events around
                                Waterloo region and the Toronto area
                            </Text>
                            <Divider />
                            <Spacer height={48} />
                            <Text size={2}>Upcoming Performances:</Text>
                            <Spacer height={16} />
                            <CurrentlySuspended>
                                Currently suspended due to COVID-19
                            </CurrentlySuspended>
                            <Spacer height={32} />
                            <Text size={2}>Seasonal Performances:</Text>
                            <Spacer height={32} />
                            <Row>
                                <Column>
                                    <Text size={2}>Winter</Text>
                                    <Spacer height={8} />
                                    <Text>Fashion for Change</Text>
                                    <Text>Chinese New Year Gala</Text>
                                </Column>
                                <Spacer width={32} />
                                <Column>
                                    <Text size={2}>Spring</Text>
                                    <Spacer height={8} />
                                    <Text>Renison</Text>
                                    <Text>Multicultural Festival</Text>
                                    <Text>Changwon K-Pop World Festival</Text>
                                </Column>
                                <Spacer width={32} />
                                <Column>
                                    <Text size={2}>Fall</Text>
                                    <Spacer height={8} />
                                    <Text>Community</Text>
                                </Column>
                            </Row>
                        </Column>
                        <Spacer width={48} />
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/C69sWRbLlUw"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </Row>
                </Section4>
            </Container>
        );
    }
}
