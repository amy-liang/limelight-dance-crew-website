import * as React from "react";
import styled from "styled-components";
import { Column } from "./Column";
import { Text } from "./Text";
import { Colors } from "../stores/Constants";
import { observer } from "mobx-react";
import { action, observable } from "mobx";
import { Row } from "./Row";
import arrow from "../resources/arrow.svg";

const Container = styled(Row)`
    justify-content: space-between;
    align-items: center;
`;

const TitleDiv = styled.div`
    cursor: pointer;
    padding-top: 16px;
    border-bottom: 0.5px solid ${Colors.white};
    height: 100%;
    position: relative;
`;

const Paragraph = styled(Text)`
    transition: all ${props => (props.isExpanded ? "0.6s" : "0.4s")} linear;
    height: 100%;
    max-height: ${props => (props.isExpanded ? "300px" : "0px")};
    margin: 10px 0px;
    line-height: 1.8;
    overflow: hidden;
    a {
        color: white;
        text-decoration: underline;
    }
`;

const ArrowIcon = styled.img`
    width: 12px;
    height: 12px;
    margin-left: 20px;
    transition: all 0.4s ease-in-out;
    transform: ${props =>
        props.isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
`;

interface IProps {
    title: string;
}

@observer
export class TextSlider extends React.Component<IProps> {
    @observable
    isExpanded: boolean;

    @action
    toggleExpanded = () => {
        this.isExpanded = !this.isExpanded;
    };

    render() {
        return (
            <Column>
                <TitleDiv
                    onClick={() => this.toggleExpanded()}
                    isExpanded={this.isExpanded}
                >
                    <Container>
                        <Text color={Colors.white} size={2}>
                            {this.props.title}
                        </Text>
                        <ArrowIcon src={arrow} isExpanded={this.isExpanded} />
                    </Container>
                    <Paragraph
                        color={Colors.white}
                        isExpanded={this.isExpanded}
                    >
                        {this.props.children}
                    </Paragraph>
                </TitleDiv>
            </Column>
        );
    }
}
