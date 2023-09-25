import styled from "styled-components";
import { SvgIcons } from "./StyledSvgIcons";

export const SectionWork = () => {
    return (
        <StyledSectionWork>
            <h4>Brands I’ve Worked</h4>
            <p>Things that I can do for my clients. Just make your good trust I love <br /> to provide quality works.</p>
            <StyledTbBox>
                <StyledTopTr>
                    <th><SvgIcons iconId="vector"/></th>
                    <th><SvgIcons iconId="vector5"/></th>
                    <th><SvgIcons iconId="vector6"/></th>
                    <th><SvgIcons iconId="iconsCard"/></th>
                    <th><SvgIcons iconId="vector9"/></th>
                    <th><SvgIcons iconId="vector8"/></th>
                </StyledTopTr>
                <StyledBottomTr>
                    <th><SvgIcons iconId="vector7"/></th>
                    <th><SvgIcons iconId="vector3"/></th>
                    <th><SvgIcons iconId="vector4" /* width="84px" height="71px" *//></th>
                    <th><SvgIcons iconId="vector2"/></th>
                    <th><SvgIcons iconId="vector10"/></th>
                    <th><SvgIcons iconId="vector11"/></th>
                </StyledBottomTr>
            </StyledTbBox>
        </StyledSectionWork>
    )
}

const StyledSectionWork = styled.div `
    min-height: 915px;
    background-color: #FAFAFA;
    padding: 0 217px 0 217px;
    h4 {
        text-align: center;
        margin: 134px 0 15px 0;
        font-size: 48px;
    }
    p {
        text-align: center;
        color: #909090;
        margin-bottom: 78px;
    }
`
const StyledTbBox = styled.table `
    th:last-child {
        border-right: none;
    }
`
const StyledTopTr = styled.tr `
    th {
        border-right: 1px dashed #DCDCDC;
        border-bottom: 1px dashed #DCDCDC;
    }
    
`
const StyledBottomTr = styled.tr `
    th {
        border-right: 1px dashed #DCDCDC;
    }
`