/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";

const GetinTouchCard = ({onClick, thankyou}) => {
  return (
    <div className="max-w-lg flex flex-col gap-6 text-center p-4 shadow shadow-gray-300 bg-stone-300 text-black rounded-md ">
      <div className="r-2 mt-2">
        <button onClick={onClick}>
          <IoClose size={20} />
        </button>
      </div>
      <p className="text-lg">Thank you for getting in touch! </p>
      <p>
        {thankyou}
      </p>
      <p>Have a great day!</p>
    </div>
  );
};

export default GetinTouchCard;
