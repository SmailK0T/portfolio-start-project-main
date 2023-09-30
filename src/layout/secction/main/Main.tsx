import styled from "styled-components";
import { StyledButton } from "../../../componets/Button /Button";
import PngBck from "../../../assets/images/bg.png"
import ImgBck from "../../../assets/images/tinified/MaskGroup.png"
import { FlexWraper } from "../../../componets/FlexWraper/FlexWraper";

export const Main = () => {
    return (
/*             <ImgBack> */
                <StyledMain style ={ { backgroundImage: `url(${ImgBck})` } }>
                    <FlexWraper justify="center">
                        <BoxMain>
                                <LeftBoxMain>
                                    <span>Graphic Designer</span>
                                    <h1>Hello I’m <br /><span>Daniel Bryan</span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et. Non semper blandit vitae semper blandit. Tellus dignissim a dui turpis arcu, nulla ullamcorper tincidunt.</p>
                                    <a href=""><StyledButton>Get In Touch</StyledButton></a>
                                </LeftBoxMain>
                        </BoxMain>
                    </FlexWraper>
                </StyledMain>
/*             </ImgBack> */

    )
}

/* const ImgBack = styled.div `
    background-Image: url(${PngBck});
    z-index: -44;
` */
const StyledMain = styled.main `
    position: relative;
    max-width: 1920px;
    height: 898px;
    z-index: -1;
    margin-top: -280px;
    background-repeat: no-repeat;
    background-size: auto;
        span {
            color: rgba(184, 184, 184, 1);
            margin-bottom: 23px;
        }
        h1 {
            margin: 0;
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
const LeftBoxMain = styled.div`
    width: 514px;
    display: flex;
    flex-direction: column;
    margin-top: 277px;
`

const BoxMain = styled.div `
    width: 1192px;
    background-repeat: no-repeat;
    background-size: auto;
    position: relative;
`