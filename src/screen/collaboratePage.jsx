import TBCLogoBlack from "../img/TBC_logo_black.png";
import { useNavigate } from "react-router-dom";
import collaborate from "../img/collaborate.png";
import dmcLogo from "../img/DMCLOGO.png";
import dmcBg1 from "../img/dmcBg1.png";
import dmcBg2 from "../img/dmcBg2.png";
import hotbirdLogo from "../img/hotbirdLogo.png";
import hotbirdBg1 from "../img/hotbirdBg1.png";
import hotbirdBg2 from "../img/hotbirdBg2.png";
import hodLogo from "../img/hodLogo.png";
import hodsupplyBg1 from "../img/hodsupplyBg1.png";
import hodsupplyBg2 from "../img/hodsupplyBg2.png";
import TBCLogo from "../img/TBC_logo.png";

const CollaboratePage = () => {
  const navigate = useNavigate();

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-fithteen");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-top");
      }
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-sixteen");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-top");
      }
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-seventeen");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-top");
      }
    }
  });

  return (
    <div>
      <div className="py-[1rem] px-[8.33%] flex justify-between items-center text-black shadow shadow-black/50">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center text-left">
          <img src={TBCLogoBlack} className="h-10 w-12" />
          <div className="ml-2">
            <h3 className="mt-1">Tuesday Badminton</h3>
            <h3 className="leading-3">Community</h3>
          </div>
        </button>
      </div>

      <div className="h-screen mb-[-100px]">
        <div className="w-full bg-[#F9CA55] h-[15rem] flex justify-between items-center">
          <div className="px-[12.33%] w-1/2">
            <div className="relative flow-from-bottom delay-1s flex items-center">
              <img src={TBCLogo} className="h-20 w-22 mb-5" />
              <h1 className="!text-[2.5rem] text-white ml-4">COLLABORATE</h1>
            </div>
          </div>
          <img
            src={collaborate}
            className="w-1/2 h-full object-cover trapezoid"
          />
        </div>

        <div className="text-center px-[10.33%] pt-[10%] h-full">
          <div className="relative h-[2.15rem] flex justify-center">
            <h1 className="flow-from-bottom delay-500 text-center">
              COLLABORATE WITH US
            </h1>
          </div>

          <div className="relative h-[5rem] flex flex-col justify-center flow-from-bottom">
            <p className="mt-4">
              At Tuesday Badminton Community (TBC), we understand the power of
              collaboration and the impact it can have on both business and
              communities.
            </p>
            <p className="mt-2">
              We invite forward-thinking business owners from any industry to
              explore exciting partnership opportunities with us, tapping into
              the vibrant and divevrse TBC community. Join us in creating a
              network of discounts that benefit our vibrant community!
            </p>
          </div>
        </div>
      </div>

      <div className="text-center px-[10.33%]" id="animated-text-fithteen">
        <div className="w-full px-[8.33%] mt-8">
          <div className="flex shadow shadow-black/25">
            <div className="trapezoid-two w-1/2">
              <img src={dmcBg1} className="" />
              <img src={dmcBg2} className="" />
            </div>
            <div className="w-full px-8 py-8 h-auto">
              <div className="text-left flex flex-col justify-center h-full">
                <img
                  src={dmcLogo}
                  className="w-[24rem] ml-[-1rem] object-cover"
                />
                <h1 className="mt-4 !text-base">
                  PRIORITIZE YOUR WELLNESS WITH DMC WELLNESS CENTRE
                </h1>
                <p className="mt-4">TBC members are entitled to:</p>
                <p className="mt-2 !text-sm">
                  Complimentary chiropractic consultation and assessment on your
                  first visit, helping you stay in top form both on and off the
                  badminton court.
                </p>
                <p className="mt-2 !text-sm">
                  Enjoy an exclusive 15% discount off the overall cost of
                  treatment and recovery plans at DMC Wellness Centre. The
                  discount is designed to support your journey towards optimal
                  health and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-[8.33%] mt-8" id="animated-text-sixteen">
          <div className="flex shadow shadow-black/25">
            <div className="w-full px-8 py-8 h-auto">
              <div className="text-left flex flex-col justify-center h-full">
                <img
                  src={hotbirdLogo}
                  className="w-[24rem] ml-[-0.5rem] object-cover"
                />
                <h1 className="mt-4 !text-base">
                  INDULGE YOUR TASTE BUDS AT HOTBIRD SS15 OUTLET, SUBANG JAYA
                </h1>
                <p className="mt-2 !text-sm">
                  TBC members receive an exclusive 10% duscount off on all
                  orders, with NO MINIMUM SPEND! It's time to savor delicious
                  meals while enjoying a well-deserved break.
                </p>
              </div>
            </div>
            <div className="trapezoid w-1/2">
              <img src={hotbirdBg1} className="" />
              <img src={hotbirdBg2} className="" />
            </div>
          </div>
        </div>

        <div className="w-full px-[8.33%] mt-8" id="animated-text-seventeen">
          <div className="flex shadow shadow-black/25">
            <div className="trapezoid-two w-1/2">
              <img src={hodsupplyBg1} className="" />
              <img src={hodsupplyBg2} className="" />
            </div>
            <div className="w-full px-8 py-8 h-auto">
              <div className="text-left flex flex-col justify-center h-full">
                <img
                  src={hodLogo}
                  className="w-[16rem] ml-[-0.5rem] object-cover"
                />
                <h1 className="mt-4 !text-base">
                  NEED PRINTING SERVICES? HOD PRINTING HAS YOU COVERED!
                </h1>
                <p className="mt-2 !text-sm">
                  TBC members beniefit from a price match for corporate
                  discounts, ensuring the best rates. Plus, enjoy cashback perks
                  with every transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="w-full h-auto bg-[#0B274D] py-2 px-[8.33%] text-white mt-[5rem]">
        <p className="text-xs">
          © 2024 Tuesday Badminton Community Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default CollaboratePage;
