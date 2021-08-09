import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideBarContainer = styled.div`
    background: ${props => props.theme.colors.sectionBg};
    height: 100vh;
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    @media screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
        display: block;
        width: 5rem;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
        display: block;
        width: 15rem;
    }
`;

export const SidebarHeader = styled.div`
    border: 1px solid red;
    font-size: 1rem;
    margin: 0.25rem 0.5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
`;

export const SideBarBrand = styled.div`
    display: none;
    @media screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
        display: block;
        margin-left: 1rem;
    }
`;

export const SideBarMenuButton = styled.button`
    height: 2rem;
    background: none;
    border: none;
    cursor: pointer;
`;

export const SideBarMenu = styled.ul`
    list-style-type: none;
    padding-top: 1rem;
`;

export const SideBarMenuItem = styled.li`
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    cursor: pointer;
    margin: 0.125rem 0;
`;

export const SideBarMenuLink = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    color: white;
    width: 100%;
    height: 100%;
    text-decoration: none;
    border-radius: 1rem;
    margin: 0.25rem 0.5rem;
    &:hover {
        background-color: hsl(0, 0%, 10%);
    }
    border: 1px solid red;
`;

export const SideBarMenuIcon = styled.div`
    height: 2rem;
`;

export const SideBarMenuText = styled.div`
    display: none;
    @media screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
        display: block;
        margin-left: 1rem;
    }
`;
