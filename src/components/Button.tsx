import * as React from "react";
import styled from 'styled-components';
import {Color} from "../stores/Constants";

const Container = styled.div`
    width: fit-content;
    padding: 12px 24px;
    border: 1px solid ${props => props.color};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover {
        background-color: ${props => props.color};
        color: white;
    }
`

const Paragraph = styled.p`
    text-transform: uppercase;
    letter-spacing: 2px;
`

interface IProps {
    text: string,
    onClick: () => void,
    color?: string,
}

export class Button extends React.Component<IProps> {
    render() {
        const { text, onClick, color } = this.props;

        return <Container onClick={onClick} color={color ? color : Color.mainBlue}>
            <Paragraph>{text}</Paragraph>
        </Container>
    }
}
