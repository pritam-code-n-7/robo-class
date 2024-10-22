/* eslint-disable react/prop-types */
import InputField from "../reusables/InputField";
import Button from "../reusables/Button";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import GetinTouchCard from "./GetinTouchCard";

const JoinFreeClassModel = ({ onClick }) => {
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhoneNumber, setParentPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [submitResponse, setSubmitResponse] = useState("");
  const [isSubmitResponse, setIsSubmitResponse] = useState(false);

  const handleJoinClassSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        //"http://localhost:3000/join-free-class",
        "https://robo-class-api.vercel.app/join-free-class",
        {
          parentEmail,
          childName,
          childAge,
          parentPhoneNumber,
        }
      );
      console.log(response);
      setChildName("");
      setChildAge("");
      setParentEmail("");
      setParentPhoneNumber("");
      setError("");
      if (response.data.success) {
        setSubmitResponse(response.data.message);
      }

      setIsSubmitResponse(true);
    } catch (error) {
      console.error("Error creating data", error);
      setError(error.response.data.message);
      setSubmitResponse("");
    }
  };

  //custom message close
  const handleClose = () => {
    setIsSubmitResponse(false);
  };

  return (
    <div className="w-2/3 p-5 text-black bg-white rounded font-montserrat border border-neutral-300 h-auto">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-3xl">Free Class</h1>
        </div>
        <button onClick={onClick} className="flex">
          <IoMdCloseCircleOutline size={40} style={{ color: "red" }} />
        </button>
      </div>

      <form
        onSubmit={handleJoinClassSubmit}
        className="p-5 gap-2 flex flex-col items-center"
      >
        <div className="flex gap-2">
          <InputField
            type="text"
            placeholder="Child Name"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            className="py-3 px-16 rounded-full outline-none ring-1 ring-sky-500 focus:shadow-md focus:shadow-gray-300"
          />
          <div className="flex flex-col gap-1">
            <InputField
              type="number"
              placeholder="Child's Age"
              value={childAge}
              min={3}
              onChange={(e) => setChildAge(e.target.value)}
              className="py-3 px-16 rounded-full outline-none ring-1 ring-sky-500 focus:shadow-md focus:shadow-gray-300"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <InputField
            type="text"
            placeholder="Parent Email Id"
            value={parentEmail}
            onChange={(e) => setParentEmail(e.target.value)}
            className="py-3 px-16 rounded-full outline-none ring-1 ring-sky-500 focus:shadow-md focus:shadow-gray-300"
          />
          <InputField
            type="text"
            placeholder="Parent Contact Number"
            value={parentPhoneNumber}
            onChange={(e) => setParentPhoneNumber(e.target.value)}
            maxLength={10}
            className="py-3 px-16 rounded-full outline-none ring-1 ring-sky-500 focus:shadow-md focus:shadow-gray-300"
          />
        </div>
        <div className="flex justify-center">
          {error && <p className="text-red-500 font-bold">{error}</p>}
        </div>
        <div>
          {isSubmitResponse && (
            <GetinTouchCard onClick={handleClose} thankyou={submitResponse} />
          )}
        </div>
        <div>
          <Button
            name="Submit"
            type={"submit"}
            className="py-3 px-8 rounded-full shadow bg-sky-500 text-white shadow-gray-300 hover:bg-white 
        hover:text-sky-500 font-bold mt-2 "
          />
        </div>
      </form>
    </div>
  );
};

export default JoinFreeClassModel;
