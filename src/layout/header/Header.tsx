import React from "react";
import { Menu } from "../../componets/Menu/Menu";
import { Logo } from "../../componets/Logo/Logo";
import styled from "styled-components";
import ImgHeader from "../../assets/images/tinified/MaskGroup.png"
import PngBck from "../../assets/images/bg.png"
import { Main } from "../secction/main/Main";

export const Header = () =>{
    return (
        <div>
            <StyledHeader style ={ { backgroundImage: `url(${ImgHeader})` } }>
                <img id="idImage" src={PngBck} alt="" />
                    <HeaderMenu >
                        <Logo iconId="logoDan"/>
                        <Menu/>
                    </HeaderMenu>
                    <Main/>
            </StyledHeader>
        </div>
    )
}

const StyledHeader = styled.header `
    position: relative;
    min-height: 898px;
    max-width: 1920px;
    background-repeat: no-repeat;
    background-size: auto;
    overflow: hidden;
    #idImage {
        position: absolute;
        z-index: -1;
        margin-top: 173px;
        margin-left: 175px;
    }
`

const HeaderMenu = styled.div `
    height: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.521);
    border-bottom: 1px solid #d9d9d9f6;
    padding: 0 364px 0 365px;
    margin-bottom: 147px;

`
