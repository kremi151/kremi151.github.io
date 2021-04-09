import React, {useContext, useEffect} from 'react';

interface AppContextType {
    setAppBarTitle(title: string | undefined): void;
    setDrawerOpen(open: boolean): void;

    appBarTitle: string | undefined;
    drawerOpen: boolean;
}

const appContext = React.createContext<AppContextType>({
    setAppBarTitle: () => {},
    setDrawerOpen: () => {},
    appBarTitle: undefined,
    drawerOpen: false,
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

export {
    Provider as AppContextProvider,
    Consumer as AppContextConsumer,
    useAppContext,
    useAppBarTitle,
};
export type { AppContextType };
