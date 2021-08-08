import { FC } from "react";
import { Route, Switch } from "react-router";
import AllCoins from "../components/AllCoins/AllCoins";
import CoinPage from "../components/CoinPage/CoinPage";
import { DashboardHome } from "../components/Dashboard/Dashboard";

export const Routes: FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <DashboardHome />
            </Route>
            <Route exact path="/coins">
                <AllCoins />
            </Route>
            <Route path="/coins/:id">
                <CoinPage />
            </Route>
        </Switch>
    );
};
