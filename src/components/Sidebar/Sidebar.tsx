import React from "react";
import {SidebarEntry} from "../../context";
import {Link} from "@material-ui/core";
import {Link as RouterLink, useLocation} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2),
        userSelect: 'none',
    },
    title: {
        marginBottom: theme.spacing(1),
    },
}));

interface Props {
    entries: SidebarEntry[];
}

export function Sidebar({ entries }: Props) {
    const classes = useStyles();
    const { pathname } = useLocation();
    return (
        <div className={classes.container}>
            <Typography
                display="block"
                variant="h5"
                className={classes.title}
            >
                Navigation
            </Typography>
            {entries.map(({ title, route }) => pathname === route ? (
                <Typography
                    display="block"
                    variant="body1"
                >
                    {title}
                </Typography>
            ) : (
                <Link
                    component={RouterLink}
                    display="block"
                    variant="body1"
                    to={route}
                    key={title}
                >
                    {title}
                </Link>
            ))}
        </div>
    )
}
