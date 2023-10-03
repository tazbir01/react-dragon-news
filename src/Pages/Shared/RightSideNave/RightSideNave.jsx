import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qzoneImage1 from "../../../assets/qzone1.png"
import qzoneImage2 from "../../../assets/qzone2.png"
import qzoneImage3 from "../../../assets/qzone3.png"
import bg from '../../../assets/bg.png';
const RightSideNave = () => {
    return (
        <div>
            {/* login with */}
            <div className="p-3">
                <h2 className="text-2xl font-semibold mb-3">Login With</h2>
                <button className="btn btn-outline w-full mb-2">
                    <FaGoogle className="text-lg"></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub className="text-lg"></FaGithub>
                    Login with Github
                </button>
            </div>
            {/* social links */}
            <div className="p-3">
                <h2 className="text-xl font-semibold mb-3">Find Us On</h2>
                
                <a href="" className="border-2 p-4 flex items-center rounded-t-lg">
                    <FaFacebook className="text-lg mr-2"></FaFacebook>
                    Facebook
                </a>
                <a href="" className="border-x-2 p-4 flex items-center ">
                    <FaTwitter className="text-lg mr-2"></FaTwitter>
                    Twitter
                </a>
                <a href="" className="border-2 p-4 flex items-center rounded-b-lg">
                    <FaInstagram className="text-lg mr-2"></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* Q-zone */}
            <div className="p-3 bg-slate-100">
                <h2 className="text-xl font-semibold mb-3">Q-Zone</h2>
                <img src={qzoneImage1} alt="" />
                <img src={qzoneImage2} alt="" />
                <img src={qzoneImage3} alt="" />
            </div>
            {/* addvertise */}
            <div className="flex-col items-center justify-center" style={{backgroundImage: `url(${bg})`}}>
                <h2 className="text-xl text-white font-bold">Create an Amazing Newspaper</h2>
                <p className="text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn btn-secondary">Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNave;