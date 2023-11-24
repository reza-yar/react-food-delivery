import { Link } from "react-router-dom"
import { Navbar } from "./navbar/navbar";


function Page2() {
    return (
        <>
            <Navbar />
            <h1>page2</h1>
            <Link to='/'>go to home</Link>
        </>
    )
}
export { Page2 }