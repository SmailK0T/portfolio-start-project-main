import styled from "styled-components";
import { NavMenu } from "../../../componets/Menu/NavMenu";
import ImgFoto from "../../../assets/images/tinified/Jot.png"
import ImgFotoCross from "../../../assets/images/tinified/Rectangle 78.png"
import ImgFotoCream from "../../../assets/images/tinified/Rectangle 79.png"
import ImgFotoWater from "../../../assets/images/tinified/Rectangle 89.png"
import ImgFotoChair from "../../../assets/images/tinified/Rectangle 92.png"
import ImgFotoRings from "../../../assets/images/tinified/Rectangle 87.png"
import { StyleBtuttonSectionWhite } from "../../../componets/Button /Button";

export const SectionPortfolio = () => {
    return (
        <StylePortfolio>
            <h3>Portfolio</h3>
            <NavMenu/>
            <StyleImgBox>
                <a href="" id="fotoId"><img  src={ImgFoto} alt="" width="621px" height="539px"/></a>
                <a href="" id="crossId"><img  src={ImgFotoCross} alt="" height="764px"/></a>
                <a href="" id="creamId"><img  src={ImgFotoCream} alt="" height="539px"/></a>
                <a href="" id="waterId"><img  src={ImgFotoWater} alt="" height="764px"/></a>
                <a href="" id="chairId"><img  src={ImgFotoChair} alt="" height="539px"/></a>
                <a href="" id="ringsId"><img  src={ImgFotoRings} alt="" height="764px"/></a>
            </StyleImgBox>
            <BoxButtonStyled><StyleBtuttonSectionWhite>VIEW PORTFOLIO</StyleBtuttonSectionWhite></BoxButtonStyled>
        </StylePortfolio>
    )
}

const StylePortfolio = styled.div`
    max-width: 1920px;
    min-height: 1700px;
    
    h3 {
        margin: 0 0 55px 0;
        font-size: 48px;
        text-align: center;
    }
`
const StyleImgBox = styled.div `
a {
    display: inline-block;
    margin: 0 0 30px 30px;
}
display: grid;
grid-template-areas: "A b c"
                    "A b c"
                    "D b f"
                    "D e f"
                    "D e f";
    #fotoId {
        grid-area: A;
        margin: 0 0 30px 0;
    }
    #crossId {
        grid-area: b; 
    }
    #creamId {
        grid-area: c;
    }
    #waterId {
        grid-area: D;
        margin: 0 0 30px 0;
    }
    #chairId {
        grid-area: e;
    }
    #ringsId {
        grid-area: f;
    }
`
export const BoxButtonStyled = styled.div `
    display: flex;
    justify-content: center;
    margin: 25px 0 163px 0;
    
`