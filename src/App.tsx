import { FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/global";
import theme from "./theme";
import Dashboard from "./components/Dashboard/Dashboard";

const AppContainer = styled.div``;

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <AppContainer>
                    <Dashboard />
                </AppContainer>
            </>
        </ThemeProvider>
    );
};

export default App;
