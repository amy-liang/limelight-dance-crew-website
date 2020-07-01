import * as React from "react";
import { Text } from "./shared/Text";
import styled from "styled-components";
import { Colors, Dimensions } from "../stores/Constants";
import { Spacer } from "./shared/Spacer";

const Container = styled.div`
    padding-top: ${Dimensions.headerHeight}px;
    height: 100vh;
    background-color: ${Colors.blue1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ComingSoon = () => (
    <Container>
        <Spacer height={100} />
        <Text color={Colors.white} size={4}>
            THIS PAGE IS COMING SOON!
        </Text>
    </Container>
);
