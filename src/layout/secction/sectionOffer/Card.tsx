import styled from "styled-components"
import {Card, CardBox, CardT, Cursor} from "../../../componets/Card/StyleCard";

export const CardOffer = () => {
    return (
        <StyleCardBox>
            <Cursor iconId="left"/>
                <Card iconId={"recId"}/>
                <CardT iconId={"shipId"}/>
                <CardBox iconId={"shirtId"}/>
            <Cursor iconId="right"/>
        </StyleCardBox>
    )
}

const StyleCardBox = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
