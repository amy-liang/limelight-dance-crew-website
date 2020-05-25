import * as React from "react";
import {Column} from "./Column";
import {Text} from "./Text";
import styled from 'styled-components';
import {Colors} from "../stores/Constants";
import {Row} from "./Row";
import {IImage} from "../stores/Interfaces";

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
    transition: all 0.2s ease-in-out;
    :hover {
        opacity: 0.6
    }
    .title {
        width: 100%;
        position: absolute;
        transition: all 0.2s ease-in-out;
        opacity: 1;
    }
    .subtitle {
        width: 100%;
        position: absolute;
        transition: all 0.2s ease-in-out;
        opacity: 0;
    }
    :hover .title {
        opacity: 0;
    }
    :hover .subtitle {
        opacity: 1;
    }
`

const ImageRowContainer = styled(Row)`
    padding-bottom: 32px;
`

const ImageTextContainer = styled(Column)`
    position: absolute;
    width: 100%;
    bottom: 24px;
    left: 10px;
`

interface IProps {
    images: IImage[],
    maxPerColumn?: number,
}

export class ImageGallery extends React.Component<IProps>{
    render() {
        const { images } = this.props;

        const imagesRender: {
            url: string,
            link: string,
            title: string,
            subtitle: string,
        }[][] = [];

        let maxPerColumn = this.props.maxPerColumn ? this.props.maxPerColumn : 3;
        for (let i = 0; i < images.length; i += maxPerColumn) {
            const imageRow: any[] = [];
            for (let j = i; j < i + maxPerColumn; j++) {
                imageRow.push(images[j]);
            }
            imagesRender.push(imageRow);
        }

        return <Column>
            {imagesRender.map(imageRow => {
                return <ImageRowContainer>
                    {imageRow.map((image, index) => {
                        return <ImageContainer url={image.url}>
                            <ImageTextContainer>
                                <Text className={"title"} size={3} color={Colors.white}>{image.title}</Text>
                                <Text className={"subtitle"} size={2} color={Colors.white}>{image.subtitle}</Text>
                            </ImageTextContainer>
                        </ImageContainer>
                    })}
                </ImageRowContainer>
            })
        }
        </Column>
    }
}