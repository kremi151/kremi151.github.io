import { makeStyles } from '@material-ui/core';
import logo from './logo.png';
import React, { useMemo } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import {SidebarEntry, useAppBarTitle, useSidebarEntries} from "../../context";
import { PrivacyPolicy } from "../../components/PrivacyPolicy";
import { DrawerLogoProps } from '../../navigation/types';

const pathPrivacyPolicy = '/privacy-policy';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
}));

export function Logo(props: DrawerLogoProps) {
    return (
        <img src={logo} width={props.width} height={props.height} />
    );
}

export default function App3DTTTPage() {
    useAppBarTitle('3D Tic Tac Toe');
    
    const styles = useStyles();
    const {path} = useRouteMatch();

    const sidebarEntries = useMemo<SidebarEntry[]>(() => [
        {
            title: 'About',
            route: path,
        },
        {
            title: 'Privacy policy',
            route: `${path}${pathPrivacyPolicy}`,
        },
    ], [path]);
    useSidebarEntries(sidebarEntries);

    return (
        <div className={styles.root}>
            <Switch>
                <Route exact path={path}>
                    <div />
                </Route>
                <Route path={`${path}${pathPrivacyPolicy}`}>
                    <PrivacyPolicy appName="3D Tic Tac Toe" />
                </Route>
            </Switch>
        </div>
    );
}