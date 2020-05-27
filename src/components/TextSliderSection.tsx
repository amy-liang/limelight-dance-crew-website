import * as React from "react";
import styled from "styled-components";
import { Column } from "./Column";
import { Text } from "./Text";
import { Colors } from "../stores/Constants";
import { observer } from "mobx-react";
import { action, observable } from "mobx";

const TitleDiv = styled.div`
    cursor: pointer;
    padding: 16px 0px;
    border-bottom: 0.5px solid ${Colors.white};
    transition: all 0.4s ease-in-out;
    height: ${props => (props.isExpanded ? "100px" : "24px")};
    position: relative;
`;

const Paragraph = styled(Text)`
    position: absolute;
    transition: all 0.4s ease-in-out;
    opacity: ${props => (props.isExpanded ? "1" : "0")};
`;

interface IProps {
    title: string;
    paragraph: string;
}

@observer
export class TextSliderSection extends React.Component<IProps> {
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
                    <Text color={Colors.white} size={2}>
                        {this.props.title}
                    </Text>
                    {this.isExpanded && (
                        <Paragraph
                            color={Colors.white}
                            isExpanded={this.isExpanded}
                        >
                            {this.props.paragraph}
                        </Paragraph>
                    )}
                </TitleDiv>
            </Column>
        );
    }
}
