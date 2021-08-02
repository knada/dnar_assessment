import { FC } from "react";
import AllCoins from "../AllCoins/AllCoins";
import Events from "../Events/Events";
import Header from "../Header/Header";
import MarketLeaders from "../MarketLeaders/MarketLeaders";
import {
    DashboardContainer,
    DashboardContentContainer,
} from "./Dashboard.styles";
import { Routes } from "../../routes";

export const DashboardHome: FC = () => (
    <>
        <MarketLeaders />
        <Events />
        <AllCoins />
    </>
);

const Dashboard: FC = () => {
    return (
        <DashboardContainer>
            <Header />
            <DashboardContentContainer>
                <Routes />
            </DashboardContentContainer>
        </DashboardContainer>
    );
};

export default Dashboard;
