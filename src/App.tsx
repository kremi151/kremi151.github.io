import React, {useMemo, useState} from 'react';
import Layout from "./components/Layout";
import {
    HashRouter as Router,
} from "react-router-dom";
import {AppContextProvider, AppContextType} from "./context";

export default function App() {
    const [appBarTitle, setAppBarTitle] = useState<string | undefined>();
    const appContext = useMemo<AppContextType>(() => ({
        setAppBarTitle,
        appBarTitle,
    }), [appBarTitle, setAppBarTitle]);
    return (
        <AppContextProvider value={appContext}>
            <Router>
                <Layout/>
            </Router>
        </AppContextProvider>
    );
}
