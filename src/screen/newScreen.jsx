import React from "react";
import {
  Button,
  Carousel,
  IconButton,
  Textarea,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useInView } from "react-intersection-observer";
import templateShirt from "../img/templateShirt.png";
import banner from "../img/tbcbanner.jpeg";
import TBCLogo from "../img/TBC_logo.png";
import TBCLogoBlack from "../img/TBC_logo_black.png";
import catLook from "../img/cat_look.jpeg";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
  });

  const navigate = useNavigate();

  const [showImage, setShowImage] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  // Update showImage when inView changes
  React.useEffect(() => {
    if (inView) {
      setShowImage(true);
    }
  }, [inView]);

  const [events, setEvents] = React.useState([]);
  // const [specUsers, setSpecUsers] = useState([]);
  const usersCollectionRef = collection(db, "events");

  React.useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(usersCollectionRef);
      const sortedEvents = data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => a.seq - b.seq);
      setEvents(groupArray(sortedEvents, 3));
    };

    getEvents();
  }, []);

  React.useEffect(() => {
    const data = window.localStorage.getItem("userDetail");
    if (data !== null) setUserDetails(JSON.parse(data));
  }, []);

  const groupArray = (arr, size) => {
    const groupedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      groupedArray.push(arr.slice(i, i + size));
    }
    return groupedArray;
  };

  const logout = () => {
    window.localStorage.setItem("userDetail", null);
    setUserDetails(null);
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {userDetails && (
        <Dialog open={open} handler={() => setOpen(false)}>
          <DialogHeader>Logout</DialogHeader>
          <DialogBody>
            Hi {userDetails.name}, are you sure want to logout? No Worries, This
            just simple logout. You can login again in anytime.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setOpen(false)}
              className="mr-1">
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="blue" onClick={() => logout()}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      )}
      <div className="flex justify-between items-center h-[64px] w-screen bg-white px-[156px] shadow-lg sticky top-0 left-0 z-[999]">
        <div className="flex justify-center items-center text-lg gap-x-[32px]">
          <button type="button" onClick={() => navigate("/")}>
            {/* <div className="text-3xl text-blue-500 font-mono">TBC</div> */}
            <img src={TBCLogoBlack} className="h-[54px] w-[80px]" />
          </button>
          <button
            type="button"
            onClick={() => navigate("/aboutUs")}
            className="hover:text-blue-500">
            <div>About</div>
          </button>
          <button type="/" className="hover:text-blue-500 text-gray-500/50">
            <div>Help Centre</div>
          </button>
          <button type="/" className="hover:text-blue-500 text-gray-500/50">
            <div>Collaborate</div>
          </button>
        </div>
        <div className="flex justify-center items-center">
          {userDetails ? (
            <>
              <div className="text-lg">Welcome back, {userDetails.name}</div>
              <Button
                color="black"
                className="ml-3"
                onClick={() => setOpen(true)}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="white" onClick={() => navigate("login")}>
                login
              </Button>
              <Button color="blue" className="ml-2" disabled>
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="w-sreen h-[calc(100%-64px)]">
        <div className="w-full h-full bg-[#0B274D] flex items-center justify-center">
          <div className="w-4/5">
            <div className="flex items-center">
              <img src={TBCLogo} className="h-[8.62rem] w-[10rem]" />
              <div
                className="text-white text-[5rem] pl-[3.125rem] pt-[0.625rem]"
                style={{ fontFamily: "Anton" }}>
                TUESDAY BADMINTON COMMUNITY
              </div>
            </div>
            <div
              className="text-[#F9CA55] text-[5rem] py-[2.5rem] leading-none"
              style={{ fontFamily: "Montserrat" }}>
              WHERE OUR BOND EXTENDS BEYOND THE COURTS
            </div>
            <button
              type="button"
              className="bg-[#62C7CC] text-black rounded-full px-6 py-2 text-[1.5rem]"
              style={{ fontFamily: "Open Sans" }}>
              JOIN OUR SESSION
            </button>
          </div>
        </div>
        <div className="w-full h-full bg-[#F9CA55] flex items-center">
          <div className="w-1/3 h-full flex items-center justify-center">
            <div className="p-28">
              <div className="text-[4.125rem]" style={{ fontFamily: "Anton" }}>
                About TBC
              </div>
              <div
                className="text-[1.5rem] leading-tight"
                style={{ fontFamily: "Open Sans" }}>
                Welcome to Tuesday Badminton Community (TBC), where passion
                meets the shuttlecock on the courts of camaraderie. Established
                with the vision of fostering a community that celebrates the joy
                of the game, TBC is more than just a gathering of players - it's
                a family united by a shared love for the sport
              </div>
            </div>
          </div>
          <img src={banner} className="bg-gray-500 w-2/3 h-full object-cover" />
        </div>
        <div className="w-full h-full bg-[#62C7CC] flex justify-center items-center">
          <div className="text-center">
            <div className="text-[4.125rem]" style={{ fontFamily: "Anton" }}>
              TBC Servives
            </div>
            <div className="flex items-start justify-around px-[6.25rem] pt-[5rem]">
              <div className="w-1/6 flex justify-start flex-col items-center">
                <div className="w-[9.75rem] h-[9.75rem] bg-white rounded-full"></div>
                <div
                  className="pt-4 text-[1.5rem]"
                  style={{ fontFamily: "Montserrat" }}>
                  Grip Change
                </div>
                <div style={{ fontFamily: "Open Sans" }}>
                  Enhance your game with our badminton grip Services - Purchase
                  new grips and have them replaced for an optimal playing
                  experience
                </div>
              </div>
              <div className="w-1/6 flex justify-start flex-col items-center">
                <div className="w-[9.75rem] h-[9.75rem] bg-white rounded-full"></div>
                <div
                  className="pt-4 text-[1.5rem]"
                  style={{ fontFamily: "Montserrat" }}>
                  RSL Shuttlecock
                </div>
                <div style={{ fontFamily: "Open Sans" }}>
                  Get the best deals on RSL Classic or RSL G2 - Your go-to
                  source for unbeatable prices compared to other retailers!
                </div>
              </div>
              <div className="w-1/6 flex justify-start flex-col items-center">
                <div className="w-[9.75rem] h-[9.75rem] bg-white rounded-full"></div>
                <div
                  className="pt-4 text-[1.5rem]"
                  style={{ fontFamily: "Montserrat" }}>
                  TBC shirt
                </div>
                <div style={{ fontFamily: "Open Sans" }}>
                  Elevate your Tuesday Badminton Community spirit - Purchase a
                  TBC shirt with customizable names for a personalized touch
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#0B274D] flex justify-center items-center">
          <div className="text-center">
            <div
              className="text-[4.125rem] text-white"
              style={{ fontFamily: "Anton" }}>
              MEET OUR COMMITEE
            </div>
            <div className="flex items-start px-24 pt-12 text-white">
              <div className="flex flex-col items-center">
                <div className="w-[9.75rem] h-[9.75rem] bg-white rounded-full"></div>
                <div
                  className="pt-5 text-[1.75rem]"
                  style={{ fontFamily: "Montserrat" }}>
                  Valerie Yeoh
                </div>
                <div className="px-8" style={{ fontFamily: "Open Sans" }}>
                  As the leader of our dynamic badminton community, Ispearhead
                  court bookings, manage payments, procure quality shuttlecocks,
                  and organize TBC session and enjoyable experience for all
                  members.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[9.75rem] h-[9.75rem] bg-white rounded-full"></div>
                <div
                  className="pt-5 text-[1.75rem]"
                  style={{ fontFamily: "Montserrat" }}>
                  Jonda Kristy
                </div>
                <div className="px-8" style={{ fontFamily: "Open Sans" }}>
                  As the Treasurer of our vibrant badminton community, I
                  diligently handle the financial aspect, collecting payments,
                  and ensuring accurate transactions, guaranteeing smooth and
                  transparent financial operations for all members.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[9.75rem] h-[9.75rem] bg-white rounded-full"></div>
                <div
                  className="pt-5 text-[1.75rem]"
                  style={{ fontFamily: "Montserrat" }}>
                  Loh Pishon
                </div>
                <div className="px-8" style={{ fontFamily: "Open Sans" }}>
                  As the dedicated Inventory Manager, my role involves
                  maintaining a seamless badminton experience by refilling
                  shuttles on court, meticulosly vetting shuttle conditions, and
                  coordinating bulk orders to keep our games flying smoothly.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[9.75rem] h-[9.75rem] bg-white rounded-full"></div>
                <div
                  className="pt-5 text-[1.75rem]"
                  style={{ fontFamily: "Montserrat" }}>
                  Lee Han Jiang
                </div>
                <div className="px-8" style={{ fontFamily: "Open Sans" }}>
                  As the Miscellaneous Support for our thriving badminton
                  community, I wear many hats - I'm here to lend a helping hand
                  wherever needed, ensuring the smooth functioning and enjoyment
                  of our collective badminton experience.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[9.75rem] h-[9.75rem] bg-white rounded-full"></div>
                <div
                  className="pt-5 text-[1.75rem]"
                  style={{ fontFamily: "Montserrat" }}>
                  Andrew Ding
                </div>
                <div className="px-8" style={{ fontFamily: "Open Sans" }}>
                  As the IT Support for our expansive badminton community, I
                  drive the development of a user-friendly website, ensuring
                  seamless logins for all members. Additionally, I help monitor
                  the backend, tackling IT-related challenges to enhance our
                  digital experience.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#F9CA55] flex justify-center items-center">
          <div className="w-1/3 flex justify-center items-center">
            <div className="w-[9.75rem] h-[9.75rem] bg-white rounded-full"></div>
          </div>
          <div className="w-2/3 pl-12 pr-32">
            <div
              className="text-[2.25rem] leading-[2.81rem] "
              style={{ fontFamily: "Montserrat" }}>
              Here at TBC, we embrace and support individuals from all walks of
              life. If you have a business entity and are interested in
              collaboration, we welcome you to reach out to us. Let's explore
              opportunities to grow together and enhance the experiences within
              our vibrant community.
            </div>
            <button
              type="button"
              className="bg-[#0B274D] rounded-full px-8 py-4 text-white text-[1.5rem] mt-5"
              style={{ fontFamily: "Montserrat" }}>
              LET'S TALK MORE
            </button>
          </div>
        </div>
        <div className="w-full h-full bg-[#62C7CC] flex justify-center items-center">
          <div className="w-1/3 h-full bg-gray-500 flex justify-center items-center ">
            <div className="text-white">PHOTO</div>
          </div>
          <div className="w-2/3">
            <div
              className="text-[4.125rem] text-white text-center"
              style={{ fontFamily: "Anton" }}>
              TBC SESSION INFO
            </div>
            <div className="flex justify-center items-start pt-10">
              <div className="flex flex-col items-center w-1/2">
                <div className="w-[16rem] h-[16rem] bg-white rounded-full"></div>
                <div
                  className="pt-5 text-[1.75rem] w-2/3 text-center"
                  style={{ fontFamily: "Montserrat" }}>
                  FORUM OPTIMUM USJ COURT CENTRE
                </div>
                <div
                  className="w-2/3 text-center"
                  style={{ fontFamily: "Open Sans" }}>
                  Lot 791, Persiaran Subang Indah, Taman Perindustrian Subang,
                  47610 Subang Jaya
                </div>
              </div>
              <div className="flex flex-col items-center w-1/2">
                <div className="w-[16rem] h-[16rem] bg-white rounded-full"></div>
                <div
                  className="pt-5 text-[1.75rem] w-2/3 text-center"
                  style={{ fontFamily: "Montserrat" }}>
                  EVERY TUESDAY 8-10PM
                </div>
                <div
                  className="w-2/3 text-center"
                  style={{ fontFamily: "Open Sans" }}>
                  Court B05-B15
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto bg-blue-200">
          <div className="pt-5 mx-[14rem] min-h-[22.5rem] border-b border-gray-300">
            <div className="flex text-sm text-blue-900">
              <div className="w-1/4 px-5">
                <div className="text-base mb-2">Home</div>
                <div>Dashboard</div>
              </div>
              <div className="w-1/4 px-5">
                <div className="text-base  mb-2">About Us</div>
                <div className="mb-[0.125rem]">About Us</div>
                <div>Our Blogs</div>
              </div>
              <div className="w-1/4 px-5">
                <div className="text-base  mb-2">Help Centre</div>
                <div className="mb-[0.125rem]">
                  Frequently Asked Questions (FAQs)
                </div>
                <div className="mb-[0.125rem]">Terms of Use</div>
                <div className="mb-[0.125rem]">Privacy Policy</div>
                <div>Contact Us</div>
              </div>
              <div className="w-1/4 px-5">
                <div className="text-base  mb-2">Our Partner</div>
                <div className="mb-[0.125rem]">Kingdom City Kuala Lumpur</div>
                <div className="mb-[0.125rem]">Tuina Massage</div>
                <div>Printing Store</div>
              </div>
            </div>
          </div>
          <div className="py-5 px-[14rems] text-sm text-blue-900">
            <div>© 2023 | Tuesday Badminton Court Sdn Bhd (1246872-K)</div>
            <div>{/* <i class="fa-brands fa-facebook"></i> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
