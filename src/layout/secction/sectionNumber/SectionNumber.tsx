import styled from "styled-components";


export const SectionNumber = () => {
    return (
        <StyledSectionNumber>
            <StyledBoxNumber>
                <span>720+</span>
                <p>Projects Completed</p>
            </StyledBoxNumber>
            <StyledBoxNumber>
                <span>920+</span>
                <p>Products Sold</p>
            </StyledBoxNumber>
            <StyledBoxNumber>
                <span>25+</span>
                <p>Awards Received</p>
            </StyledBoxNumber>
            <StyledBoxNumber>
                <span>700+</span>
                <p>Happy Clients</p>
            </StyledBoxNumber>
        </StyledSectionNumber>
    )
}

const StyledSectionNumber = styled.div `
    min-height: 424px;
    background-color: #FAFAFA;
    display: flex;
    justify-content: center;

`
const StyledBoxNumber = styled.div `
margin-left: 100px;
padding-top: 160px;
:first-child {
    margin-left: 0;
}
    span {
        font-size: 105px;
        color: #DDDDDD;
    }
    p {
        text-align: center;
        font-size: 18px;
        color: #535353;
    }
`