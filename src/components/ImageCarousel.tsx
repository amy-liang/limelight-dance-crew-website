import * as React from "react";
import { Column } from "./shared/Column";
import { Text } from "./shared/Text";
import styled from "styled-components";
import { Colors } from "../stores/Constants";
import { Row } from "./shared/Row";
import { IImage } from "../stores/Interfaces";

const Container = styled(Row)`
    width: 100%;
    height: fit-content;
    ${props => (props.offset ? `left: -140px;` : null)}
    position: relative;
`;

const ImageContainer = styled.div`
    width: 240px;
    height: 135px;
    margin: 0 8px;
    background-image: url("${props => props.url}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover {
        transform: scale(1.1);
    }
    div {
        opacity: 0;
        transition: all 0.2s ease-in-out;
    }
    :hover div {
        opacity: 1;
    }
`;

const ImageTextContainer = styled(Column)`
    position: absolute;
    bottom: 10px;
    left: 10px;
`;

interface IProps {
    images: IImage[];
    offset?: boolean;
}

export class ImageCarousel extends React.Component<IProps> {
    render() {
        return (
            <Container offset={this.props.offset}>
                {this.props.images.map(image => {
                    return (
                        <a
                            href={image.link}
                            target={"_blank"}
                            rel="noopener noreferrer"
                            key={image.title}
                        >
                            <ImageContainer url={image.url}>
                                <ImageTextContainer>
                                    <Text size={2} color={Colors.white}>
                                        {image.title}
                                    </Text>
                                    <Text color={Colors.white}>
                                        {image.subtitle}
                                    </Text>
                                </ImageTextContainer>
                            </ImageContainer>
                        </a>
                    );
                })}
            </Container>
        );
    }
}
