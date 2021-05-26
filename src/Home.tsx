import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "components/Footer";
import InfoBusiness from "components/InfoBusiness";
import NavBar from "components/NavBar";
import Caroussel from "components/Carousel";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <header className="Home-header">
        </header>
        <Caroussel />
        <InfoBusiness />
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
