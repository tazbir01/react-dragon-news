import Header from "../Shared/Header/Header";
import LeftSideNave from "../Shared/LeftSideNave/LeftSideNave";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNave from "../Shared/RightSideNave/RightSideNave";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="mt-16 grid md:grid-cols-4">
                <div className="border">
                    <LeftSideNave></LeftSideNave>
                </div>
                <div className="border md:col-span-2">
                    <h2 className="text-xl font-semibold">Dragon News Home</h2>
                </div>
                <div className="border">
                    <RightSideNave></RightSideNave>
                </div>
            </div>
        </div>
    );
};

export default Home;