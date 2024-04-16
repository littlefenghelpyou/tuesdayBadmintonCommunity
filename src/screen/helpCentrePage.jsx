import TBCLogo from "../img/TBC_logo.png";
import { useNavigate } from "react-router-dom";

const HelpCentrePage = () => {
  const navigate = useNavigate();

  return (
    <div className="header-bg w-full">
      {/* NavBar */}
      <div className="py-[1rem] px-[8.33%] flex justify-between items-center text-white">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center text-left">
          <img src={TBCLogo} className="h-10 w-12" />
          <div className="ml-2">
            <h3 className="mt-1">Tuesday Badminton</h3>
            <h3 className="leading-3">Community</h3>
          </div>
        </button>
      </div>

      <div className="px-[8.33%] pt-[8rem] pb-[3.75rem] flex flex-col justify-center items-center">
        <h2 className="text-white text-center">HI, HOW CAN WE HELP?</h2>
        <div className="w-1/2 bg-white px-[1rem] py-[0.5rem] mt-8 rounded-md flex items-center">
          <input className="outline-none w-5/6" placeholder="Search ..." />
          <button className="bg-[#0B274D] w-1/6 px-[0.75rem] py-[0.5rem] rounded-md text-white hover:scale-110">
            <p>Click</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpCentrePage;
