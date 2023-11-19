import { useContext } from "react"
import { foods_database } from "./context";
import { Link } from "react-router-dom";


function TestComp() {
    let all = useContext(foods_database);
    console.log(all.allProducts[0]);
    return (
        <>
            <h1>testComp</h1>
            <p> {all.allProducts[0].id}</p>
            <Link to='/page2'>page2</Link>
        </>
    )
}

export { TestComp }