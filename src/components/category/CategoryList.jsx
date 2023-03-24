import CategoryItem from "./CategoryItem";
import Preloader from "../Preloader";

const CategoryList = ({catalog}) => {
    console.log(catalog)
    return (
        <div className="list">
            {
                catalog ?
                catalog.map((category) => (
                    <CategoryItem key={category.idCategory} categoryCard={category}/>
                ))
                    :
                    <Preloader />

            }

        </div>
    )
}

export default CategoryList