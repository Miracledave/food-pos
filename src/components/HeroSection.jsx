import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

const HeroSection = () => {

  return (
    <div className="flex flex-col w-[80%] md:w-[100%] justify-start p-4 text-white">
      <div className="container mx-auto m-4 flex flex-col items-center justify-start gap-4 md:flex-row md:justify-between ">

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

      <div className="container mx-auto flex flex-col items-center justify-start gap-4 md:flex-row text-white border-b border-[#393C49] m-4 ">
        <span className="flex justify-between gap-16 font-semibold w-[100%] md:w-[90%] md:gap-0 " >
          <a 
          className="text-[#EA7C69] border-b-3 border-b-[#EA7C69] half-border pb-3 "
          href="#">Hot Dishes</a>
          <span className="text-xl md:hidden  ">
          <FontAwesomeIcon icon={faBars}  />
          </span>
          
          <a className="hidden border-b-[#EA7C69] pb-3 md:block "
           href="#">Cold Dishes</a>
          <a className="hidden border-b-[#EA7C69] pb-3 md:block "
           href="#">Soup</a>
          <a className="hidden border-b-[#EA7C69] pb-3 md:block "
           href="#">Grill</a>
          <a className="hidden border-b-[#EA7C69] pb-3 md:block "
           href="#">Appetizer</a>
          <a className="hidden border-b-[#EA7C69] pb-3 md:block "
           href="#">Hot Dishes</a>
        </span>
      </div>

      <div>

        <div className=" container mx-auto flex justify-between items-center m-4">
          <h2 className="text-xl md:text-3xl lg:text-4xl "
          >Choose Dishes</h2>
          <div className="p-2 flex items-center border-[#393C49] bg-[#1F1D2B] xl:text-xl ">
          <FontAwesomeIcon icon={faArrowDown} />
          <select name="Dine in" className="appearance-none text-end ">
            <option >Dine in</option>
            <option >Take away</option>
          </select>
          </div>
        </div>

        <Menu />

      </div>
      

    </div>
  );
};

export default HeroSection;
