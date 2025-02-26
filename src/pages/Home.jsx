import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
    return ( 
        <div className="container-fluid m-0">
               <Navbar></Navbar>
               <HeroSection/>
        </div>
     );
}
 
export default Home;