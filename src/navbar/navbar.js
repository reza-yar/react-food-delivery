import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <header>
            <h1>رستوران دلپذیر</h1>
            <Link to='/'>صفحه اصلی</Link>
            <Link to=''>کاربر</Link>
            <Link to=''>تماس با ما</Link>
            <Link to=''>لیست علاقه مندیها</Link>
        </header>
    )
}

export { Navbar }