import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import MealReceipt from "./pages/MealReceipt";

function App() {
    return (
        <Router basename='/food-receipts'>
            <Header/>
            <main className='container content'>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/category/:name" element={<Category/>}/>
                    <Route path="/category/:name/:id" element={<MealReceipt/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>

            </main>
            <Footer/>
        </Router>

    );
}

export default App;
