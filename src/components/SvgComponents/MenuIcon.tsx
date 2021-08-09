import { FC } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";

type IconProps = {
    iconStyle?: FlattenSimpleInterpolation;
};

const StyledSvg = styled.svg<IconProps>`
    ${props => props.iconStyle};
`;

const MenuIcon: FC<IconProps> = ({ iconStyle }) => (
    <StyledSvg
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        iconStyle={iconStyle}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1={4} y1={8} x2={20} y2={8} />
        <line x1={4} y1={16} x2={20} y2={16} />
    </StyledSvg>
);

export default MenuIcon;
