import React, {useContext, useEffect} from 'react';

interface AppContextType {
    setAppBarTitle(title: string | undefined): void;

    appBarTitle: string | undefined;
}

const appContext = React.createContext<AppContextType>({
    setAppBarTitle: () => {},
    appBarTitle: undefined,
});
const { Provider, Consumer } = appContext;

function useAppContext(): AppContextType {
    return useContext(appContext);
}

function useAppBarTitle(title: string) {
    const { setAppBarTitle } = useContext(appContext);
    useEffect(() => {
        setAppBarTitle(title);
        return () => setAppBarTitle(undefined);
    }, [setAppBarTitle, title]);
}

export {
    Provider as AppContextProvider,
    Consumer as AppContextConsumer,
    useAppContext,
    useAppBarTitle,
};
export type { AppContextType };
