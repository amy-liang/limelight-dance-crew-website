import * as React from "react";
import styled from 'styled-components';
import { Column } from "./Column";
import { Colors } from "../stores/Constants";
import { Link } from "react-router-dom"

interface IProps {
    title: string,
    link: string,
    active: boolean
}

const HeaderItemContainer = styled(Column)`
    justify-content: center;
    padding: 16px 32px;
    cursor: pointer;
    border-bottom: 1px ${Colors.mainBlue} solid;
    transition: all 0.4s ease-in-out;
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
                <Link to={this.props.link}>
                    <HeaderItemText>{this.props.title}</HeaderItemText>
                </Link>
            </HeaderItemContainer>
    }
}