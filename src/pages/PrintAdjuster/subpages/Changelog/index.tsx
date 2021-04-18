import React, {useCallback, useEffect, useState} from 'react';
import {
    Card,
    CardContent,
    CardHeader, CircularProgress, Collapse, IconButton,
    makeStyles,
} from "@material-ui/core";
import {
    ArrowDropDown as ArrowDropDownIcon,
    ArrowDropUp as ArrowDropUpIcon,
} from '@material-ui/icons';
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        marginBottom: theme.spacing(2),
    },
    loadingRoot: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

interface VersionProps {
    version: string;
    build: number;
    date: string;
    changes: string[];
}

interface Changelog {
    versions: VersionProps[];
}

enum LoadState {
    LOADING,
    LOADED,
    ERROR,
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
    const [changelogState, setChangelogState] = useState(LoadState.LOADING);
    const [changelog, setChangelog] = useState<Changelog>({ versions: [] });

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kremi151/kremi151.github.io/master/changelogs/printadjuster.json')
            .then(response => response.json())
            .then(response => {
                setChangelog(response);
                setChangelogState(LoadState.LOADED);
            })
            .catch(error => {
                console.error('Could not load changelog', error);
                setChangelogState(LoadState.ERROR);
            });
    }, []);

    switch (changelogState) {
        case LoadState.LOADING:
            return (
                <div className={styles.loadingRoot}>
                    <CircularProgress />
                </div>
            );
        case LoadState.ERROR:
            return (
                <div className={styles.loadingRoot}>
                    <Alert severity="error">
                        The changelog could not be loaded
                    </Alert>
                </div>
            );
        case LoadState.LOADED:
            return (
                <div className={styles.root}>
                    {changelog.versions.map(version => (
                        <ChangelogCard {...version} key={`changelog_${version.build}`} />
                    ))}
                </div>
            );
    }
}
