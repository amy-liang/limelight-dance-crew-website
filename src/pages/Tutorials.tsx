import * as React from "react";
import styled from "styled-components";
import { Colors, Dimensions, Images } from "../stores/Constants";
import { Spacer } from "../components/Spacer";
import { Text } from "../components/Text";
import { ImageCarousel } from "../components/ImageCarousel";
import { Button } from "../components/Button";
import { Column } from "../components/Column";
import { ImageGallery } from "../components/ImageGallery";
import { Row } from "../components/Row";

const Container = styled.div`
    margin-top: ${Dimensions.headerHeight}px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export class Tutorials extends React.Component {
    render() {
        return <Container>SCHEDULE</Container>;
    }
}
