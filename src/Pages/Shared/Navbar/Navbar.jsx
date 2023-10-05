import { Link, NavLink } from "react-router-dom";
import userDefaultLogo from "../../../assets/user.png"
import { useContext } from "react";
import { authContext } from "../../../Provider/AuthProvider";


const Navbar = () => {

    const { user, logout } = useContext(authContext)

    const link = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/career"}>Career</NavLink></li>
    </>

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="navbar bg-base-100 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <img className="w-12 mr-2 " src={userDefaultLogo} alt="" />
                {/* {
                    user ? 
                    <button onClick={handleLogout} className="bg-slate-700 rounded-sm text-white text-xl font-semibold px-8 py-2">Logout</button>
                    :
                    <Link to="/login"><button className="bg-slate-700 rounded-sm text-white text-xl font-semibold px-8 py-2">Login</button></Link>
                } */}
                {
                   user ? <button onClick={handleLogout} className="bg-slate-700 rounded-sm text-white text-xl font-semibold px-8 py-2">Logout</button>
                    : <Link to="/login"><button className="bg-slate-700 rounded-sm text-white text-xl font-semibold px-8 py-2">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;