import { FC } from "react";
import AllCoins from "../AllCoins/AllCoins";
import Events from "../Events/Events";
import Header from "../Header/Header";
import MarketLeaders from "../MarketLeaders/MarketLeaders";
import {
    DashboardContainer,
    DashboardContentContainer,
    DashboardHomeContainer,
} from "./Dashboard.styles";
import { Routes } from "../../routes";

export const DashboardHome: FC = () => (
    <DashboardHomeContainer>
        <MarketLeaders />
        <Events />
        <AllCoins />
    </DashboardHomeContainer>
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
