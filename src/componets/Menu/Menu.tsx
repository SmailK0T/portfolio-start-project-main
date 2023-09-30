import React from "react";
import styled from "styled-components";
import { FlexWraper } from "../FlexWraper/FlexWraper";

export const Menu = (props: {menuItems: Array <string>}) => {
    return (
        <StyledMenu>
            <FlexWraper>
            {props.menuItems.map((item , index) => {
                return (<ul key={index}>
                    <li><a href="">{item}</a></li>
                </ul>)
            })} 
            </FlexWraper>
        </StyledMenu>
    )
}


const StyledMenu = styled.nav`
    ul {
        display: flex;
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