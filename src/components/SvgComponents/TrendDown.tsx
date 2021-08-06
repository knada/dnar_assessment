import { FC } from "react";
import styled from "styled-components";

type TrendProps = {
    color?: string;
};

const StyledSvg = styled.svg`
    height: 30px;
`;

const TrendDown: FC<TrendProps> = ({ color = "red" }) => (
    <StyledSvg viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} fill="none">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="3 7 9 13 13 9 21 17" />
        <polyline points="21 10 21 17 14 17" />
    </StyledSvg>
);

export default TrendDown;
