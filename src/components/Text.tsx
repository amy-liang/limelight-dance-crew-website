import * as React from "react";
import styled from 'styled-components';
import {Colours} from "../stores/Constants";

const Paragraph = styled.p`
    font-size: ${props => props.fontSize}px;
    color: ${props => props.color};
    ${props => props.maxWidth ? `max-width: ${props.maxWidth}px;` : null}
    padding: ${props => props.padding};
    margin: 0px;
    letter-spacing: ${props => props.kerning}px;
    text-align: ${props => props.textAlign};
    line-height: ${props => props.lineHeight};
`

interface IProps {
    text: string,
    size?: number,
    color?: string,
    maxWidth?: number,
    padding?: number,
    kerning?: number,
    align?: string;
    lineHeight?: number;
    // paddingLeft?: number,
    // paddingRight?: number,
    // paddingTop?: number,
    // paddingBottom?: number,
}

export class Text extends React.Component<IProps> {
    render() {
        const { color, text, size, maxWidth, padding, kerning, align, lineHeight } = this.props;

        let fontSize;
        let letterSpacing = 0;
        switch(size) {
            case 1:
                fontSize = 12;
                break;
            case 2:
                fontSize = 16;
                break;
            case 3:
                fontSize = 24;
                letterSpacing = 6;
                break;
            case 4:
                fontSize = 48;
                letterSpacing = 10;
                break;
            default:
                fontSize = 12;
        }

        let paddingString = "0px";
        if (padding) {
            paddingString = padding + "px";
        }

        if (kerning) {
            letterSpacing = kerning;
        }

        return <Paragraph
                fontSize={fontSize}
                color={color ? color : Colours.mainBlue}
                maxWidth={maxWidth}
                padding={paddingString}
                kerning={letterSpacing}
                textAlign={align ? align : "auto"}
                lineHeight={lineHeight ? lineHeight : "auto"}
            >
            {text}
        </Paragraph>
    }
}
