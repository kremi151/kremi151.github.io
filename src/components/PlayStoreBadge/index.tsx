import React from 'react';
import {Typography} from "@material-ui/core";
import './styles.css';

interface Props {
    appPackageName: string;
}

export default function PlayStoreBadge(props: Props) {
    const { appPackageName } = props;
    return (
        <div>
            <a href={`https://play.google.com/store/apps/details?id=${appPackageName}&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1`}>
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
    );
}