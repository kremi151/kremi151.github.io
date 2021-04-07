import React, {useCallback} from 'react';
import clsx from 'clsx';
import {
    AppBar,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Toolbar,
    Typography,
    useTheme
} from "@material-ui/core";
import {ChevronLeft, ChevronRight, Menu as MenuIcon,} from '@material-ui/icons';
import {Route, Switch as RouterSwitch, Link} from "react-router-dom";
import {navigationRoutes} from "../../navigation/routes";
import {DrawerCategory, DrawerLogoProps, RouteEntry} from "../../navigation/types";
import {useAppContext} from "../../context";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
    },
}));

const defaultLogoProps: DrawerLogoProps = {
    width: 24,
    height: 24,
};

function DrawerMenuItem(props: RouteEntry) {
    const {
        path,
        drawer,
    } = props;
    if (!drawer) {
        return null;
    }
    const {
        logo,
        title,
    } = drawer;
    return (
        <ListItem button component={Link} to={path}>
            <ListItemIcon>
                {React.createElement(logo, defaultLogoProps)}
            </ListItemIcon>
            <ListItemText primary={title}/>
        </ListItem>
    );
}

export default function Layout() {
    const classes = useStyles();
    const theme = useTheme();
    const {
        appBarTitle,
        setDrawerOpen,
        drawerOpen,
    } = useAppContext();

    const handleDrawerOpen = useCallback(() => {
        setDrawerOpen(true);
    }, [setDrawerOpen]);

    const handleDrawerClose = useCallback(() => {
        setDrawerOpen(false);
    }, [setDrawerOpen]);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: drawerOpen,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: drawerOpen,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {appBarTitle || 'kremi151'}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: drawerOpen,
                    [classes.drawerClose]: !drawerOpen,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: drawerOpen,
                        [classes.drawerClose]: !drawerOpen,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRight/> : <ChevronLeft/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {navigationRoutes.filter(({drawer}) => drawer?.category === DrawerCategory.DEFAULT).map((entry, index) => (
                        <DrawerMenuItem {...entry} key={`default_entry_${index}`} />
                    ))}
                </List>
                <Divider/>
                <List>
                    {navigationRoutes.filter(({drawer}) => drawer?.category === DrawerCategory.PRODUCT).map((entry, index) => (
                        <DrawerMenuItem {...entry} key={`product_entry_${index}`} />
                    ))}
                </List>
            </Drawer>
            <main className={classes.content} onClick={handleDrawerClose}>
                <div className={classes.toolbar}/>
                <RouterSwitch>
                    {navigationRoutes.map(({path, component}) => (
                        <Route path={path} key={`route_${path}`}>
                            {React.createElement(component, {})}
                        </Route>
                    ))}
                </RouterSwitch>
            </main>
        </div>
    );
}
