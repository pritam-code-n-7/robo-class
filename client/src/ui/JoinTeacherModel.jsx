/* eslint-disable react/prop-types */
import InputField from "../reusables/InputField";
import Button from "../reusables/Button";
import { IoMdCloseCircleOutline } from "react-icons/io";
import axios from "axios";
import { useState } from "react";
import GetinTouchCard from "./GetinTouchCard";

const JoinTeacherModel = ({ onClick }) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  //cors compatibility
  //axios.defaults.withCredentials = true;

  const handleJoinClassSubmit = (e) => {
    e.preventDefault();
    const name = fullName
      .split(" ")
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
      .join(" ");
    if (fullName !== name) {
      setNameError("name format shouldbe:(e.g. James Bond)");
      return;
    } else {
      setNameError("");
    }
    axios
      .post("http://localhost:3000/join-teacher-team", {
        email,
        fullName,
        phoneNumber,
        message,
      })
      .then((res) => console.log(res))
      .catch((error) => console.error("data creating error", error));

    //reset input fields
    setIsSubmit(true);
    setEmail("");
    setFullName("");
    setPhoneNumber("");
    setMessage("");
  };

  const handleClose = () => {
    setIsSubmit(false);
  };

  return (
    <div className="w-2/3 p-5 text-black bg-white rounded font-montserrat border border-neutral-300 h-auto">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-3xl">Teacher Join</h1>
        </div>
        <button onClick={onClick} className="flex">
          <IoMdCloseCircleOutline size={40} style={{ color: "red" }} />
        </button>
      </div>
      <form
        onSubmit={handleJoinClassSubmit}
        className="p-5 gap-3 flex flex-col items-center"
      >
        <div className="flex flex-col gap-1">
          <InputField
            type="text"
            placeholder="Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="py-3 px-16 rounded-full outline-none ring-1 ring-sky-500 focus:shadow-md focus:shadow-gray-300"
          />
          {nameError && <p className="text-red-500">{nameError}</p>}
        </div>
        <InputField
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-3 px-16 rounded-full outline-none ring-1 ring-sky-500 focus:shadow-md focus:shadow-gray-300"
        />
        <InputField
          type="tel"
          placeholder="Contact Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="py-3 px-16 rounded-full outline-none ring-1 ring-sky-500 focus:shadow-md focus:shadow-gray-300"
        />
        <InputField
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="py-8 px-16 rounded-lg outline-none ring-1 ring-sky-500 focus:shadow-md focus:shadow-gray-300"
        />
        {isSubmit && (
          <div>
            <GetinTouchCard onClick={handleClose} />
          </div>
        )}
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

export default JoinTeacherModel;
