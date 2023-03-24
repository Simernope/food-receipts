import {useEffect, useState} from "react";
import {getAllCategories} from "../api";
import Preloader from "../components/Preloader";
import CategoryList from "../components/category/CategoryList";
import Search from "../components/Search";
import {useLocation, useNavigate} from "react-router-dom";

const Home = () => {
    const [categories, setCategories] = useState([])
    const [filteredCategories, setFilteredCategories] = useState([])
    const navigate = useNavigate()
    console.log(navigate)
    const {search} = useLocation()
    console.log(search)
    const handleSearch = (searchValue) => {
        setFilteredCategories(
            categories.filter(item => item.strCategory.toLowerCase().includes(searchValue.toLowerCase()))
        )
        navigate({
            search: `search?=${searchValue}`
        })
    }

    useEffect(() => {
        getAllCategories().then((data) => {
                setCategories(data.categories);
                setFilteredCategories(
                    search ?
                        data.categories.filter(item => item.strCategory
                            .toLowerCase()
                            .includes(search
                                .split('=')[1]
                                .toLowerCase()))
                        :
                        data.categories
                )

            }
        )


    }, [search])
    console.log(categories)
    return (
        <>
            <Search fc={handleSearch} placeholder={"Search for Category"}/>
            {
                categories.length ?
                    <CategoryList catalog={filteredCategories}/>
                    :
                    <Preloader/>
            }

        </>
    )
}

export default Home