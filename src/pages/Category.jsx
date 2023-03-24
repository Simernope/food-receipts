import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getFilteredCategory} from "../api";
import MealsList from "../components/filtered-category/MealsList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const Category = () => {
    const [meals, setMeals] = useState([])
    const [filteredMeals, setFilteredMeals] = useState([])
    const {name} = useParams()
    const navigate = useNavigate()
    console.log(navigate)
    const {search} = useLocation()
    console.log(search)
    const handleSearch = (searchValue) => {
        setFilteredMeals(
            meals.filter(item => item.strMeal.toLowerCase().includes(searchValue.toLowerCase()))
        )
        navigate({
            search: `search?=${searchValue}`
        })
    }

    useEffect(() => {
        getFilteredCategory(name).then((data) => {
            setMeals(data.meals)
            setFilteredMeals(
                search ?
                data.meals.filter(item => item.strMeal
                    .toLowerCase()
                    .includes(search
                        .split('=')[1]
                        .toLowerCase()))
                    :
                    data.meals)
            }
        )
    }, [name, search])
    console.log(meals)
    return (
        <>

            <nav className="nav">
                <div className="nav-wrapper waves-light">
                    <div className="col s12">
                        <Link to="/" className="breadcrumb">All Categories</Link>
                        <Link to={`/category/${name}`} className="breadcrumb">{name}</Link>
                    </div>
                </div>
            </nav>
            <Search fc={handleSearch}  placeholder={"Search for Meal"}/>
            <div className="content">
                {meals.length ?
                    <MealsList meals={filteredMeals}/>
                    :
                    <Preloader/>
                }
            </div>
        </>
    )

}

export default Category