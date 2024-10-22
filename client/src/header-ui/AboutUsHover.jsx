import data from "../data/dataTwo.json";

const AboutUsHover = () => {
  return (
    <div className="flex flex-col items-center h-auto w-52">
      <div className="text-white font-bold font-montserrat">
        {data.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-400 bg-gradient-to-r from-cyan-500 to-green-400 px-10 flex py-2 
            rounded-b-lg text-balance"
          >
          <button className="hover:text-green-300 focus:text-green-300 transition duration-75 delay-200 ease-in-out">
            {item.aboutus}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsHover;
