import React from 'react';
import {Typography} from "@material-ui/core";

export default function ContributePage() {
    return (
        <div>
            <Typography variant="h5">
                Become a Beta tester
            </Typography>
            <Typography paragraph style={{whiteSpace: 'pre-line'}}>
                You can subscribe to become a Beta tester of PrintAdjuster.<br/>
                As a Beta tester, you will receive new updates earlier and you can help evaluating them before the official release.<br/>
                You can subscribe <a href={"https://play.google.com/apps/testing/lu.kremi151.printresizer"}>here</a>, and any feedback is welcome via <a href={"mailto:kremi151dev@gmail.com"}>email</a>.
            </Typography>

            <Typography variant="h5">
                Got ideas for improvements or new features?
            </Typography>
            <Typography paragraph style={{whiteSpace: 'pre-line'}}>
                Send me an <a href={"mailto:kremi151dev@gmail.com"}>email</a>.
            </Typography>
        </div>
    );
}
