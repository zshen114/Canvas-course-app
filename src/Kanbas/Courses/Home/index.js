import Modules from "../Modules";
import Content from "./Content";
import "./index.css";

function Home() {
    return (
        <div className="home">
            <div className="home-main-content-left-side">
                <Modules />
            </div>
            <div className="home-main-content-right-side">
                <Content />
            </div>
        </div>
    );
}
export default Home;