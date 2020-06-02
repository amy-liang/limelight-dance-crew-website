import * as React from "react";
import styled from "styled-components";
import { Colors } from "../../stores/Constants";

const Container = styled.div`
    width: fit-content;
    padding: ${props => (props.small ? "10px 16px" : "12px 24px")};
    border: 1px solid ${props => props.color};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover {
        background-color: ${props => props.color};
        color: white;
    }
    margin: ${props => (props.margin ? props.margin : "0px")};
`;

const Paragraph = styled.p`
    text-transform: uppercase;
    letter-spacing: 2px;
`;

interface IProps {
    text: string;
    onClick?: () => void;
    color?: string;
    small?: boolean;
    margin?: string;
}

export class Button extends React.Component<IProps> {
    render() {
        const { text, onClick, color, small, margin } = this.props;

        return (
            <Container
                margin={margin}
                small={small}
                onClick={onClick}
                color={color ? color : Colors.blue1}
            >
                <Paragraph>{text}</Paragraph>
            </Container>
        );
    }
}
