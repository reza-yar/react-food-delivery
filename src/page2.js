import { Link } from "react-router-dom"
import { Navbar } from "./navbar/navbar";
import { useParams } from "react-router-dom";


function Page2() {
    let page_address = useParams();
    console.log(page_address);
    return (
        <>
            <Navbar />
            <h1>page2</h1>
            
            <Link to='/'>go to home</Link>
        </>
    )
}
export { Page2 }