import { type } from "os";
import styled from "styled-components";

type FlexPtype = {
    justify?: string,
    flexder?: string,
    alignitems?: string,
    flexwrap?: string,
    pading?: string,
    margin?: string,
    width?: string,
    maxwidth?: string,

}

export const FlexWraper = styled.div <FlexPtype>`
    display: flex;
    flex-direction: ${props => props.flexder || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.alignitems || "stretch"};
    flex-wrap: ${props => props.flexwrap || "nowrap"};
    padding: ${props => props.pading};
    margin: ${props => props.margin};
    width: ${props => props.width};
    max-width: ${props => props.maxwidth};
`