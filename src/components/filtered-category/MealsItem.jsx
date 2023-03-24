import {Link, useParams} from "react-router-dom";

const MealItem = ({meal}) => {
    const {strMealThumb, strMeal, idMeal} = meal
    const {name} = useParams()
    console.log(name)
    return(
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt="strCategoryThumb"/>
            </div>
            <div className="card-content">
                <span className="card-title lighten-2">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/category/${name}/${idMeal}`}>
                    <button className="waves-effect waves-light btn">Meal Receipt</button>
                </Link>
            </div>
        </div>
    )
}

export default MealItem