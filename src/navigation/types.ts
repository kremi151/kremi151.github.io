import React from "react";

export enum DrawerCategory {
    DEFAULT,
    PRODUCT,
}

export interface DrawerLogoProps {
    readonly width: number;
    readonly height: number;
}

export interface DrawerEntry {
    readonly category: DrawerCategory;
    readonly title: string;
    readonly logo: React.FC<DrawerLogoProps>;
}

export interface RouteEntry {
    readonly path: string;
    readonly component: React.FC;
    readonly drawer?: DrawerEntry;
}