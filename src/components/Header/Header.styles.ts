import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: ${props => props.theme.colors.dashboardBg};
    padding: 1rem;
`;

export const SearchBarContainer = styled.div`
    position: relative;
    background-color: none;
    margin-left: 3rem;
    width: 50%;
`;

export const SearchBar = styled.input`
    font-family: ${props => props.theme.typography.main};
    padding-left: 4rem;
    height: 3rem;
    font-size: 1rem;
    width: 100%;
    border: 1px solid hsla(0, 0%, 100%, 0.2);
    border-radius: 5px;
    background-color: ${props => props.theme.colors.dashboardBg};
    color: white;
    &:focus {
        outline: none;
        border: 1px solid hsl(178, 50%, 40%);
    }
`;
