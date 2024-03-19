import Blog from "./pages/Blog";
import Destination from "./pages/Destination";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Location from "./pages/Location";
import Testimonial from "./pages/Testimonial";

const App = () => {
  return (
    <main className="font-['Gilroy-Medium']">
      <Home />
      <Location />
      <HowItWorks />
      <Destination />
      <Testimonial />
      <Blog />
      <Footer />
    </main>
  );
};

export default App;
