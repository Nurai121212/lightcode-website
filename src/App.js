import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mentors from "./components/Mentors";
import Prices from "./components/Prices";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <div className="app-container">
        <About/>
        <Prices/>
        <Mentors/>
        <Contacts/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
