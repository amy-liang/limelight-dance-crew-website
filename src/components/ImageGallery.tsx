import * as React from "react";
import { Column } from "./shared/Column";
import styled from "styled-components";
import { Colors } from "../stores/Constants";
import { Row } from "./shared/Row";
import { IImage } from "../stores/Interfaces";

const ImageContainer = styled.div`
    width: 260px;
    height: 260px;
    margin: 0 16px;
    background-image: url("${props => props.url}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;
    :hover h3 {
        transform: translateY(${props => (props.y ? props.y : -30)}px);
    }
    :hover p {
        transform: translateY(-30px);
        transition-delay: 0.2s;
        opacity: 1;
    }
`;

const ImageRowContainer = styled(Row)`
    padding-bottom: 32px;
`;

const ImageTextContainer = styled(Column)`
    position: absolute;
    width: 100%;
    bottom: 70px;
    left: 10px;
`;

const Title = styled.h3`
    color: white;
    background-color: ${Colors.transparentBlue1};
    padding: 10px;
    font-weight: 300;
    letter-spacing: 6px;
    text-transform: uppercase;
    position: absolute;
    transition: all 0.2s ease-in-out;
`;

const Subtitle = styled.p`
    color: white;
    width: 100%;
    position: absolute;
    bottom: -110px;
    transition: all 0.2s ease-in-out;
    transition-delay: 0s;
    opacity: 0;
    font-size: 18px;
`;

interface IProps {
    images: IImage[];
    maxPerColumn?: number;
}

export class ImageGallery extends React.Component<IProps> {
    render() {
        const { images } = this.props;

        const imagesRender: {
            url: string;
            link: string;
            title: string;
            subtitle: string;
        }[][] = [];

        let maxPerColumn = this.props.maxPerColumn
            ? this.props.maxPerColumn
            : 3;
        for (let i = 0; i < images.length; i += maxPerColumn) {
            const imageRow: any[] = [];
            for (let j = i; j < i + maxPerColumn; j++) {
                imageRow.push(images[j]);
            }
            imagesRender.push(imageRow);
        }

        return (
            <Column>
                {imagesRender.map((imageRow, index) => {
                    return (
                        <ImageRowContainer key={index}>
                            {imageRow.map((image, index) => {
                                let y = image.subtitle.length > 25 ? -50 : -30;
                                return (
                                    <ImageContainer
                                        key={image.title}
                                        y={y}
                                        url={image.url}
                                    >
                                        <ImageTextContainer>
                                            <Title>{image.title}</Title>
                                            <Subtitle>
                                                {image.subtitle}
                                            </Subtitle>
                                        </ImageTextContainer>
                                    </ImageContainer>
                                );
                            })}
                        </ImageRowContainer>
                    );
                })}
            </Column>
        );
    }
}
