import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMealById} from "../api";
import Preloader from "../components/Preloader";

const MealReceipt = () => {
    const {name, id} = useParams()
    const value = useParams()
    console.log(value)
    const [mealData, setMealData] = useState([])

    useEffect(() => {
        getMealById(id).then(
            (data) => setMealData(data.meals[0])
        )
    }, [id])
    console.log(mealData)
    return (
        <>
            <nav className="nav">
                <div className="nav-wrapper waves-light">
                    <div className="col s12">
                        <Link to="/" className="breadcrumb">All Categories</Link>
                        <Link to={`/category/${name}`} className="breadcrumb">{name}</Link>
                        <Link to={`/category/${name}/${id}`} className="breadcrumb">{mealData.strMeal}</Link>
                    </div>
                </div>
            </nav>
            {
                mealData.idMeal ?
                    <div className="receipt">
                        <div className="receipt-photo">
                            <img src={mealData.strMealThumb} alt={mealData.strMeal}/>
                        </div>
                        <h2>{mealData.strMeal}</h2>
                        <table>
                            <thead>
                            <tr>
                                <th>
                                    Ingredient
                                </th>
                                <th>
                                    Measure
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Object.keys(mealData).map((ingredient) => {
                                    if (ingredient.includes("strIngredient") && mealData[ingredient]) {
                                        return (
                                            <tr key={mealData[ingredient]}>
                                                <td>{mealData[ingredient]}</td>
                                                <td>
                                                    {
                                                        mealData[`strMeasure${ingredient.slice(13)}`]
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    } else {
                                        return null
                                    }
                                })
                            }

                            </tbody>
                        </table>
                        <h3>Description</h3>
                        <p>{mealData.strInstructions}</p>
                        {

                            mealData.strYoutube &&
                            <>
                                <h3>Video</h3>
                                <iframe width="1280" height="720"
                                        src={`https://www.youtube.com/embed/${mealData.strYoutube.slice(-11)}`}
                                        title={mealData.strMeal}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                ></iframe>
                            </>

                        }

                    </div>
                    :
                    <Preloader/>
            }

        </>

    )
}

export default MealReceipt