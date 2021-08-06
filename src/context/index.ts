import React, {useContext, useEffect} from 'react';

interface SidebarEntry {
    title: string;
    route: string;
}

interface AppContextType {
    setDarkMode(darkMode: boolean): void;
    setAppBarTitle(title: string | undefined): void;
    setSidebarEntries(entries: SidebarEntry[] | undefined): void;

    darkMode: boolean;
    appBarTitle: string | undefined;
    sidebarEntries: SidebarEntry[] | undefined;
}

const appContext = React.createContext<AppContextType>({
    setDarkMode: () => {},
    setAppBarTitle: () => {},
    setSidebarEntries: () => {},
    darkMode: false,
    appBarTitle: undefined,
    sidebarEntries: undefined,
});
const { Provider, Consumer } = appContext;

function useAppContext(): AppContextType {
    return useContext(appContext);
}

function useAppBarTitle(title: string) {
    const { setAppBarTitle } = useContext(appContext);
    useEffect(() => {
        document.title = `${title} | kremi151`;
        setAppBarTitle(title);
        return () => {
            document.title = 'kremi151';
            setAppBarTitle(undefined);
        };
    }, [setAppBarTitle, title]);
}

function useSidebarEntries(entries: SidebarEntry[]) {
    const { setSidebarEntries } = useContext(appContext);
    useEffect(() => {
        setSidebarEntries(entries);
        return () => {
            setSidebarEntries(undefined);
        };
    }, [setSidebarEntries, entries]);
}

export {
    Provider as AppContextProvider,
    Consumer as AppContextConsumer,
    useAppContext,
    useAppBarTitle,
    useSidebarEntries,
};
export type {
    AppContextType,
    SidebarEntry,
};
