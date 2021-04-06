import React, {useCallback} from 'react';
import logo from './logo.png';
import './styles.css';
import {DrawerLogoProps} from "../../navigation/types";
import {useAppBarTitle} from "../../context";
import {Switch, Route, useRouteMatch, useHistory, useLocation} from "react-router-dom";
import StartPage from "./subpages/Start";
import {BottomNavigation, BottomNavigationAction, makeStyles} from "@material-ui/core";
import {
    Info as InfoIcon,
    Refresh as RefreshIcon,
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
    const { pathname } = useLocation();
    const history = useHistory();
    const onRouteChange = useCallback((event, newValue: string) => {
        history.push(newValue);
    }, [history]);
    return (
        <div className={styles.root}>
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
            <div className={styles.bottomNavigationContainer}>
                <BottomNavigation showLabels onChange={onRouteChange} value={pathname}>
                    <BottomNavigationAction label="About" value={path} icon={<InfoIcon />} />
                    <BottomNavigationAction label="Changelog" value={`${path}${pathChangelog}`} icon={<RefreshIcon />} />
                    <BottomNavigationAction label="Contribute" value={`${path}${pathContribute}`} icon={<PeopleIcon />} />
                </BottomNavigation>
            </div>
        </div>
    );
}
