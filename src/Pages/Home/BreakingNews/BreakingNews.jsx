import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex items-center bg-slate-100 p-4 mt-7">
            <button className="bg-pink-600 text-white text-xl font-semibold px-6 py-2 mr-5">Latest</button>
            <Marquee>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
        </div>
    );
};

export default BreakingNews;