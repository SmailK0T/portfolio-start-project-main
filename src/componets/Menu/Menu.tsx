import React from "react";
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Store</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav `
    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        list-style-type: none;
        li + li {
            margin-left: 50px;
        }
        li a {
            text-decoration: none;
            color: black;
        }
        li a:hover {
            color: red;
        }
    }
`