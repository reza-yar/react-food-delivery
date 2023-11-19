import { Link } from "react-router-dom";
import { useContext } from "react";
import { foods_database } from "./context";

function Page3() {
    let foods = useContext(foods_database);
    console.log(foods.allProducts);
    return (
        <>
            <h1>page3</h1>
            <Link to="/">go to home</Link>
            <hr />
            {foods.allProducts.map(a =>
                <>
                    <a href="#">{a.id}</a>
                    <hr />
                </>
            )}
        </>
    )
}

export { Page3 }