import * as React from "react";
import {HeaderItem} from "./HeaderItem";
import logo from "../logo.svg"
import styled from 'styled-components';
import {Row} from "./Row";

const HeaderLogo = styled.img`
    width: 64px;
    height: 64px;
`

const HeaderContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
`

const HeaderItemContainer = styled(Row)`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export class Header extends React.Component {
    render() {
        return <HeaderContainer>
            <a href={"/"}><HeaderLogo src={logo}/></a>
            <HeaderItemContainer>
                <HeaderItem title={"Videos"} link={""} active={false}/>
                <HeaderItem title={"Membership"} link={""} active={false}/>
                <HeaderItem title={"Shop"} link={""} active={false}/>
                <HeaderItem title={"Contact Us"} link={""} active={false}/>
            </HeaderItemContainer>
        </HeaderContainer>
    }
}