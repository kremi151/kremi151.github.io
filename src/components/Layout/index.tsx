import React, {useMemo} from 'react';
import {
    Container,
    CssBaseline,
    makeStyles,
} from "@material-ui/core";
import {Route, Switch as RouterSwitch} from "react-router-dom";
import {navigationRoutes} from "../../navigation/routes";
import {useAppContext} from "../../context";
import {Header, HeaderSection} from "../Header";
import Grid from "@material-ui/core/Grid";
import {Sidebar} from "../Sidebar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        userSelect: 'none',
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
        [theme.breakpoints.down('xs')]: {
            width: 0,
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
    },
    mainContent: {
        padding: theme.spacing(1),
    },
    sidenavIcon: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
        },
    },
}));

export default function Layout() {
    const classes = useStyles();
    const {
        appBarTitle,
        sidebarEntries,
    } = useAppContext();

    const sections = useMemo<HeaderSection[]>(() => navigationRoutes.map((r) => ({
        title: r.drawer?.title || 'Missing title',
        route: r.path,
    })), []);

    const routes = useMemo(() => navigationRoutes.map(({path, component}) => (
        <Route
            path={path}
            key={`route_${path}`}
            render={() => React.createElement(component, {})}
        />
    )), []);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Header
                    title={appBarTitle || 'kremi151'}
                    sections={sections}
                />
                <main className={classes.content}>
                    <Grid container>
                        <Grid
                            xs={12}
                            md={sidebarEntries ? 10 : 12}
                            className={classes.mainContent}
                        >
                            <RouterSwitch>
                                {routes}
                            </RouterSwitch>
                        </Grid>
                        {sidebarEntries && (
                            <Grid item xs={12} md={2}>
                                <Sidebar entries={sidebarEntries} />
                            </Grid>
                        )}
                    </Grid>
                </main>
            </Container>
        </div>
    );
}
