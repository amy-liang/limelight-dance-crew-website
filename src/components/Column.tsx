import * as React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Column = ({ className, children }) => (
    <Container className={className}>
        {children}
    </Container>
);
