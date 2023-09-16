import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Full Stack Application</a>
                   
                    <Link className="btn btn-outline-light" to={"/addUser"}>Add User</Link>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
