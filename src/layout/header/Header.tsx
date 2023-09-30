import React from "react";
import { Menu } from "../../componets/Menu/Menu";
import { Logo } from "../../componets/Logo/Logo";
import styled from "styled-components";
import { FlexWraper } from "../../componets/FlexWraper/FlexWraper";

const items = ["Home","About","Services","Store","Blog","Contact",]

export const Header = () =>{
    return (
            <HeaderMenu >
                    <FlexWraper width="1192px" justify="space-between">
                        <Logo iconId="logoDan"/>
                        <Menu menuItems={items}/>
                    </FlexWraper>
            </HeaderMenu>
    )
}

const StyledHeader = styled.header `
    height: 130px;
    max-width: 1920px;
    background-repeat: no-repeat;
    background-size: auto;
    overflow: hidden;

`

const HeaderMenu = styled.div `
    max-width: 1920px;
    min-height: 130px;
    background-color: rgba(255, 255, 255, 0.521);
    border-bottom: 1px solid #d9d9d9f6;
    margin-bottom: 147px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;

`
