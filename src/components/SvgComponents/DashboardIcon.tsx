import { FC } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";

type IconProps = {
    iconStyle?: FlattenSimpleInterpolation;
};

const StyledSvg = styled.svg<IconProps>`
    ${props => props.iconStyle};
`;

const DashboardIcon: FC<IconProps> = ({ iconStyle }) => (
    <StyledSvg
        viewBox="0 0 24 24"
        strokeWidth={1.25}
        stroke="white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        iconStyle={iconStyle}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx={12} cy={13} r={2} />
        <line x1={13.45} y1={11.55} x2={15.5} y2={9.5} />
        <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
    </StyledSvg>
);

export default DashboardIcon;
