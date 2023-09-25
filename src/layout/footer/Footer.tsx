import styled from "styled-components";
import footerBackground from "../../assets/images/bg patternFooter.png"
import { StyledButton } from "../../componets/Button /Button";
import { IconsFooter } from "../../componets/IconsFooter/IconsFooter";

export const Footer = () => {
    return (
        <StyledFooter>
            <img src={footerBackground} alt="" />
            <StyledContentFooter>
                <h4>Let’s work together</h4>
                <p>I’m available for freelance work. Have any projects in your <br /> mind? Just feel free to contact me</p>
            </StyledContentFooter>
            <StyledButton>CONTACT ME</StyledButton>
            <hr />
            <StyledFooterBoxBottom>
                <p>© 2021 <span>Templates Jungle.</span> All rights reservedv</p>
                <div>
                    <IconsFooter iconId="facebook"/>
                    <IconsFooter iconId="twitter"/>
                    <IconsFooter iconId="instagram"/>
                    <IconsFooter iconId="pinterest"/>
                    <IconsFooter iconId="picasa"/>
                    <IconsFooter iconId="youtube"/>
                </div>
            </StyledFooterBoxBottom>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer `
    height: 690px;
    background-color: #D6D9DD;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    img {
        position: absolute;
        margin-top: 55px;
        width: 1216.169px;
        height: 465.971px;
        z-index: 1;
    }
    hr {
        width: 1274px;
        margin-top: 100px;
        border-bottom: 1px solid #848484;
        z-index: 2;
        margin-bottom: 50px;
    }
`
const StyledContentFooter = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
margin-bottom: 60px;
    h4 {
        font-size: 72px;
        color: #2D2D2D;
        margin: 126px 0 27px 0;
    }
    p{
        text-align: center;
        color: #929292;
        font-size: 18px;
    }
    z-index: 2;
`
const StyledFooterBoxBottom = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    p {
        font-size: 14px;
        color: #929292;
        span {
            color: #2D2D2D;
        }
    }
    div {
        display: flex;

    }
`