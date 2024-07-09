import { BsLinkedin } from "react-icons/bs";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";

const FollowUs = () => {
  return (
    <div className="flex flex-col text-white font-montserrat gap-2">
      <p className="text-xl font-bold">Follow us</p>
      <div className="flex gap-2 items-center">
        <FaSquareFacebook size={30} />
        <FaSquareYoutube size={30} />
        <FaSquareInstagram size={30} />
        <FaSquareXTwitter size={30} />
        <BsLinkedin size={30} />
      </div>
      <div className="flex flex-col mt-4">
        <p>© ISB Edtech FZE - 2024, All</p>
        <p>rights reserved.</p>
      </div>
    </div>
  );
};

export default FollowUs;
