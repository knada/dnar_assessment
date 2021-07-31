import { FC } from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
    height: 20px;
    stroke: ${props => props.theme.colors.buttonBg};
    position: absolute;
    top: calc(50% - 10px);
    left: 32px;
`;

const SearchIcon: FC = () => (
    <StyledSvg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
    </StyledSvg>
);

export default SearchIcon;
