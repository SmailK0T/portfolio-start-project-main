import styled from "styled-components";
import imgRecOne from "../../../assets/images/tinified/Rectangle 97.png"
import imgTwo from "../../../assets/images/tinified/Rectangle 99.png"
import imgHree from "../../../assets/images/tinified/Rectangle 98.png"
import { StyleBtuttonSectionWhite } from '../../../componets/Button /Button';


export const BlogPostSection = () => {
    return (
        <StyledBoxBlogPost>
            <h4>Blog Posts</h4>
            <p>Things that I can do for my clients. Just make your good trust <br /> I love to provide quality works.</p>
            <StyledBoxRectangle>
                <StyledBoxCard>
                    <img src={imgRecOne} alt="" />
                    <p>Why should we invest more in branding first?</p>
                </StyledBoxCard>
                <StyledBoxCard>
                    <img src={imgTwo} alt="" />
                    <p>Top 100 most beautiful t-shirt print design</p>
                </StyledBoxCard>
                <StyledBoxCard>
                    <img src={imgHree} alt="" />
                    <p>Best rules to follow for achieving business goals</p>
                </StyledBoxCard>
            </StyledBoxRectangle>
            <StyledButtonBox><StyleBtuttonSectionWhite>READ ALL BLOGS</StyleBtuttonSectionWhite></StyledButtonBox>
        </StyledBoxBlogPost>
    )
}

const StyledBoxBlogPost = styled.div `
    min-height: 863px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h4 { 
        text-align: center;
        font-size: 48px;
        margin: 0;
    }
    p {
        text-align: center;
        color: #909090;
        margin-bottom: 65px;
    }
`
const StyledBoxRectangle = styled.div `
    display: flex;
    justify-content: center;
`
const StyledBoxCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 20px;
    :first-child {
        margin-left: 0;
    }
    img {
        width: 384px;
        height: 279px;
    }
    p {
        width: 355px;
        text-align: start;
        color: #2D2D2D;
        font-size: 22px;
        margin: 22px 0 60px 0;
    }
`
const StyledButtonBox = styled.div`
    display: flex;
    justify-content: center;
`