import styled from "styled-components";
import sprite from "../../assets/images/sprite.svg";

type PropsTypeId = {
    iconId?: string
}

export const Card = (props: PropsTypeId) => {
    return (
    <StyleCard>
        <svg width="84px" height="84px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" >
            <use xlinkHref= {`${sprite}#${props.iconId}`} />
        </svg>
        <h4>Branding Design</h4>
        <p>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Orci eget mi elit cursus<br />donec amet sed sagittis.</p>
    </StyleCard>
    );
};

export const CardT = (props: PropsTypeId) => {
    return (
        <StyleCard>
            <svg xmlns="http://www.w3.org/2000/svg" width="84px" height="84px" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <use xlinkHref= {`${sprite}#${props.iconId}`} />
            </svg>
            <h4>T-Shirt Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Orci eget mi elit cursus<br />donec amet sed sagittis.</p>
        </StyleCard>
    );
}

export const CardBox = (props: PropsTypeId) => {
    return (
        <StyleCard>
            <svg width="84px" height="84px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <use xlinkHref= {`${sprite}#${props.iconId}`} />
            </svg>
            <h4>Package Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Orci eget mi elit cursus<br />donec amet sed sagittis.</p>
        </StyleCard>
    );
}

export const Cursor = (props: PropsTypeId) => {
    return (
        <StyleCursor>
            <svg width="85px" height="85px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${sprite}#${props.iconId}`}/>
            </svg>
        </StyleCursor>
    )
}
const StyleCursor = styled.div `
    :hover svg {
        stroke: rgba(159, 159, 159, 1);
    }
`

const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 404px;
    height: 362.67px;
    border: 1px solid rgba(235, 235, 235, 1);
    background-color: rgba(253, 253, 253, 1);
    border-radius: 90px;
    padding-top: 37px;
    :hover {
        box-shadow: 0px 2px 40px 0px rgba(187, 187, 187, 0.5);
        svg {
            stroke: red;
        }
    }
    h4 {
        font-size: 25px;
    }
`