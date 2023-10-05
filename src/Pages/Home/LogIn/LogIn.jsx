import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { authContext } from "../../../Provider/AuthProvider";


const LogIn = () => {
    const {loginUser} = useContext(authContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const handleLogIn = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'))
        const email = form.get('email')
        const password = form.get('password')

        loginUser(email, password)
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => console.log(error.massege))
    }
    return (
        <div className="mb-5">
            <Navbar></Navbar>

            <h1 className="text-3xl font-bold text-center mt-7">Login now!</h1>
            <div className=" w-1/2 mx-auto">
                <form onSubmit={handleLogIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center">Do not Have An Account ? <Link className="font-bold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default LogIn;