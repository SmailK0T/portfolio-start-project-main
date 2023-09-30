import styled from "styled-components";
import BgImg from "../../../assets/images/bg pattern.png";
import {StyleButtonSection,StyleBtuttonSectionWhite,} from "../../../componets/Button /Button";

export const SectionSkill = () => {
    return (
    <StyleSectionSkills>
        <StyleSectionBox style ={ { backgroundImage: `url(${BgImg})` } }>
            
        <StyleHire>
            <h2>Why Hire Me ?</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu
            placerat at nisl posuere aliquet amet pharetra malesuada. Spendisse
            nisl ac at tortor. Sit faucibus suspendisse risus.
            <br />
            <br />
            Vulputate pulvinar cursus suspendisse risus vulputate enim pharetra
            eu. Tetur adipiscing elit eu placera.
            </p>
            <a href="#">
                <StyleButtonSection>HIRE MI</StyleButtonSection>
            </a>
            <a href="#">
                <StyleBtuttonSectionWhite>DOWLOND CV</StyleBtuttonSectionWhite>
            </a>
        </StyleHire>
        <StyledMySkills>
            <ul>
                <h2>My Skills</h2>
                <li id="boxPhoto">Adobe Photoshop <span>96%</span></li>
                <hr id="photo" />
                <li id="boxIlust">Adobe Illustrator <span>92%</span></li>
                <hr id="ilustra" />
                <li id="boxAfter">Adobe After Effect <span>85%</span></li>
                <hr id="after" />
                <li id="boxIn">Adobe InDesign <span>94%</span></li>
                <hr id="inDesing" />
            </ul>
        </StyledMySkills>
        </StyleSectionBox>
    </StyleSectionSkills>
    );
};

const StyleSectionSkills = styled.section`
    max-width: 1920px;
    min-height: 629px;
    background-color: rgba(229, 233, 237, 1);

    z-index: 1;
    img {
    position: absolute;
    z-index: 2;
    }
`;
const StyleSectionBox = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 129px 364px 0 365px;
    overflow: hidden;
`;
const StyleHire = styled.div`
    z-index: 3;
    max-width: 494px;
    margin-right: 150px;
    h2 {
    margin: 0 0 39px 0;
    font-size: 48px;
    }
    p {
    color: rgba(146, 146, 146, 1);
    line-height: 30px;
    margin-bottom: 44px;
        br {
            line-height: 60px;
        }
    } 
    a {
        margin-right: 25px;
    }
    a:last-child {
    margin-right: 0;
    } 
`;
const StyledMySkills = styled.div`
    z-index: 3;
    ul {
    margin: 0 auto;
    list-style-type: none;
    #boxPhoto {
        width: 545px;
    }
    #boxIlust {
        width: 523px;
    }
    #boxAfter {
        width: 486px;
    }
    #boxIn {
        width: 535px;
    }
    li {
        display: flex;
        justify-content: space-between;
        span {
        display: block;
        }
    }

    h2 {
        margin: 0 0 39px 0;
        font-size: 48px;
    }
    hr {
        margin: 8px 0 39px 0;
        border: 3px solid rgba(230, 57, 70, 1);
    }
    #photo {
        width: 518px;
    }
    #ilustra {
        width: 496px;
    }
    #after {
        width: 459px;
    }
    #inDesing {
        width: 506px;
    }
    }
`;
