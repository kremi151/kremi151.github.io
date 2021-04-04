import React from 'react';
import {Typography} from "@material-ui/core";
import PlayStoreBadge from "../../../../components/PlayStoreBadge";

export default function StartPage() {
    return (
        <div>
            <Typography paragraph>
                This page is currently under construction 🚧
            </Typography>
            <PlayStoreBadge appPackageName="lu.kremi151.printresizer" />
        </div>
    );
}
