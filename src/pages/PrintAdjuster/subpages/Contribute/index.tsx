import React from 'react';
import {Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";

export default function ContributePage() {
    return (
        <div>
            <Typography variant="h5">
                Become a Beta tester
            </Typography>
            <Typography paragraph>
                You can subscribe to become a Beta tester of Print adjuster.<br/>
                As a Beta tester, you will receive new updates earlier and you can help evaluating them before the official release.<br/>
                You can subscribe <Link href="https://play.google.com/apps/testing/lu.kremi151.printresizer">here</Link>, and any feedback is welcome via <Link href="mailto:kremi151dev@gmail.com">email</Link>.
            </Typography>

            <Typography variant="h5">
                Got ideas for improvements or new features?
            </Typography>
            <Typography paragraph>
                Send me an <Link href="mailto:kremi151dev@gmail.com">email</Link>.
            </Typography>
        </div>
    );
}
