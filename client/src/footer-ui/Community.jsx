import InputField from "../reusables/InputField";
import Button from "../reusables/Button";
import { useState } from "react";
import axios from "axios";
import ThankYou from "../ui/ThankYou";

const Community = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState("");

  
  const handleMailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        //"http://localhost:3000/join-community",
       "https://robo-class-api.vercel.app/join-community",
        {
          email,
        }
      );
      console.log(response);
      setEmail("");
      setError("");
      //open custom message upon successfull submission
      setOpen(true);
    } catch (error) {
      console.error("Error creating data", error);
      setError(error.response.data.message);
    }
  };

  //handle close custom message
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-center text-white gap-6 font-montserrat">
      <p className="text-xl font-bold">Join Our Community</p>
      <p>Stay upto date on latest trends</p>
      <form onSubmit={handleMailSubmit} className="flex flex-col items-center">
        <div className="mt-4 flex flex-col items-center">
          <InputField
            type="text"
            placeholder={"Enter Your Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full py-3 px-10 leading-tight 
                outline-none ring-1 ring-sky-500 shadow-md shadow-gray-400 text-black"
          />
          {error && <p className="text-red-500 font-bold">{error}</p>}
        </div>
        {open && <ThankYou onClick={handleClose} />}
        <div className="mt-2">
          <Button
            name="Submit"
            type="submit"
            className="rounded-md py-2 px-4 bg-gray-300 text-sky-500 hover:bg-sky-500 hover:text-white font-semibold 
                transition duration-150 delay-300 ease-in-out font-montserrat"
          />
        </div>
      </form>
    </div>
  );
};

export default Community;
