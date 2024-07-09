import InputField from "../reusables/InputField";
import Button from "../reusables/Button";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex items-center rounded-sm shadow shadow-gray-300 p-4 bg-white">
      <InputField
        type="text"
        placeholder="Search our store"
        className="outline-none py-2 px-4 rounded-sm border border-gray-300 "
      />
      <Button
        name={<IoSearch size={15} />}
        type="button"
        className="bg-sky-500 py-3 px-6 text-white hover:bg-lime-500 transition duration-150 delay-300 ease-in-out"
      />
    </div>
  );
};

export default SearchBar;
