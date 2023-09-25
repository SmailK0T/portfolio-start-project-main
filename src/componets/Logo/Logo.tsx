import React from "react";
import LogoDaniel from "../../assets/images/LogoDaniel.svg"
import styled from "styled-components";
import sprite from "../../assets/images/sprite.svg"
import { type } from "os";

type ImgType = {
    iconId: string
}
export const Logo = (props: ImgType) => {
    return (
        <StyleLogo>
            <a href="#">
                <svg width="115" height="29" viewBox="0 0 115 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${sprite}#${props.iconId}`}/>
                </svg></a>
        </StyleLogo>
    )
}

const StyleLogo = styled.a `
`