import Footer from "components/Footer";
import Login from "components/Login";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <header className="App-header">
            <Login></Login>
        </header>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
