import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNave = () => {
    const [categories, setCategoties] = useState([])

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategoties(data))
    }, [])

    return (
        <div className="p-3">
            <h2 className="text-xl font-semibold">All Category</h2>
            {
                categories.map(category => <NavLink
                    className='block p-2 ml-4'
                    key={category.id}
                    to={`/category/${category.id}`}
                >{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNave;