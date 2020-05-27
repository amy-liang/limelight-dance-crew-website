import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${props => (props.alignItems ? props.alignItems : "auto")};
    padding: ${props => (props.padding ? props.padding : "0px")};
    max-width: ${props => (props.maxWidth ? props.maxWidth + "px" : "inherit")};
`;

interface IProps {
    className?: any;
    padding?: string;
    verticalAlignment?: string;
    maxWidth?: number;
}

export class Row extends React.Component<IProps> {
    render() {
        return (
            <Container
                className={this.props.className}
                alignItems={this.props.verticalAlignment}
                padding={this.props.padding}
                maxWidth={this.props.maxWidth}
            >
                {this.props.children}
            </Container>
        );
    }
}
