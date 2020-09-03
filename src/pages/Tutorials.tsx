import * as React from "react";
import styled from "styled-components";
import { Colors, Dimensions } from "../stores/Constants";
import { Spacer } from "../components/shared/Spacer";
import { Text } from "../components/shared/Text";
import { Column } from "../components/shared/Column";

const Container = styled.div`
    padding-top: ${Dimensions.headerHeight}px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Section1 = styled(Column)`
    height: 100vh;
    justify-content: center;
    background-color: ${Colors.blue1};
    > * {
        margin-left: 36px;
    }
`;

export class Tutorials extends React.Component {
    render() {
        return (
            <Container>
                <Section1>
                    <Text size={4} color={Colors.white}>
                        TUTORIALS
                    </Text>
                    <Spacer height={16} />
                    <Text size={3} color={Colors.white}>
                        Free and open to all
                    </Text>
                </Section1>
            </Container>
        );
    }
}
