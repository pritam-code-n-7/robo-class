import JoinOurTeacherCard from "../ui/JoinOurTeacherCard";
import Feature from "./Feature";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";

function Body() {
  return (
    <div>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
      </div>
      <div>
        <div className="z-30 absolute flex justify-center left-44 mt-64 pt-48">
          <JoinOurTeacherCard />
        </div>
        <Feature />
        <Footer />
      </div>
    </div>
  );
}

export default Body;
