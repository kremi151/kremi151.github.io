import React, {useCallback} from 'react';
import logo from './logo.png';
import clsx from 'clsx';
import './styles.css';
import {DrawerLogoProps} from "../../navigation/types";
import {useAppBarTitle, useAppContext} from "../../context";
import {Switch, Route, useRouteMatch, useHistory, useLocation} from "react-router-dom";
import StartPage from "./subpages/Start";
import {BottomNavigation, BottomNavigationAction, Container, makeStyles} from "@material-ui/core";
import {
    Info as InfoIcon,
    Restore as RestoreIcon,
    People as PeopleIcon,
} from "@material-ui/icons";
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
    const { drawerOpen } = useAppContext();
    const {path} = useRouteMatch();
    const { pathname } = useLocation();
    const history = useHistory();

    const onRouteChange = useCallback((event, newValue: string) => {
        history.push(newValue);
    }, [history]);

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
            <div className={drawerOpen ? clsx(
                styles.bottomNavigationContainer,
                styles.bottomNavigationContainerCloseable,
            ) : styles.bottomNavigationContainer}>
                <BottomNavigation showLabels onChange={onRouteChange} value={pathname}>
                    <BottomNavigationAction label="About" value={path} icon={<InfoIcon />} />
                    <BottomNavigationAction label="Changelog" value={`${path}${pathChangelog}`} icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Contribute" value={`${path}${pathContribute}`} icon={<PeopleIcon />} />
                </BottomNavigation>
            </div>
        </div>
    );
}
