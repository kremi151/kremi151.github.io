import React from 'react';
import Layout from "./components/Layout";
import {
    HashRouter as Router,
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Layout/>
        </Router>
    );
}
