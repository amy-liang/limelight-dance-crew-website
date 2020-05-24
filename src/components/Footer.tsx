import * as React from "react";
import {Text} from "./Text";
import logo from "../logo.svg"
import styled from 'styled-components';
import {Row} from "./Row";
import {Color, Size} from "../stores/Constants";
import {Column} from "./Column";

const FooterContainer = styled(Row)`
    padding: 32px;
    background-color: ${Color.secondaryBlue};
    justify-content: space-between;
    p {
        padding-left: 16px;
    }
`

export class Footer extends React.Component {
    render() {
        return <FooterContainer>
                <Text color={Color.white}>Limelight Dance Crew Website &copy; 2020 Amy Liang</Text>
                <Row>
                    <Text color={Color.white}>Follow us on social media: </Text>
                    <Text>Email</Text>
                    <Text>Fb</Text>
                    <Text>Ins</Text>
                    <Text>YT</Text>
                    <Text>WC</Text>
                </Row>
        </FooterContainer>
    }
}