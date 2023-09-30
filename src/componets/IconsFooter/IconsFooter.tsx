import styled from "styled-components";
import sprite from "../../assets/images/sprite.svg"

type TypeIconsFotter = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const IconsFooter = (props: TypeIconsFotter) => {
    return (
        <StyledIconsFotter>
            <svg width={props.width || "17"} height={props.height || "17"} viewBox={props.viewBox || "0 0 48 48"} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${sprite}#${props.iconId}`}/>
            </svg>
        </StyledIconsFotter>
    )
}

const StyledIconsFotter = styled.div `
    margin-right: 30px;
    :last-child {
        margin-right: 0;
    }
`