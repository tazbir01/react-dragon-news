import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNave from "../Shared/LeftSideNave/LeftSideNave";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNave from "../Shared/RightSideNave/RightSideNave";
import NewsCard from "./NewsCard";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {

    const news = useLoaderData()
    // console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="mt-16 grid md:grid-cols-4">
                <div className="border">
                    <LeftSideNave></LeftSideNave>
                </div>
                {/* news contsiner */}
                <div className="border md:col-span-2 p-3">
                    <h2 className="text-2xl font-semibold">Dragon News Home</h2>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div className="border">
                    <RightSideNave></RightSideNave>
                </div>
            </div>
        </div>
    );
};

export default Home;