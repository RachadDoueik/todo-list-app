import heroImg from  "../assets/hero-img.jpg";

const HeroSection = ({isVisible}) => {
    return (
          <div className="col-12 d-flex flex-column align-items-center justify-content-center text-center bg-success p-5 vh-100" hidden={!isVisible}>
            <h1 className="fw-bold text-light">Welcome!</h1>
            <p className="text-light">Sign in to start using Rashad's Todo App</p>
            <button className="btn btn-outline-light mt-3">Sign In</button>
          </div>
    );
  }
  export default HeroSection;