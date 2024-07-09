import Button from "../reusables/Button";
import { SlCalender } from "react-icons/sl";
import JoinTeacherModel from "./JoinTeacherModel";
import { useState } from "react";

const JoinOurTeacherCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCardOpen=()=>{
    setIsOpen(true)
  }
  const handleCardClose=()=>{
    setIsOpen(false)
  }
  return (
    <div
      className="p-14 px-20 font-montserrat shadow-lg shadow-gray-500 border border-neutral-300 rounded-lg h-auto w-full bg-white text-black
    flex gap-20"
    >
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-bold text-3xl">Teachers join our team.</p>
        </div>
        <div className="font-semibold text-sm text-neutral-700">
          <p>
            We are always looking for good teachers. Send us your details along
            with you CV
          </p>
          <p>and we will get in touch with you.</p>
        </div>
        <div>
          <Button
            name={
              <div className="flex gap-1 items-center">
                <SlCalender size={15} />
                <p>Join Us</p>
              </div>
            }
            type={"button"}
            onClick={handleCardOpen}
            className="py-4 px-6 rounded-full bg-sky-500 text-white font-medium hover:bg-white hover:text-sky-500
            shadow-md shadow-gray-300 transition duration-200 delay-300 ease-in-out hover:ring-1 hover:ring-sky-500"
          />
        </div>
      </div>
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0627/5982/9642/files/join_team.png?v=1700545899"
          alt="teacher-image"
          loading="zazy"
        />
      </div>
      {isOpen && <div className="z-40 inset-0 flex items-center justify-center fixed ">
      <JoinTeacherModel onClick={handleCardClose}/>
      </div>}
    </div>
  );
};

export default JoinOurTeacherCard;
