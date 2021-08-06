import React, {useCallback, useMemo, useState} from 'react';
import Layout from "./components/Layout";
import {
    HashRouter as Router,
} from "react-router-dom";
import {AppContextProvider, AppContextType, SidebarEntry} from "./context";
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import {green} from "@material-ui/core/colors";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function App() {
    const [appBarTitle, setAppBarTitle] = useState<string | undefined>();
    const [sidebarEntries, setSidebarEntries] = useState<SidebarEntry[] | undefined>();

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkModeState] = useState(() => prefersDarkMode
        || window.localStorage.getItem('theme') === 'dark');

    const setDarkMode = useCallback((darkMode: boolean) => {
        window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        setDarkModeState(darkMode);
    }, [setDarkModeState]);

    const theme = useMemo(() => createMuiTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                main: green[600],
            },
            secondary: {
                main: green[400],
            },
        },
    }), [darkMode]);

    const appContext = useMemo<AppContextType>(() => ({
        setDarkMode,
        setAppBarTitle,
        setSidebarEntries,
        darkMode,
        appBarTitle,
        sidebarEntries,
    }), [
        darkMode,
        appBarTitle,
        sidebarEntries,
        setDarkMode,
        setAppBarTitle,
        setSidebarEntries,
    ]);
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
