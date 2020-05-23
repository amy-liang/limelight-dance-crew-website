import * as React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

export class Row extends React.Component {
    render() {
        return <Container>
            {this.props.children}
        </Container>
    }
}