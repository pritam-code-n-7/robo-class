import { useState } from "react";
import FreeclassCard from "../ui/FreeclassCard";
import JoinFreeClassModel from "../ui/JoinFreeClassModel";

const HeroSection = () => {
  const [modelOpen, setModelOpen] = useState(false);
  //for Model open
  const handleModelOpen = () => {
    setModelOpen(true);
  };
  //for Model close
  const handleModelClose = () => {
    setModelOpen(false);
  };

  return (
    <div className="bg-cover bg-center h-[500px]  bg-[url('/assets/baby.webp')] ">
      <div className="pt-10 p-20">
        <FreeclassCard onClick={handleModelOpen} />
      </div>
      {modelOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <JoinFreeClassModel onClick={handleModelClose} />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
