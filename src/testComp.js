import { useContext } from "react"
import { foods_database } from "./context"


function TestComp() {
    let all = useContext(foods_database);
    console.log(all.allProducts[0]);
    return (
        <>
           <p> {all.allProducts[0].id}</p>
        </>
    )
}

export { TestComp }