import * as React from "react";
import { HeaderItem } from "./HeaderItem";
import logo from "../resources/logo.svg";
import styled from "styled-components";
import { Row } from "./Row";
import { Colors, Dimensions } from "../stores/Constants";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { container } from "../inversify.config";
import { GlobalStore } from "../stores/GlobalStore";
import TYPES from "../stores/Types";
import { observable } from "mobx";

const HeaderLogo = styled.img`
    width: 80px;
    height: 80px;
    margin-left: 10px;
`;

const HeaderContainer = styled.div`
    width: 100vw;
    height: ${Dimensions.headerHeight}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 100;
    background-color: ${Colors.blue1};
    transition: all 0.5s ease-in-out;
    border-bottom: 0.5px solid
        ${props => (props.showWhiteBorder ? Colors.blue3 : Colors.blue1)};
`;

const HeaderItemContainer = styled(Row)`
    height: 100%;
`;

@observer
export class Header extends React.Component {
    @observable
    private globalStore: GlobalStore = container.get(TYPES.GlobalStore);

    render() {
        return (
            <HeaderContainer showWhiteBorder={!this.globalStore.atScrollTop}>
                <Link to={"/"}>
                    <HeaderLogo src={logo} />
                </Link>
                <HeaderItemContainer>
                    <HeaderItem
                        title={"Videos"}
                        link={"/videos"}
                        active={false}
                    />
                    <HeaderItem
                        title={"Membership"}
                        link={"/membership"}
                        active={false}
                    />
                    <HeaderItem
                        title={"Schedule"}
                        link={"/schedule"}
                        active={false}
                    />
                    <HeaderItem
                        title={"Contact"}
                        link={"/contact"}
                        active={false}
                    />
                </HeaderItemContainer>
            </HeaderContainer>
        );
    }
}
