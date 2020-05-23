import * as React from "react";
import styled from 'styled-components';

interface IProps {
    title: string,
    link: string,
    active: boolean
}

const HeaderItemContainer = styled.div`
    padding: 16px 32px;
    cursor: pointer;
`

const HeaderItemText = styled.p`
    color: white;
    font-size: 12px;
    font-weight: 200;
    letter-spacing: 6px;
    text-transform: uppercase;
`

export class HeaderItem extends React.Component<IProps>{
    render() {
        return <HeaderItemContainer>
                <HeaderItemText>{this.props.title}</HeaderItemText>
            </HeaderItemContainer>
    }
}