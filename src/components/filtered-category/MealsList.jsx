import MealItem from "./MealsItem";
import Preloader from "../Preloader";

const MealsList = ({meals}) => {
    console.log(meals)
    return(
        <div className="list">
            {meals?
                meals.map((meal) => (
                    <MealItem key={meal.idMeal} meal={meal}/>
                ))
                :
                <Preloader/>
            }
        </div>
    )
}

export default MealsList