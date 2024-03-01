import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
    return (
        <Header />
    );
}