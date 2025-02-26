import heroImg from  "../assets/hero-img.jpg";

const HeroSection = () => {
    return (
      <div className="container-fluid h-50 animate-on-load m-0">
        <div className="row h-100">
          {/* Left Section - Image */}
          <div className="col-lg-6 d-none d-lg-block p-0">
            <img
              src={heroImg}
              alt="Welcome"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
  
          {/* Right Section - Welcome & Sign In */}
          <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center text-center bg-success p-4">
            <h1 className="fw-bold text-light">Welcome!</h1>
            <p className="text-light">Sign in to start using Rashad's Todo App</p>
            <button className="btn btn-outline-light mt-3">Sign In</button>
          </div>
        </div>
      </div>
    );
  }
  export default HeroSection;