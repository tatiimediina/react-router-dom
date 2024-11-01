//lazy login
import { lazy } from "react";

export const Home = lazy(() => import("./Home.jsx"));
export const Landing = lazy(() => import("./Landing.jsx"));
export const Login = lazy(() => import("./Login.jsx"));
export const NotFound = lazy(() => import("./NotFound.jsx"));
