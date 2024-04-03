import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import SecondaryNavbar from "./components/SecondaryNavbar/SecondaryNavbar";
import Landing from "./pages/Landing/Index";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SecondaryNavbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
