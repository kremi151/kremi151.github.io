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

interface ChangelogCardProps {
    version: VersionProps;
    expanded: boolean;
    onToggleExpanded(version: VersionProps): void;
}

function ChangelogCard(props: ChangelogCardProps) {
    const styles = useStyles();
    const {
        expanded,
        onToggleExpanded,
        version,
    } = props;
    const toggleExpanded = useCallback(() => onToggleExpanded(version), [
        onToggleExpanded, version,
    ]);
    return (
        <Card key={version.build} className={styles.card}>
            <CardHeader
                title={`Version ${version.version}`}
                subheader={`Build ${version.build}, released on ${version.date}`}
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
                        {version.changes.map((change, index) => (
                            <li key={`change_${version.build}_${index}`}>
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
    const [expanded, setExpanded] = useState<{ [build: number]: boolean | undefined }>({});

    const onToggleExpanded = useCallback((version: VersionProps) => {
        setExpanded(e => ({
            ...e,
            [version.build]: !e[version.build],
        }));
    }, [setExpanded]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kremi151/kremi151.github.io/master/changelogs/printadjuster.json')
            .then(response => response.json())
            .then((response: Changelog) => {
                setChangelog(response);
                setChangelogState(LoadState.LOADED);
                if (response.versions?.length) {
                    const newestBuild = Math.max(...response.versions.map(v => v.build));
                    setExpanded(e => ({
                        ...e,
                        [newestBuild]: true,
                    }));
                }
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
                        <ChangelogCard
                            key={`changelog_${version.build}`}
                            version={version}
                            expanded={!!expanded[version.build]}
                            onToggleExpanded={onToggleExpanded}
                        />
                    ))}
                </div>
            );
    }
}
