import { useContext } from "react"

import { foods_database } from "../context";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../navbar/navbar";
import "./mainPage.css"


function MainPage() {
    let all = useContext(foods_database);
    let param = useParams()
    
    return (

        <div className="mainPage_container">
            <Navbar />
            <hr />
            <Link to='/page2'>page2</Link>
            <hr />
            <Link to="/page3">page3</Link>
        </div>


    )
}

export { MainPage }