import * as React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

interface IProps {
    className?: any
}

export class Row extends React.Component<IProps> {
    render() {
        return <Container className={this.props.className}>
            {this.props.children}
        </Container>
    }
}
