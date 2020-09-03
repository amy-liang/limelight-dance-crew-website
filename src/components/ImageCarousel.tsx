import * as React from "react";
import styled from "styled-components";
import { Row } from "./shared/Row";
import { IImage } from "../stores/Interfaces";

const Container = styled(Row)`
    width: 100%;
    ${props => (props.offset ? `left: -140px;` : null)}
    position: relative;
`;

const ImageContainer = styled.img`
    width: 20vw;
    height: 11vw;
    object-fit: cover;
    margin: 0 8px;
    position: relative;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    :hover {
        transform: scale(1.07);
    }
    div {
        opacity: 0;
        transition: all 0.2s ease-in-out;
    }
    :hover div {
        opacity: 1;
    }
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
                            <ImageContainer src={image.url} />
                        </a>
                    );
                })}
            </Container>
        );
    }
}
