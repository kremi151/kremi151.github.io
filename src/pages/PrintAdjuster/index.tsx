import React, {useMemo} from 'react';
import logo from './logo.png';
import './styles.css';
import {DrawerLogoProps} from "../../navigation/types";
import {SidebarEntry, useAppBarTitle, useSidebarEntries} from "../../context";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import StartPage from "./subpages/Start";
import {Container, makeStyles} from "@material-ui/core";
import ChangelogPage from "./subpages/Changelog";
import FAQPage from "./subpages/FAQs";
import ContributePage from "./subpages/Contribute";

const pathChangelog = '/changelog';
const pathFAQs = '/faqs';
const pathContribute = '/contribute';

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
            title: 'FAQs',
            route: `${path}${pathFAQs}`,
        },
        {
            title: 'Contribute',
            route: `${path}${pathContribute}`,
        },
    ], [path]);
    useSidebarEntries(sidebarEntries);

    return (
        <div className={styles.root}>
            <Switch>
                <Route exact path={path}>
                    <StartPage />
                </Route>
                <Route path={`${path}${pathChangelog}`}>
                    <ChangelogPage />
                </Route>
                <Route path={`${path}${pathFAQs}`}>
                    <FAQPage />
                </Route>
                <Route path={`${path}${pathContribute}`}>
                    <ContributePage />
                </Route>
            </Switch>
        </div>
    );
}
