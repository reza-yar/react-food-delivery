import { useContext } from "react"
import { foods_database } from "./context";
import { Link } from "react-router-dom";


function TestComp() {
    let all = useContext(foods_database);
    
    return (
        <>
            <h1>main page</h1>
            
            
            <Link to='/page2'>page2</Link>
            <hr />
            <Link to="/page3">page3</Link>
        </>
    )
}

export { TestComp }