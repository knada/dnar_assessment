import styled from "styled-components";

export const EventCardContainer = styled.div`
    background-color: ${props => props.theme.colors.cardBg};
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
`;

export const EventCardTitle = styled.h3`
    font-weight: 500;
    font-size: 1.25rem;
`;

export const EventCardDescription = styled.p`
    margin: 1rem 0;
`;
