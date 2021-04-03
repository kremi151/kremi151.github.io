import React from "react";

export interface RouteEntry {
    readonly path: string;
    readonly component: React.FC;
}