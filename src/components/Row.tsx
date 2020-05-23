import * as React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

export const Row = ({ className, children }) => (
    <Container className={className}>
        {children}
    </Container>
);
