import React from 'react';
import logo from './logo.png';
import {Typography} from "@material-ui/core";
import './styles.css';
import {DrawerLogoProps} from "../../navigation/types";
import {useAppBarTitle} from "../../context";
import PlayStoreBadge from "../../components/PlayStoreBadge";

export function Logo(props: DrawerLogoProps) {
    return (
        <img src={logo} width={props.width} height={props.height} />
    );
}

export default function PrintAdjusterPage() {
    useAppBarTitle('Print adjuster');
    return (
        <div>
            <Typography paragraph>
                This page is currently under construction 🚧
            </Typography>
            <PlayStoreBadge appPackageName="lu.kremi151.printresizer" />
        </div>
    );
}