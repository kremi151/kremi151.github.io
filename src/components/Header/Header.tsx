import React, {useCallback} from "react";
import SearchIcon from '@material-ui/icons/Search';
import GithubIcon from '@material-ui/icons/GitHub';
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-around',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export interface HeaderSection {
    title: string;
    route: string;
}

interface Props {
    title: string;
    sections: HeaderSection[];
}

export function Header({ title, sections }: Props) {
    const classes = useStyles();

    return (
        <>
            <Toolbar>
                <Button size="small">Subscribe</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton href="https://github.com/kremi151">
                    <GithubIcon />
                </IconButton>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                    <Link
                        component={RouterLink}
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.route}
                        className={classes.toolbarLink}
                        to={section.route}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </>
    );
}
