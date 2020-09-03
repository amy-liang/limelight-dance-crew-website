import * as React from "react";
import styled from "styled-components";
import { Column } from "./shared/Column";
import { Text } from "./shared/Text";
import { Colors } from "../stores/Constants";
import { Spacer } from "./shared/Spacer";

const Container = styled(Column)`
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin: 10px;
    padding: 20px;
    border: 1px solid white;
    width: 25%;
    min-height: 280px;
    max-width: 300px;
    word-break: break-word;
    position: relative;
    * {
        color: white;
    }
`;

const FloatingNumber = styled.p`
    color: transparent;
    font-size: 100px;
    position: absolute;
    top: -50px;
    left: -10px;
    -webkit-text-stroke: 1px white;
`;

const Icon = styled.img`
    width: 64px;
    height: 64px;
`;

interface IProps {
    title: string;
    number: number;
    icon: any;
}

export class MembershipPanel extends React.Component<IProps> {
    render() {
        return (
            <Container>
                <FloatingNumber>{this.props.number}</FloatingNumber>
                <Spacer height={24} />
                <Icon src={this.props.icon} />
                <Spacer height={24} />
                <Text color={Colors.white} size={2}>
                    {this.props.title}
                </Text>
                <Spacer height={24} />
                <Text color={Colors.white} lineHeight={2}>
                    {this.props.children}
                </Text>
            </Container>
        );
    }
}
