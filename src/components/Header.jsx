import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="teal">
            <div className="nav-wrapper">
                <Link to={"/"} className="brand-logo">Food recipes</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="https://github.com/Simernope/food-receipts" >
                            Repo
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export {Header}