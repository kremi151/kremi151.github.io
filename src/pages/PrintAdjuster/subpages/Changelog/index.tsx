import React, {useCallback, useEffect, useState} from 'react';
import {
    CircularProgress,
    makeStyles,
} from "@material-ui/core";
import { LoadState } from '../../../../util/types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Alert from "@material-ui/lab/Alert";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    details: {
        flexDirection: 'column',
    },
    loadingRoot: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    changeList: {
        marginTop: theme.spacing(1),
    },
    warningContent: {
        whiteSpace: 'pre-wrap',
    },
    pageTitle: {
        marginBottom: theme.spacing(1),
    },
}));

interface VersionProps {
    version: string;
    build: number;
    date: string;
    changes: string[];
    warnings?: string[];
}

interface Changelog {
    versions: VersionProps[];
}

interface ChangelogCardProps {
    version: VersionProps;
    expanded: boolean;
    onToggleExpanded(version: VersionProps, expand: boolean): void;
}

function ChangelogCard(props: ChangelogCardProps) {
    const styles = useStyles();
    const {
        expanded,
        onToggleExpanded,
        version,
    } = props;
    const toggleExpanded = useCallback((e: React.ChangeEvent<{}>, expand: boolean) => onToggleExpanded(version, expand), [
        onToggleExpanded, version,
    ]);
    return (
        <Accordion expanded={expanded} onChange={toggleExpanded}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.heading}>{`Version ${version.version}`}</Typography>
                {expanded || (
                    <Typography className={styles.secondaryHeading}>{`Build ${version.build}, released on ${version.date}`}</Typography>
                )}
            </AccordionSummary>
            <AccordionDetails className={styles.details}>
                <Typography>
                    <span>{`Build ${version.build}, released on ${version.date}`}</span>
                    <ul className={styles.changeList}>
                        {version.changes.map((change, index) => (
                            <li key={`change_${version.build}_${index}`}>
                                {change}
                            </li>
                        ))}
                    </ul>
                </Typography>
                {version.warnings?.map((warning, index) => (
                    <Alert severity="warning" key={`warn_${version.build}_${index}`}>
                        <span className={styles.warningContent}>{warning}</span>
                    </Alert>
                ))}
            </AccordionDetails>
        </Accordion>
    );
}

export default function ChangelogPage() {
    const styles = useStyles();
    const [changelogState, setChangelogState] = useState(LoadState.LOADING);
    const [changelog, setChangelog] = useState<Changelog>({ versions: [] });
    const [expanded, setExpanded] = useState<{ [build: number]: boolean | undefined }>({});

    const onToggleExpanded = useCallback((version: VersionProps, expand: boolean) => {
        setExpanded(e => ({
            ...e,
            [version.build]: expand,
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
                    <Typography variant="h4" className={styles.pageTitle}>Changelog</Typography>
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
