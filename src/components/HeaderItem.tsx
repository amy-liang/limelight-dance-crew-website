import * as React from "react";
import styled from 'styled-components';
import {Column} from "./Column";
import {Colours} from "../stores/Constants";

interface IProps {
    title: string,
    link: string,
    active: boolean
}

const HeaderItemContainer = styled(Column)`
    justify-content: center;
    padding: 16px 32px;
    cursor: pointer;
    border-bottom: 1px ${Colours.mainBlue} solid;
    :hover {
        border-bottom: 1px #ffffff solid;
    }
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