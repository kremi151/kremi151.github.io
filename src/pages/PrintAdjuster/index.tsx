import React, {useMemo} from 'react';
import logo from './logo.png';
import './styles.css';
import {DrawerLogoProps} from "../../navigation/types";
import {SidebarEntry, useAppBarTitle, useSidebarEntries} from "../../context";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import StartPage from "./subpages/Start";
import {Container, makeStyles} from "@material-ui/core";
import ChangelogPage from "./subpages/Changelog";
import ContributePage from "./subpages/Contribute";

const pathChangelog = '/changelog';
const pathContribute = '/contribute';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 56 + theme.spacing(2), // Height of BottomNavigation + some more padding
    },
    bottomNavigationContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(2),
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
    },
    bottomNavigationContainerCloseable: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
}));

export function Logo(props: DrawerLogoProps) {
    return (
        <img src={logo} width={props.width} height={props.height} />
    );
}

export default function PrintAdjusterPage() {
    useAppBarTitle('Print adjuster');

    const styles = useStyles();
    const {path} = useRouteMatch();

    const sidebarEntries = useMemo<SidebarEntry[]>(() => [
        {
            title: 'About',
            route: path,
        },
        {
            title: 'Changelog',
            route: `${path}${pathChangelog}`,
        },
        {
            title: 'Contribute',
            route: `${path}${pathContribute}`,
        },
    ], [path]);
    useSidebarEntries(sidebarEntries);

    return (
        <div className={styles.root}>
            <Container>
                <Switch>
                    <Route exact path={path}>
                        <StartPage />
                    </Route>
                    <Route path={`${path}${pathChangelog}`}>
                        <ChangelogPage />
                    </Route>
                    <Route path={`${path}${pathContribute}`}>
                        <ContributePage />
                    </Route>
                </Switch>
            </Container>
        </div>
    );
}
