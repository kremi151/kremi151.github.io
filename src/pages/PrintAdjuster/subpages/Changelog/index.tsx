import React, {useCallback, useState} from 'react';
import ChangelogsJson from './changelogs/index.json';
import {
    Card,
    CardContent,
    CardHeader, Collapse, IconButton,
    makeStyles,
} from "@material-ui/core";
import {
    ArrowDropDown as ArrowDropDownIcon,
    ArrowDropUp as ArrowDropUpIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        marginBottom: theme.spacing(2),
    },
}));

interface VersionProps {
    version: string;
    build: number;
    date: string;
    changes: string[];

}

function ChangelogCard(props: VersionProps) {
    const styles = useStyles();
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = useCallback(() => setExpanded(!expanded), [
        setExpanded, expanded,
    ]);
    return (
        <Card key={props.build} className={styles.card}>
            <CardHeader
                title={`Version ${props.version}`}
                subheader={`Build ${props.build}, released on ${props.date}`}
                action={
                    <IconButton onClick={toggleExpanded}>
                        {expanded ? (
                            <ArrowDropUpIcon />
                        ) : (
                            <ArrowDropDownIcon />
                        )}
                    </IconButton>
                }
            />
            <Collapse in={expanded}>
                <CardContent>
                    <ul>
                        {props.changes.map((change, index) => (
                            <li key={`change_${props.build}_${index}`}>
                                {change}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default function ChangelogPage() {
    const styles = useStyles();
    return (
        <div className={styles.root}>
            {ChangelogsJson.versions.map(version => (
                <ChangelogCard {...version} key={`changelog_${version.build}`} />
            ))}
        </div>
    );
}
