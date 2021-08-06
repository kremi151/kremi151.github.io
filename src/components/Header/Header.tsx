import React, {useCallback, useEffect, useMemo, useState} from "react";
import GithubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import MoonIcon from '@material-ui/icons/Brightness4';
import SunIcon from '@material-ui/icons/BrightnessHigh';
import Link from "@material-ui/core/Link";
import {useHistory} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Drawer from "@material-ui/core/Drawer/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {useAppContext} from "../../context";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarDrawerContainer: {
        width: 96,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-around',
        overflowX: 'auto',
    },
    toolbarLink: {
        cursor: 'pointer',
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export interface HeaderSection {
    title: string;
    route: string;
    priority?: number;
}

interface Props {
    title: string;
    sections: HeaderSection[];
}

export function Header({ title, sections: inSections }: Props) {
    const { breakpoints } = useTheme();
    const classes = useStyles();

    const { darkMode, setDarkMode } = useAppContext();

    const history = useHistory();

    const small = useMediaQuery(breakpoints.down('xs'));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const openDrawer = useCallback(() => {
        setDrawerOpen(true);
    }, [setDrawerOpen]);
    const closeDrawer = useCallback(() => {
        setDrawerOpen(false);
    }, [setDrawerOpen]);
    useEffect(() => {
        if (!small) {
            closeDrawer();
        }
    }, [small, closeDrawer]);

    const DarkModeIcon = darkMode ? SunIcon : MoonIcon;
    const toggleDarkMode = useCallback(() => {
        setDarkMode(!darkMode);
    }, [darkMode, setDarkMode]);

    const sections = useMemo(() => {
        const result = inSections.map(s => ({
            title: s.title,
            priority: s.priority || 0,
            onClick: () => {
                setDrawerOpen(false);
                history.push(s.route);
            },
        }));
        result.sort((a, b) => b.priority - a.priority);
        return result;
    }, [inSections, history, setDrawerOpen]);

    return (
        <div>
            <Toolbar className={classes.toolbar}>
                {small ? (
                    <div className={classes.toolbarDrawerContainer}>
                        <IconButton onClick={openDrawer}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                ) : (
                    <IconButton onClick={toggleDarkMode}>
                        <DarkModeIcon />
                    </IconButton>
                )}
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
                {small && (
                    <IconButton onClick={toggleDarkMode}>
                        <DarkModeIcon />
                    </IconButton>
                )}
                <IconButton href="https://github.com/kremi151">
                    <GithubIcon />
                </IconButton>
            </Toolbar>
            {small ? (
                <Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
                    <List>
                        {sections.map(({ title, onClick }) => (
                            <ListItem
                                key={title}
                                button
                                onClick={onClick}
                            >
                                <ListItemText primary={title} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            ) : (
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    {sections.map(({ title, onClick }) => (
                        <Link
                            color="inherit"
                            noWrap
                            key={title}
                            variant="body2"
                            className={classes.toolbarLink}
                            onClick={onClick}
                        >
                            {title}
                        </Link>
                    ))}
                </Toolbar>
            )}
        </div>
    );
}
