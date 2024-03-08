import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HeroSection /> */}
      <TeamSection/>
      <Footer />
    </div>
  );
}

export default App;
