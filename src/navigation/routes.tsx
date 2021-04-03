import React from 'react';
import {DrawerCategory, RouteEntry} from "./types";
import HomePage from "../pages/Home";
import PrintAdjusterPage, {Logo as PrintAdjusterLogo} from "../pages/PrintAdjuster";
import { Home } from '@material-ui/icons';

export const navigationRoutes: RouteEntry[] = [
    {
        path: '/print-adjuster',
        component: PrintAdjusterPage,
        drawer: {
            category: DrawerCategory.PRODUCT,
            title: 'Print adjuster',
            logo: PrintAdjusterLogo,
        },
    },
    {
        path: '/',
        component: HomePage,
        drawer: {
            category: DrawerCategory.DEFAULT,
            title: 'Home',
            logo: () => <Home/>,
        }
    },
];
