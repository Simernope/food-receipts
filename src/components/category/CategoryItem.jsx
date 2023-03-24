import {Link} from "react-router-dom";

const CategoryItem = ({categoryCard}) => {
    const{ strCategory, strCategoryThumb,strCategoryDescription} = categoryCard
    return(
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt="strCategoryThumb"/>
            </div>
            <div className="card-content">
                <span className="card-title lighten-2">{strCategory}</span>
                <p>{strCategoryDescription.slice(0,60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`}>
                    <button className="waves-effect waves-light btn">Meal Category</button>
                </Link>
            </div>
        </div>
    )
}

export default CategoryItem