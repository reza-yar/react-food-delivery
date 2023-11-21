import { Link } from "react-router-dom";
import { useContext } from "react";
import { foods_database } from "./context";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Page3() {
    let foods = useContext(foods_database);
    let params = useParams();
    console.log(params);
    return (
        <>
            {params.op == ':200' ?
                (<>
                    <Navigate to='/' />
                </>
                ) : (
                    <>
                        <h1>page3</h1>
                        <Link to="/">go to home</Link>
                        <hr />
                        {foods.allProducts.map(a =>
                            <>
                                <Link to={`/${a.id}`}>{a.id}</Link>
                                <hr />
                            </>
                        )}
                    </>
                )
            }

        </>
    )
}

export { Page3 }