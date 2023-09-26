import styled from "styled-components";
import fonImg from "../../../assets/images/fonImg.png"
import pattern from "../../../assets/images/Pattern.png"
import elips from "../../../assets/images/Ellipse 19.png"

export const EmmaSection = () => {
    return (
        <StyledBoxBlogPost>
            <StyledBoxImgFon>            
                <img src={fonImg} alt="" />
                <img src={pattern} alt="" />
            </StyledBoxImgFon>
        <StyledTextBox>
            <StyledTextContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eu placerat at nisl posuere aliquet amet pharetra malesuada. Suspendisse nisl ac at tortor.</p>
                <StyledBoxEmma>
                    <img src={elips} alt="" />
                    <div>
                        <span>Emma Brown</span>
                        <span>CEO - Squirrel Sweets</span>
                    </div>
                </StyledBoxEmma>
            </StyledTextContent>
        </StyledTextBox>
        </StyledBoxBlogPost>
    )
}
const StyledBoxBlogPost = styled.section `
    min-height: 500px;
    position: relative;

    img:last-child {
        margin-left: 0px;
    }
`
const StyledBoxImgFon = styled.div `
    img {
        position: absolute;
        margin-top: 127px;
        margin-left: 546px;
        z-index: -1;
    }
    
`
const StyledTextBox = styled.div`
    display: flex;
    justify-content: center;

`
const StyledTextContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 275px;
    width: 690px;
    height: 245px;
    p {
        font-size: 28px;
        color: #535353;
    }
`
const StyledBoxEmma = styled.div`
    display: flex;
    flex-direction: row;
    img {
        height: 55px;
        margin-right: 20px;
    }
    div {
        height: 55px;
        margin-top: 5px;
        span {
            display: block;
            font-size: 20px;
            margin-bottom: 5px;
        }
        span:last-child {
            font-size: 14px;
            color: #A8A8A8;
        }
    }

`