import React from "react";

export enum DrawerCategory {
    DEFAULT,
    PRODUCT,
}

export interface DrawerEntry {
    readonly category: DrawerCategory;
    readonly title: string;
    readonly logo: React.FC;
}

export interface RouteEntry {
    readonly path: string;
    readonly component: React.FC;
    readonly drawer?: DrawerEntry;
}