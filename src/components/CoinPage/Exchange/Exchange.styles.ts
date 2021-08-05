import styled from "styled-components";

export const ExchangeContainer = styled.div`
    background-color: ${props => props.theme.colors.sectionBg};
    color: white;
    margin-top: 1rem;
    padding: 2rem;
    border-radius: 2rem;
`;

export const ExchangeTitle = styled.h3`
    font-weight: 500;
    font-size: 1.2rem;
`;

export const ExchangeGroupContainer = styled.div`
    padding: 2rem 0;
`;

export const ExchangeGroup = styled.div`
    display: flex;
    align-items: center;
`;

export const ExchangeType = styled.p``;

export const ExchangeValue = styled.input`
    font-size: 3rem;
    font-weight: 500;
    margin-left: 2rem;
    color: white;
    background: none;
    border: none;
    max-width: calc(100% - 10rem);
    @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
        font-size: 1.5rem;
    }
`;

export const ExchangeSelect = styled.select`
    margin-left: auto;
    background-color: ${props => props.theme.colors.dashboardBg};
    color: white;
    border: none;
    padding: 0.5rem;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 0.5rem;
`;

export const ExchangeOption = styled.option``;

export const ExchangeFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ExchangeSubText = styled.p``;

export const ExchangeButton = styled.button`
    display: block;
    padding: 1rem;
    background-color: ${props => props.theme.colors.buttonBg};
    border: none;
    color: white;
    font-size: 1rem;
    border-radius: 0.6rem;
    width: 10rem;
    text-align: left;
    font-family: "Inter", "Roboto", sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transition: 0.5s;
        background-color: #1a4fff;
    }
`;
