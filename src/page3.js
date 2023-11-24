import { Link , Outlet } from "react-router-dom";
import { useContext } from "react";
import { foods_database } from "./context";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Navbar } from './navbar/navbar';
import { Routes, Route } from "react-router-dom";

function Page3() {
    let foods = useContext(foods_database);
    let params = useParams();
    console.log(params);
    return (
        <>
            <Navbar />
            <h1>page3</h1>
            <Link to='setting'>to setting</Link>
            <Link to='/'>go to home</Link>
            <Outlet/>
        </>
    )
}

export { Page3 }