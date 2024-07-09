/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";

const GetinTouchCard = ({onClick}) => {
  return (
    <div className="max-w-lg flex flex-col gap-6 text-center p-4 shadow shadow-gray-300 bg-stone-300 text-black rounded-md ">
      <div className="r-2 mt-2">
        <button onClick={onClick}>
          <IoClose size={20} />
        </button>
      </div>
      <p className="text-lg">Thank you for getting in touch! </p>
      <p>
        We appreciate you contacting us. One of our colleagues will get back in
        touch with you soon!
      </p>
      <p>Have a great day!</p>
    </div>
  );
};

export default GetinTouchCard;
