import styled from "styled-components";

export const NavMenu = () => {
    return (
        <StyleMenuNav>
            <ul>
                <li><a href="">All</a></li>
                <li><a href="">Branding</a></li>
                <li><a href="">T-Shirt</a></li>
                <li><a href="">Package</a></li>
                <li><a href="">Poster</a></li>
            </ul>
        </StyleMenuNav>
    )
}

const StyleMenuNav = styled.div `
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style-type: none;
        margin:0 0 66px 0;
        li + li {
            margin-left: 50px;
        }
        li{
            a {
                text-decoration: none;
                font-size: 20px;
                color: #B6B6B6;
            }
            a:hover {
                color: #2D2D2D;
            }
        }  
    }
`