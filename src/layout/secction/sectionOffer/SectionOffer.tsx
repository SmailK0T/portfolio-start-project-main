import styled from "styled-components";

import { CardOffer } from "./Card";


export const OfferSection = () => {
    return(
        <StyledOffer>
            <StyledOfferBox>
                <h3>What I Offer</h3>
                <p>Things that I can do for my clients. Just make your good trust <br /> I love to provide quality works.</p>
                    <CardOffer/>
            </StyledOfferBox>
        </StyledOffer>
    )
}

const StyledOffer = styled.section `
    max-width: 1920px;
    min-height: 670px;
    padding-top: 144px;
    
`
const StyledOfferBox = styled.div `
    h3 {
        font-size: 48px;
        text-align: center;
        margin: 0 auto;
    }
    p {
        text-align: center;
        color: rgba(144, 144, 144, 1);
        margin-bottom: 61px;
    }
`
