import styled from "styled-components";
import sprite from "../../../assets/images/sprite.svg"

type PropsTypeId = {
    iconId?: string,
    width?: string,
    height?: string,
    viewBox?: string,
/*     width?: `string || "78px"`; */

}

export const SvgIcons = (props: PropsTypeId) => {
    return (
        <StyledBoxSvg>
            <svg xmlns="http://www.w3.org/2000/svg" width={props.width || "78"} height={props.height || "78"} viewBox={props.viewBox || "0 0 78 78"} fill="none">
                <use xlinkHref={`${sprite}#${props.iconId}`}/>
            </svg>
        </StyledBoxSvg>
    )
}



const StyledBoxSvg = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 239px;
    height: 212px;
    border: 1 px solid black;
`