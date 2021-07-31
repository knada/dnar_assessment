import { FC } from "react";
import AllCoins from "../AllCoins/AllCoins";
import Events from "../Events/Events";
import Header from "../Header/Header";
import MarketLeaders from "../MarketLeaders/MarketLeaders";
import SideBar from "../SideBar/SideBar";
import {
    DashboardContainer,
    DashboardContentContainer,
} from "./Dashboard.styles";

const Dashboard: FC = () => {
    return (
        <DashboardContainer>
            <Header />
            <SideBar />
            <DashboardContentContainer>
                <MarketLeaders />
                <Events />
                <AllCoins />
            </DashboardContentContainer>
        </DashboardContainer>
    );
};

export default Dashboard;
