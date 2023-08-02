import React from 'react';
import Link from "@material-ui/core/Link";
import Typography from '@material-ui/core/Typography';

interface Props {
    appName: string;
}

export default function PrivacyPolicy({ appName }: Props) {
    return (
        <div>
            <Typography variant="h5">Privacy Policy for {appName}</Typography>
            <Typography paragraph>
                We are committed to protecting the privacy of our users.
                This Privacy Policy outlines how we handle and safeguard any personal information collected or processed through our mobile application.
            </Typography>

            <Typography variant="h6">Information Collection:</Typography>
            <Typography paragraph>
                {appName} does not collect any personal data or information from you while using our app.
                We do not collect, store, or share any identifiable information about our users.
            </Typography>

            <Typography variant="h6">Usage Data:</Typography>
            <Typography paragraph>
                While using {appName}, we do not collect or track any usage data, including but not limited to your device information,
                IP address, or location data.
                We respect your privacy and believe in providing a safe and anonymous user experience.
            </Typography>

            <Typography variant="h6">Third-Party Services:</Typography>
            <Typography paragraph>
                We do not integrate any third-party services or libraries that may collect personal information through our app.
                Rest assured that your privacy remains protected within our application environment.
            </Typography>

            <Typography variant="h6">Advertising:</Typography>
            <Typography paragraph>
                {appName} does not display any third-party advertisements, and therefore, we do not share any user information
                with advertisers or ad networks.
            </Typography>

            <Typography variant="h6">Updates to the Privacy Policy:</Typography>
            <Typography paragraph>
                As we continue to improve and enhance {appName}, there may be occasional updates to this privacy policy.
                We encourage you to review this policy periodically for any changes. However, please note that our commitment to
                not collecting any user data will remain unchanged.
            </Typography>

            <Typography variant="h6">Contact Us:</Typography>
            <Typography paragraph>
                If you have any questions, concerns, or suggestions regarding our privacy policy or the practices of {appName},
                please contact us at <Link href="mailto:kremi151dev@gmail.com">kremi151dev@gmail.com</Link>.
            </Typography>
        </div>
    )
}