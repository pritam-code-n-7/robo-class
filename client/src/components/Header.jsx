import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../reusables/Button";
import { useState } from "react";
import SearchBar from "../ui/SearchBar";
import CoursesHover from "../header-ui/CoursesHover";
import AboutUsHover from "../header-ui/AboutUsHover";
import ExsistingHover from "../header-ui/ExsistingHover";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isCoursesHovered, setIsCoursesHovered] = useState(false);
  const [isBorderHovered, setIsBorderHovered] = useState(false);
  const [isAboutUsHovered, setIsAboutUsHovered] = useState(false);
  const [isSchoolHovered, setIsSchoolHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isExistingHovered, setIsExsistingHovered] = useState(false);

  //handle search bar open
  const handleSearchOpen = () => {
    if (!searchOpen) {
      setSearchOpen(true);
    } else {
      setSearchOpen(false);
    }
  };
  //render component on courses hover

  return (
    <div className="flex gap-20 p-5 items-center justify-center">
      <div className="flex gap-4 items-center">
        <div role="button" tabIndex={0}>
          <img src="/assets/image.png" alt="logo-image" loading="lazy" />
        </div>
        <div className="text-blue-400 font-semibold flex gap-3 font-montserrat">
          <button
            onMouseEnter={() => setIsCoursesHovered(true)}
            className="flex items-center "
          >
            <p>Courses</p>
            <IoIosArrowDown />
            {isCoursesHovered && (
              <div
                onMouseEnter={() => setIsCoursesHovered(true)}
                onMouseLeave={() => setIsCoursesHovered(false)}
               className="z-20 absolute mt-56">
                <CoursesHover />
              </div>
            )}
          </button>
          <button
            onMouseEnter={() => setIsBorderHovered(true)}
            onMouseLeave={() => setIsBorderHovered(false)}
          >
            <p className="tracking-wide">Homeschooling</p>
            {isBorderHovered && <hr className="border border-green-500 " />}
          </button>
          <button
            onMouseEnter={() => setIsSchoolHovered(true)}
            onMouseLeave={() => setIsSchoolHovered(false)}
          >
            <p>School/College enquiry</p>
            {isSchoolHovered && <hr className="border border-green-500 " />}
          </button>
          <button
            onMouseEnter={() => setIsAboutUsHovered(true)}
            onMouseLeave={() => setIsAboutUsHovered(false)}
            className="flex items-center"
          >
            <p>About us</p>
            <IoIosArrowDown />
            {isAboutUsHovered && (
              <div className="z-20 absolute mt-56">
                <AboutUsHover />
              </div>
            )}
          </button>
          <button
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
          >
            <p>Contact us</p>
            {isContactHovered && <hr className="border border-green-500 " />}
          </button>
          <button
            onMouseEnter={() => setIsExsistingHovered(true)}
            onMouseLeave={() => setIsExsistingHovered(false)}
            className="flex items-center"
          >
            <p>Existing student</p>
            <IoIosArrowDown />
            {isExistingHovered && (
              <div className="z-20 absolute mt-20">
                <ExsistingHover />
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <button onClick={handleSearchOpen}>
            <IoSearch size="25px" style={{ color: "skyblue" }} />
          </button>
          {searchOpen && (
            <div className="absolute z-50 right-10 mt-10  ">
              <SearchBar />
            </div>
          )}
        </div>
        <Button
          name="Free Class"
          type="button"
          className="rounded-full py-2 px-6 bg-gradient-to-r from-cyan-500 to-green-400 text-white text-xs font-montserrat font-semibold shadow-md shadow-gray-300"
        />
      </div>
    </div>
  );
};

export default Header;
