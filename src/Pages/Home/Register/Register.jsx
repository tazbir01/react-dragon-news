import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { authContext } from "../../../Provider/AuthProvider";

const Register = () => {

    const { creatUser } = useContext(authContext)
    
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        creatUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => console.log(error.message))
    }
    return (
        <div className="mb-5">
            <Navbar></Navbar>

            <h2 className="text-3xl font-bold text-center mt-7">register</h2>
            <form onSubmit={handleRegister} className="w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo url</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" required />
                </div>
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
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="mt-7 text-center">Have An Account ? <Link className="font-bold" to="/login">Login</Link></p>
        </div>

    );
};

export default Register;