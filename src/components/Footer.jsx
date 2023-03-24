import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <footer className="page-footer  teal">
            <div className="footer-copyright">
                <div className="container">
                    © 2023 Copyright Text
                    <Link to="https://github.com/Simernope/food-receipts" >
                        Repo
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export {Footer}