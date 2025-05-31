import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-[80%] md:w-[100%] ">
      <div className=" p-4 flex flex-col items-center justify-start gap-4 md:flex-row md:justify-between ">

        <span className="text-xl flex flex-col gap-2 text-center text-[#889898] md:text-start  ">
          <h1 className="text-4xl font-bold text-center text-white ">
            Jaegar Resto
          </h1>
          <p>Tuesday, 2 Feb 2021</p>
        </span>

        <span className="flex gap-2 items-center justify-center p-4 border-[#393C49] bg-[#393C49] rounded md:w-[40%] lg:w-[30%] xl:w-[20%] ">
          <FontAwesomeIcon icon={faSearch} className="text-white md:text-xl" />
          <input
            type="text"
            placeholder="Search for food, coffee, etc..."
            className="text-[#ABBBC2] placeholder:text-[#ABBBC2] w-[100%] outline-0"
          />
        </span>

      </div>

      <div className="p-4 flex flex-col items-center justify-start gap-4 md:flex-row text-white">
        <span className="flex items-center justify-between  " >
          <a 
          className="text-[#EA7C69] border-b-3 border-b-[#EA7C69] half-border pb-3 "
          href="#">Hot Dishes</a>
          <FontAwesomeIcon icon={faBars} className="text-xl  " />
          <span className="hidden  ">
          <a href="#">Cold Dishes</a>
          <a href="#">Soup</a>
          <a href="#">Grill</a>
          <a href="#">Appetizer</a>
          <a href="#">Hot Dishes</a>
          </span>
        </span>
      </div>

    </div>
  );
};

export default HeroSection;
