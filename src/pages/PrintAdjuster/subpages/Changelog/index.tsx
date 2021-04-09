import React from 'react';
import ChangelogsJson from './changelogs/index.json';
import {
    Card,
    CardContent,
    CardHeader,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        marginBottom: theme.spacing(2),
    },
}));

export default function ChangelogPage() {
    const styles = useStyles();
    return (
        <div className={styles.root}>
            {ChangelogsJson.versions.map(version => (
                <Card key={version.build} className={styles.card}>
                    <CardHeader
                        title={`Version ${version.version}`}
                        subheader={`Build ${version.build}, released on ${version.date}`}
                    />
                    <CardContent>
                        <ul>
                            {version.changes.map((change, index) => (
                                <li key={`change_${version.build}_${index}`}>
                                    {change}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
