import React from 'react';
import {DrawerCategory, RouteEntry} from "./types";
import HomePage from "../pages/Home";
import PrintAdjusterPage, {Logo as PrintAdjusterLogo} from "../pages/PrintAdjuster";
import App3DTTTPage, {Logo as App3DTTTLogo} from "../pages/3DTTT";
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
        path: '/3dttt',
        component: App3DTTTPage,
        drawer: {
            category: DrawerCategory.PRODUCT,
            title: '3D Tic Tac Toe',
            logo: App3DTTTLogo,
        },
    },
    {
        path: '/',
        component: HomePage,
        drawer: {
            category: DrawerCategory.DEFAULT,
            title: 'Home',
            logo: () => <Home/>,
            priority: 999, // Should be the very first item that's rendered, but the last one in this list
        },
    },
];
