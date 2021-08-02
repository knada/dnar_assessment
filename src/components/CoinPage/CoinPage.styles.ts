import styled from "styled-components";

export const CoinPageContainer = styled.div``;

export const CoinPageHeading = styled.h1``;

export const InfoCardContainer = styled.div`
    width: 25rem;
    min-width: 18.75rem;
    background-color: ${props => props.theme.colors.sectionBg};
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-radius: 2rem;
`;

export const InfoCardImage = styled.img``;

export const InfoCardHeading = styled.h1`
    font-weight: 500;
    color: white;
    padding: 1rem;
`;

export const InfoCardDescriptionContainer = styled.div`
    font-family: "Inter", "Roboto", sans-serif;
    color: white;
    background: ${props => props.theme.colors.cardBg};
    padding: 1.5rem;
    border-radius: 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

export const InfoCardDescriptionTitle = styled.h3``;

export const InfoCardDescription = styled.p`
    padding-left: 1rem;
    line-height: 1.25;
    & a {
        text-decoration: none;
        color: hsl(240, 80%, 80%);
    }
`;

export const InfoCardLinksCointainer = styled.div`
    padding: 1rem 2rem;
`;

export const InfoCardWebsiteLink = styled.a`
    background-color: ${props => props.theme.colors.dashboardBg};
    width: 10rem;
    display: inline-block;
    height: 4rem;
    border-radius: 1rem;
    margin-right: 1rem;
`;

export const InfoCardSocialLink = styled.a`
    background-color: ${props => props.theme.colors.dashboardBg};
    width: 4rem;
    display: inline-block;
    height: 4rem;
    border-radius: 1rem;
    margin-right: 1rem;
`;

export const InfoCardFactsContainer = styled.div`
    padding: 2rem;
`;

export const InfoCardFactsHeading = styled.h3`
    font-family: "Inter", "Roboto", sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
    padding: 1rem;
`;

export const InfoCardFactsTable = styled.div`
    color: white;
`;

export const InfoCardFactsTableRow = styled.tr`
    width: 100%;
`;

export const InfoCardFactsTableData = styled.td`
    padding: 1rem 0;
    width: 100%;
    &:nth-child(2) {
        text-align: right;
    }
`;

export const SupplyContainer = styled.div`
    background-color: ${props => props.theme.colors.cardBg};
    padding: 1rem;
    border-radius: 2rem;
    margin-bottom: 2rem;
`;

export const SupplyTable = styled.table`
    padding: 1rem;
    color: white;
`;

export const SupplyTableRow = styled.tr``;

export const SupplyTableData = styled.td`
    width: 75%;
    padding: 1rem 0;
`;