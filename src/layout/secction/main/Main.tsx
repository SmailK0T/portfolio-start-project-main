import styled from "styled-components";
import { StyledButton } from "../../../componets/Button /Button";

export const Main = () => {
    return (
        <StyledMain>
            <span>Graphic Designer</span>
            <h1>Hello I’m <br /><span>Daniel Bryan</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et. Non semper blandit vitae semper blandit. Tellus dignissim a dui turpis arcu, nulla ullamcorper tincidunt.</p>
            <a href=""><StyledButton>Get In Touch</StyledButton></a>
        </StyledMain>
    )
}

const StyledMain = styled.main `
    width: 514px;
    padding: 0 364px 0 365px;
        span {
            color: rgba(184, 184, 184, 1);
            margin-bottom: 23px;
        }
        h1 {
            margin: 0 auto;
            font-size: 80px;
            span {
                color: red;
            }
            margin-bottom: 31px;
        }
        p {
            color: rgba(106, 106, 106, 1);
            margin-bottom: 50px;
        }
`