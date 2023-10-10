import Header from "./components/header/Header";
import Dream from "./components/dream/Dream";
import Reason from "./components/reason/Reason";
import AboutMe from "./components/aboutMe/AboutMe";
import GreySection from "./components/greySection/GreySection";
import Footer from "./components/footer/Footer";
import FormFooter from "./components/formFooter/FormFooter";

function App() {
  return (
    <div className="App">
      <Header />
      <Dream />
      <Reason />
      <AboutMe />
      <GreySection />
      <Footer />
      <FormFooter />
    </div>
  );
}

export default App;
