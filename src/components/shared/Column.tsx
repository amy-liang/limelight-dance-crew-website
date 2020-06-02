import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${props => (props.padding ? props.padding : "0px")};
`;

interface IProps {
    className?: any;
    padding?: string;
}

export class Column extends React.Component<IProps> {
    render() {
        return (
            <Container
                padding={this.props.padding}
                className={this.props.className}
            >
                {this.props.children}
            </Container>
        );
    }
}
