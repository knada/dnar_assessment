import { FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./theme/global";
import theme from "./theme";
import Dashboard from "./components/Dashboard/Dashboard";

const AppContainer = styled.div``;

const App: FC = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles />
                    <AppContainer>
                        <Dashboard />
                    </AppContainer>
                </>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
