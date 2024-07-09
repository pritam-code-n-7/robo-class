/* eslint-disable react/prop-types */
import Button from "../reusables/Button";

const FreeclassCard = ({onClick}) => {
  return (
    <div className="w-96 h-auto">
      <div className="flex flex-col p-10 gap-2 text-balance bg-gradient-to-r from-cyan-500 to-green-400/25 text-white   rounded-xl ">
        <div className="font-bold text-3xl font-montserrat">
          <p>Our story and our</p>
          <p>origin</p>
        </div>
        <div className="text-lg font-montserrat">
          <p>Our mission is to prepare kids for </p>
          <p>tomorrow</p>
        </div>
        <div className="flex gap-2 mt-2">
          <Button
            name="Enroll Now"
            type="button"
            className="py-2 px-6 font-semibold bg-sky-500 rounded-full shadow-md shadow-gray-500 "
          />
          <Button
            name="Free Class"
            type="button"
            className="py-2 px-6 font-semibold bg-white text-sky-500 ring-1 ring-sky-500 hover:bg-sky-500 hover:text-white rounded-full transition duration-300 delay-300 ease-in-out shadow-md shadow-gray-500"
            onClick={onClick}
          />
        </div>
        
      </div>
    </div>
  );
};

export default FreeclassCard;
