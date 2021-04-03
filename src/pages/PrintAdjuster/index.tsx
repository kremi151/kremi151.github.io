import React from 'react';
import logo from './logo.png';
import {Typography} from "@material-ui/core";
import './styles.css';

export function Logo() {
    return (
        <img src={logo} width={24} height={24} />
    );
}

export default function PrintAdjusterPage() {
    return (
        <div>
            <Typography variant="h3" component="h1">
                Print adjuster
            </Typography>
            <Typography paragraph>
                This page is currently under construction 🚧
            </Typography>
            <div>
                <a href="https://play.google.com/store/apps/details?id=lu.kremi151.printresizer&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                    <img
                        className="playStoreBadge"
                        alt="Get it on Google Play"
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    />
                </a>
                <Typography variant="caption" display="block" gutterBottom>
                    Google Play and the Google Play logo are trademarks of Google LLC.
                </Typography>
            </div>
        </div>
    );
}