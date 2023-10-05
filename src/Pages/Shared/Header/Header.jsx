import moment from "moment/moment";
import logo from "../../../assets/logo.png"

const Header = () => {
    return (
        <div>
            <img className="mx-auto mt-10" src={logo} alt="" />
            <p className="text-lg font text-center mt-4">Journalism Without Fear or Favour</p>
            <p className="text-center">{moment().format("dddd, MMMM D, YYYY")}</p>

        </div>
    );
};

export default Header;