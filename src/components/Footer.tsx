import * as React from "react";
import { Text } from "./Text";
import styled from "styled-components";
import { Row } from "./Row";
import { Colors, Urls } from "../stores/Constants";
import youtube from "../resources/youtube.svg";
import instagram from "../resources/instagram.svg";
import wechat from "../resources/wechat.svg";
import facebook from "../resources/facebook.svg";
import mail from "../resources/mail.svg";

const FooterContainer = styled(Row)`
    padding: 32px;
    background-color: ${Colors.blue2};
    justify-content: space-between;
    p {
        padding-left: 16px;
    }
`;

const SocialMediaIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 20px;
`;

export class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <Text color={Colors.white}>
                    Limelight Dance Crew Website &copy; 2020 Amy Liang
                </Text>
                <Row>
                    <SocialMediaIcon src={mail} />
                    <a
                        href={Urls.limelightFacebook}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        <SocialMediaIcon src={facebook} />
                    </a>
                    <a
                        href={Urls.limelightInstagram}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        <SocialMediaIcon src={instagram} />
                    </a>
                    <a
                        href={Urls.limelightYoutube}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        <SocialMediaIcon src={youtube} />
                    </a>
                    <SocialMediaIcon src={wechat} />
                </Row>
            </FooterContainer>
        );
    }
}
