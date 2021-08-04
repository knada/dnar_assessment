import styled from "styled-components";

export const CoinPageContainer = styled.div``;

export const CoinPageHeading = styled.h1``;

export const InfoCardContainer = styled.div`
    max-width: 25rem;
    min-width: 14rem;
    background-color: ${props => props.theme.colors.sectionBg};
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-radius: 2rem;
`;

export const InfoCardImage = styled.img`
    display: block;
    height: 3rem;
    margin: 1rem auto;
`;

export const InfoCardHeading = styled.h1`
    font-weight: 500;
    color: white;
    padding: 1rem;
`;

export const InfoCardDescriptionContainer = styled.div`
    font-family: "Inter", "Roboto", sans-serif;
    color: white;
    background: ${props => props.theme.colors.cardBg};
    padding: 1.5rem 1rem;
    border-radius: 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

export const InfoCardDescriptionTitle = styled.h3``;

export const InfoCardDescription = styled.p`
    padding-left: 0.5rem;
    line-height: 1.25;
    & a {
        text-decoration: none;
        color: hsl(240, 80%, 80%);
    }
`;

export const InfoCardLinksCointainer = styled.div`
    padding: 2rem 1.5rem;
`;

export const InfoCardWebsiteLink = styled.a`
    background-color: ${props => props.theme.colors.dashboardBg};
    width: 10rem;
    display: inline-block;
    height: 4rem;
    border-radius: 1rem;
    margin-right: 1rem;
    color: white;
    text-decoration: none;
    text-align: center;
    padding: 1.25rem;
    vertical-align: top;
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

export const InfoCardFactsTableBody = styled.tbody``;

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

export const SupplyTableBody = styled.tbody``;

export const SupplyTableRow = styled.tr``;

export const SupplyTableData = styled.td`
    width: 75%;
    padding: 1rem 0;
`;

export const RankContainer = styled.div`
    padding: 1rem;
    background-color: ${props => props.theme.colors.sectionBg};
    border-radius: 2rem;
    font-family: "Inter", "Roboto", sans-serif;
    color: white;
`;

export const RankTitle = styled.h3`
    text-align: center;
    font-weight: 500;
    font-size: 2rem;
`;

export const Rank = styled.h3`
    margin: 1rem;
    text-align: center;
    font-weight: 600;
    font-size: 3rem;
`;
