import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      
      <div className="textContainer">
        
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Whether you are buying or renting a home, your success
            hinges upon the expert advice and services provided by your real
            estate agent. We are committed to providing my clients with
            professional services based on my experience, knowledge and skills.
          </p>
          
          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>

        </div>

      </div>
      
      <div className="imgContainer">
        <img src="/bg.png" alt="background" />
      </div>
    </div>
  );
};

export default HomePage;
