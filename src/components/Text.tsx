import * as React from "react";
import styled from 'styled-components';
import {Colors} from "../stores/Constants";

const Paragraph = styled.p`
    font-size: ${props => props.fontSize}px;
    color: ${props => props.color};
    ${props => props.maxWidth ? `max-width: ${props.maxWidth}px;` : null}
    padding: ${props => props.padding};
    margin: 0px;
    letter-spacing: ${props => props.kerning}px;
    text-align: ${props => props.textAlign};
    line-height: ${props => props.lineHeight};
    font-weight: ${props => props.weight};
`

interface IProps {
    size?: number,
    color?: string,
    maxWidth?: number,
    padding?: number,
    kerning?: number,
    align?: string,
    lineHeight?: number,
    className?: any,
}

export class Text extends React.Component<IProps> {
    render() {
        const { color, size, maxWidth, padding, kerning, align, lineHeight, className } = this.props;

        let fontSize, letterSpacing, weight = 0;
        switch(size) {
            case 1:
                fontSize = 12;
                weight = 400;
                break;
            case 2:
                fontSize = 16;
                weight = 300;
                break;
            case 3:
                fontSize = 24;
                letterSpacing = 6;
                weight = 300;
                break;
            case 4:
                fontSize = 48;
                letterSpacing = 10;
                weight = 500;
                break;
            default:
                fontSize = 12;
                weight = 300;
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
                color={color ? color : Colors.mainBlue}
                maxWidth={maxWidth}
                padding={paddingString}
                kerning={letterSpacing}
                textAlign={align ? align : "auto"}
                lineHeight={lineHeight ? lineHeight : "auto"}
                weight={weight}
                className={className}
            >
            {this.props.children}
        </Paragraph>
    }
}
