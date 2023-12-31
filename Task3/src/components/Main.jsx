
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";


const Main = () => {
    return (
        <div className="main-container">
            <Navbar />
            <SearchBar />
            <Carousel />
        </div>
    );
}

export default Main;
