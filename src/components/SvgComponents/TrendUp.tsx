import { FC } from "react";
import styled from "styled-components";

type TrendProps = {
    color?: string;
};

const StyledSvg = styled.svg`
    height: 30px;
`;

const TrendUp: FC<TrendProps> = ({ color = "green" }) => (
    <StyledSvg viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} fill="none">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
    </StyledSvg>
);

export default TrendUp;
