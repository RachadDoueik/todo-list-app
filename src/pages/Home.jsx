import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
    return ( 
        <div className="container-fluid w-100 m-0 vh-100">
               <HeroSection isVisible={true}/>
        </div>
     );
}
 
export default Home;