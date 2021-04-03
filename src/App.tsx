import React, {useMemo, useState} from 'react';
import Layout from "./components/Layout";
import {
    HashRouter as Router,
} from "react-router-dom";
import {AppContextProvider, AppContextType} from "./context";
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import {green} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[600],
        },
        secondary: {
            main: green[400],
        },
    },
});

export default function App() {
    const [appBarTitle, setAppBarTitle] = useState<string | undefined>();
    const appContext = useMemo<AppContextType>(() => ({
        setAppBarTitle,
        appBarTitle,
    }), [appBarTitle, setAppBarTitle]);
    return (
        <AppContextProvider value={appContext}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Layout/>
                </Router>
            </ThemeProvider>
        </AppContextProvider>
    );
}
