import data from "../data/dataOne.json";

const CoursesHover = () => {
  return (
    <div className="flex flex-col items-center h-auto w-52">
      <div className="text-white font-bold font-montserrat">
        {data.map((item, index) => (
          <p
            key={index}
            className="border-b border-gray-400 bg-gradient-to-r from-cyan-500 to-green-400 px-10 flex 
            rounded-b-lg py-2 text-balance"
          >
            {item.courses}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CoursesHover;
