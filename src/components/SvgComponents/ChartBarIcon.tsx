import { FC } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";

type IconProps = {
    iconStyle?: FlattenSimpleInterpolation;
};

const StyledSvg = styled.svg<IconProps>`
    ${props => props.iconStyle};
`;

const ChartBarIcon: FC<IconProps> = ({ iconStyle }) => (
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
        <rect x={3} y={12} width={6} height={8} rx={1} />
        <rect x={9} y={8} width={6} height={12} rx={1} />
        <rect x={15} y={4} width={6} height={16} rx={1} />
        <line x1={4} y1={20} x2={18} y2={20} />
    </StyledSvg>
);

export default ChartBarIcon;
