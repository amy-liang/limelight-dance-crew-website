import * as React from "react";
import {Column} from "./Column";
import {Text} from "./Text";
import styled from 'styled-components';
import {Colours} from "../stores/Constants";
import {Row} from "./Row";

const Container = styled(Row)`
    width: 100%;
    height: fit-content;
    ${props => props.offset ? `left: -140px;` : null}
    position: relative;
`

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
`

const ImageTextContainer = styled(Column)`
    position: absolute;
    bottom: 10px;
    left: 10px;
`

interface IProps {
    images: {
       url: string,
       link: string,
       title: string,
       subtitle: string,
    }[],
    offset?: boolean,
}

export class ImageCarousel extends React.Component<IProps>{
    render() {
        return <Container offset={this.props.offset}>
            {this.props.images.map(image => {
                return <a href={image.link} target={"_blank"} rel="noopener noreferrer">
                    <ImageContainer url={image.url}>
                        <ImageTextContainer>
                            <Text text={image.title} color={Colours.white}/>
                            <Text text={image.subtitle} color={Colours.white}/>
                        </ImageTextContainer>
                </ImageContainer></a>
            })}
        </Container>
    }
}