import * as React from "react";
import {HeaderItem} from "./HeaderItem";
import logo from "../logo.svg"
import styled from 'styled-components';
import {Row} from "./Row";
import {Colours, Sizes} from "../stores/Constants";

const HeaderLogo = styled.img`
    width: 80px;
    height: 80px;
`

const HeaderContainer = styled.div`
    width: 100vw;
    height: ${Sizes.headerHeight}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 100;
    background-color: ${Colours.mainBlue};
`

const HeaderItemContainer = styled(Row)`
    height: 100%;
`

export class Header extends React.Component {
    render() {
        return <HeaderContainer>
            <a href={"/"}><HeaderLogo src={logo}/></a>
            <HeaderItemContainer>
                <HeaderItem title={"Videos"} link={""} active={false}/>
                <HeaderItem title={"Membership"} link={""} active={false}/>
                <HeaderItem title={"Shop"} link={""} active={false}/>
                <HeaderItem title={"Locations"} link={""} active={false}/>
            </HeaderItemContainer>
        </HeaderContainer>
    }
}