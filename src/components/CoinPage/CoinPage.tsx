import { FC } from "react";
import {
    CoinPageContainer,
    InfoCardContainer,
    InfoCardDescription,
    InfoCardDescriptionContainer,
    InfoCardDescriptionTitle,
    InfoCardFactsContainer,
    InfoCardFactsHeading,
    InfoCardFactsTable,
    InfoCardFactsTableBody,
    InfoCardFactsTableData,
    InfoCardFactsTableRow,
    InfoCardHeading,
    InfoCardImage,
    InfoCardLinksCointainer,
    InfoCardSocialLink,
    InfoCardWebsiteLink,
    Rank,
    RankContainer,
    RankTitle,
    SupplyContainer,
    SupplyTable,
    SupplyTableBody,
    SupplyTableData,
    SupplyTableRow,
} from "./CoinPage.styles";
import { useGetCoinQuery } from "../../application/services/coins";
import { useParams } from "react-router-dom";
import CoinDataVisualition from "./CoinDataVisualization/CoinDataVisualization";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

type CoinPageParams = {
    id: string;
};

const CoinPage: FC = () => {
    const { id } = useParams<CoinPageParams>();
    const { data, isLoading, isError } = useGetCoinQuery(id);
    if (isLoading) {
        return <LoadingIndicator />;
    }
    if (isError) {
        return <h1>Error fetching data</h1>;
    }
    return (
        <CoinPageContainer>
            <CoinDataVisualition
                id={id}
                currentPrice={data.market_data.current_price.usd}
            />
            <InfoCardContainer>
                <InfoCardImage src={data.image.small} />
                <InfoCardHeading>Info Card</InfoCardHeading>
                <InfoCardDescriptionContainer>
                    <InfoCardDescriptionTitle>
                        Description:
                    </InfoCardDescriptionTitle>
                    <InfoCardDescription
                        dangerouslySetInnerHTML={{
                            __html: data.description.en,
                        }}
                    />
                </InfoCardDescriptionContainer>
                <InfoCardLinksCointainer>
                    <InfoCardWebsiteLink href={data.links.homepage[0]}>
                        Website
                    </InfoCardWebsiteLink>
                    <InfoCardSocialLink
                        href={data.links.subreddit_url}
                    ></InfoCardSocialLink>
                    <InfoCardSocialLink
                        href={data.links.repos_url.github[0]}
                    ></InfoCardSocialLink>
                </InfoCardLinksCointainer>
                <InfoCardFactsContainer>
                    <InfoCardFactsHeading>Facts</InfoCardFactsHeading>
                    <InfoCardFactsTable>
                        <InfoCardFactsTableBody>
                            <InfoCardFactsTableRow>
                                <InfoCardFactsTableData>
                                    Hashing Algorithm
                                </InfoCardFactsTableData>
                                <InfoCardFactsTableData>
                                    {data.hashing_algorithm}
                                </InfoCardFactsTableData>
                            </InfoCardFactsTableRow>
                            <InfoCardFactsTableRow>
                                <InfoCardFactsTableData>
                                    Country Origin
                                </InfoCardFactsTableData>
                                <InfoCardFactsTableData>
                                    {data.country_origin
                                        ? data.country_origin
                                        : "Unknown"}
                                </InfoCardFactsTableData>
                            </InfoCardFactsTableRow>
                            <InfoCardFactsTableRow>
                                <InfoCardFactsTableData>
                                    Category
                                </InfoCardFactsTableData>
                                <InfoCardFactsTableData>
                                    {data.categories[0]}
                                </InfoCardFactsTableData>
                            </InfoCardFactsTableRow>
                        </InfoCardFactsTableBody>
                    </InfoCardFactsTable>
                </InfoCardFactsContainer>
                <SupplyContainer>
                    <SupplyTable>
                        <SupplyTableBody>
                            <SupplyTableRow>
                                <SupplyTableData>Total Supply</SupplyTableData>
                                <SupplyTableData>
                                    {data.market_data.total_supply}
                                </SupplyTableData>
                            </SupplyTableRow>
                            <SupplyTableRow>
                                <SupplyTableData>Max Supply</SupplyTableData>
                                <SupplyTableData>
                                    {data.market_data.max_supply}
                                </SupplyTableData>
                            </SupplyTableRow>
                            <SupplyTableRow>
                                <SupplyTableData>Circulating</SupplyTableData>
                                <SupplyTableData>
                                    {data.market_data.circulating_supply}
                                </SupplyTableData>
                            </SupplyTableRow>
                        </SupplyTableBody>
                    </SupplyTable>
                </SupplyContainer>
            </InfoCardContainer>
            <RankContainer>
                <RankTitle>Alexa Rank</RankTitle>
                <Rank>{data.public_interest_stats.alexa_rank}</Rank>
            </RankContainer>
        </CoinPageContainer>
    );
};

export default CoinPage;
