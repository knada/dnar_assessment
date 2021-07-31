import { FC } from "react";
import { Route, Switch } from "react-router";
import CoinPage from "../components/CoinPage/CoinPage";
import { DashboardHome } from "../components/Dashboard/Dashboard";

export const Routes: FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <DashboardHome />
            </Route>
            <Route path="/coins/:id">
                <CoinPage />
            </Route>
        </Switch>
    );
};
