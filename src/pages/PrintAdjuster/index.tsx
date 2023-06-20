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
import { PrivacyPolicy } from "./subpages/PrivacyPolicy";

const pathChangelog = '/changelog';
const pathFAQs = '/faqs';
const pathContribute = '/contribute';
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
                <Route path={`${path}${pathPrivacyPolicy}`}>
                    <PrivacyPolicy />
                </Route>
            </Switch>
        </div>
    );
}
