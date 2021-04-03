import React from 'react';
import Layout from "./components/Layout";
import {
    BrowserRouter,
} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    );
}
