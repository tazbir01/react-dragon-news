import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    console.log(news)
    const {  details, title, image_url, _id } = news;
    return (
        <div>
            <div className=" bg-base-100 shadow-xl mt-5 mb-6">
            <img className="" src={image_url} alt="" />
                <div className="">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200
                        ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="font-bold text-blue-700">read more</Link></p>
                        : <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;