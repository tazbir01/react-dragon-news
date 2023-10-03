import moment from "moment/moment";
import logo from "../../../assets/logo.png"
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div>
            <img className="mx-auto mt-10" src={logo} alt="" />
            <p className="text-lg font text-center mt-4">Journalism Without Fear or Favour</p>
            <p className="text-center">{moment().format("dddd, MMMM D, YYYY")}</p>
            <div className="flex items-center bg-slate-100 p-4 mt-7">
                <button className="bg-pink-600 text-white text-xl font-semibold px-6 py-2 mr-5">Latest</button>
                <Marquee>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
            </div>
        </div>
    );
};

export default Header;