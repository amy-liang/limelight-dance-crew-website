import * as React from "react";
import styled from "styled-components";
import { Colors, Dimensions, Images } from "../stores/Constants";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { Column } from "../components/Column";
import { Row } from "../components/Row";
import { Link } from "react-router-dom";

const Container = styled.div`
    margin-top: ${Dimensions.headerHeight}px;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Section1 = styled(Column)`
    width: 50vw;
    height: 100vh;
    justify-content: center;
    position: absolute;
    background-color: ${Colors.blue1};
    > * {
        padding-left: 36px;
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
    background-position: 100px;
`;

const StyledTitleText = styled(Text)`
    background-color: ${Colors.transparentBlue1};
`;

const Section2 = styled(Row)`
    width: 100%;
    padding: 16px 0;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.lightBlue};
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
                    <Text size={3} color={Colors.white}>
                        Participate in our covers and performances!
                    </Text>
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
            </Container>
        );
    }
}
