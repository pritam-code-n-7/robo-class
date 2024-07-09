/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";

const ThankYou = ({onClick}) => {
  return (
    <div className="w-64 flex flex-col gap-2 text-center p-2 shadow shadow-gray-300 bg-stone-300 text-black 
    rounded-md ">
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

export default ThankYou;
