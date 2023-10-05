import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNave from "../Shared/RightSideNave/RightSideNave";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const {id} = useParams()

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="max-w-6xl grid grid-cols-4 mt-10">
                <div className="col-span-3">
                        <h2>news details</h2>
                        {id}
                </div>
                <div>
                    <RightSideNave></RightSideNave>
                </div>
            </div>
        </div>
    );
};

export default News;