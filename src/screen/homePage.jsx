import React, { useState } from "react";
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
import racket from "../img/racket.png";
import shuttle from "../img/shuttle.png";
import shirt from "../img/shirt.png";
import Val from "../img/val.png";
import Pi from "../img/pi.png";
import An from "../img/an.png";
import Jo from "../img/jo.png";
import Han from "../img/han.png";
import hand from "../img/hand.png";
import TBCService from "../img/TBC.png";
import googlemap from "../img/googlemap.png";

const Homepage = () => {
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

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-top");
      }
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-two");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-top");
      }
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-three");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-top");
      }
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-four-1");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-show");
      }
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-four");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-show");
      }
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-five");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-show");
      }
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-six");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-show");
      }
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-seven");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-top");
      }
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-twelve");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-top");
      }
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-thirdteen");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-top");
      }
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-fourteen");
    if (element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("animate-to-top");
      }
    }
  });

  const [card, setCard] = useState(3);

  return (
    <div className="w-full h-auto">
      {userDetails && (
        <Dialog open={open} handler={() => setOpen(false)}>
          <DialogHeader>Logout</DialogHeader>
          <DialogBody>
            Hi {userDetails.name}, are you sure want to logout?
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setOpen(false)}
              className="mr-1">
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="#0B274D" onClick={() => logout()}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      )}
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
          <div className="flex gap-6 items-center">
            {/* <button
              type="button"
              onClick={() => navigate("aboutUs")}
              className="hover:text-[#0B274D]">
              <p>About Us</p>
            </button> */}
            <button
              type="button"
              onClick={() => navigate("help")}
              className="hover:text-[#0B274D]">
              <p>Help Centre</p>
            </button>
            <button
              type="button"
              onClick={() => navigate("collaborate")}
              className="hover:text-[#0B274D]">
              <p>Collaborate</p>
            </button>

            {userDetails ? (
              <>
                <p className="">Welcome back, {userDetails.name}</p>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="bg-white px-4 py-1 rounded-full text-[#62C7CC] hover:text-white hover:bg-transparent">
                  <p>Logout</p>
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => navigate("login")}
                className="bg-white px-4 py-1 rounded-full text-[#62C7CC] hover:text-white hover:bg-transparent">
                <p>Login</p>
              </button>
            )}
          </div>
        </div>

        {/* Banner */}
        <div className="pt-[3.75rem] pb-[3.75rem] px-[8.33%] min-h-screen flex items-center justify-between">
          <div className="w-[60%]">
            <div className="container">
              <h3 className="text-white flow-from-bottom delay-1s text-xl">
                Welcome to Tuesday Badminton Community
              </h3>
            </div>

            <div className="container h-[6rem]">
              <h2 className="text-[#F9CA55] flow-from-bottom delay-2s">
                WHERE OUR BOND EXTENDS BEYOND THE COURTS
              </h2>
            </div>
            <button
              type="button"
              className="btn"
              onClick={() => navigate("join")}>
              <p>Join Our Session</p>
            </button>
          </div>
          <div className="w-[40%] flex justify-center">
            <img src={TBCLogo} className="h-[75%] w-[78%] mb-[5rem]" />
          </div>
        </div>

        <div className="section-two w-full h-full px-[8.33%] pb-[3.75rem]">
          <div className="flex px-4">
            <div className="w-1/2 mt-5">
              <div className="container h-[3.0rem]">
                <h2 className="text-[#F9CA55] mb-5" id="animated-text-two">
                  About Us
                </h2>
              </div>
              <div className="container h-[4.8rem] mt-[2rem] pr-[2rem]">
                <p className="text-justify text-[#F9CA55]" id="animated-text">
                  Welcome to Tuesday Badminton Community (TBC), where passion
                  meets the shuttlecock on the courts of camaraderie.
                  Established with the vision of fostering a community that
                  celebrates the joy of the game, TBC is more than just a
                  gathering of players - it's a family united by a shared love
                  for the sport
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <img
                src={banner}
                className="bg-gray-500 w-full h-full object-cover rounded-md"
                id="animated-text-three"
              />
            </div>
          </div>
        </div>
      </div>

      {/* TBC Services */}
      <div className="w-full h-full px-[8.33%] text-black py-[5rem]">
        <div className="flex gap-5 justify-center items-center">
          <img src={TBCService} className="w-1/3" id="animated-text-four-1" />

          <div
            className="bg-[#62C7CC] rounded-full p-[2.5rem] flex flex-col justify-center items-center min-w-[17.5rem] min-h-[17.5rem] max-w-[17.5rem] max-h-[17.5rem] coin"
            id="animated-text-four">
            <img
              src={racket}
              className="w-[7.5rem] h-[7.5rem] object-contain "
            />
            <h4 className="p-5 text-white text-center">Grip Change</h4>
            <p
              className="text-justify bg-[#62C7CC] text-white"
              style={{ hyphens: "auto" }}>
              Enhance your game with our badminton grip Services - Purchase new
              grips and have them replaced for an optimal playing experience
            </p>
          </div>

          <div
            className="bg-[#62C7CC] rounded-full p-[2.5rem] flex flex-col justify-center items-center min-w-[17.5rem] min-h-[17.5rem] max-w-[17.5rem] max-h-[17.5rem] coin"
            id="animated-text-five">
            <img
              src={shuttle}
              className="w-[7.5rem] h-[7.5rem] object-contain "
            />
            <h4 className="p-5 text-white text-center">RSL Shuttlecock</h4>
            <p
              className="text-justify bg-[#62C7CC] text-white"
              style={{ hyphens: "auto" }}>
              Get the best deals on RSL Classic or RSL G2 - Your go-to source
              for unbeatable prices compared to other retailers!
            </p>
          </div>

          <div
            className="bg-[#62C7CC] rounded-full p-[2.5rem] flex flex-col justify-center items-center min-w-[17.5rem] min-h-[17.5rem] max-w-[17.5rem] max-h-[17.5rem] coin"
            id="animated-text-six">
            <img
              src={shirt}
              className="w-[7.5rem] h-[7.5rem] object-contain "
            />
            <h4 className="p-5 text-white text-center">TBC shirt</h4>
            <p
              className="text-justify bg-[#62C7CC] text-white"
              style={{ hyphens: "auto" }}>
              Elevate your Tuesday Badminton Community spirit - Purchase a TBC
              shirt with customizable names for a personalized touch
            </p>
          </div>
        </div>
      </div>

      {/* MEET OUR COMMITEE */}
      <div className="w-full h-full px-[8.33%] pt-[3rem] pb-[20rem] section-three">
        <h2 className="text-center mb-[3.75rem]">MEET OUR COMMITEE</h2>
        <div
          className="flex justify-center items-end gap-5 h-[18rem]"
          id="animated-text-seven">
          <div
            onMouseOver={() => setCard(4)}
            className={`transition-all duration-300 ease-in-out ${
              card === 4 ? "w-[25%]" : "w-[18.75%]"
            }`}>
            <div className="relative flex items-center justify-center">
              <img
                src={Pi}
                className={`transition-all duration-300 ease-in-out w-full ${
                  card === 4 ? "h-[15rem]" : "h-[12rem]"
                } rounded-md shadow-sm shadow-black/80 object-cover`}
              />
              {card === 4 && (
                <p
                  className={`absolute bottom-0 p-4 text-white bg-black/25 transition-opacity duration-1000 ease-in-out opacity-0 hover:opacity-100 max-h-full h-full rounded-md text-justify`}
                  style={{ hyphens: "auto" }}>
                  As the dedicated Inventory Manager, my role involves
                  maintaining a seamless badminton experience by refilling
                  shuttles on court, meticulosly vetting shuttle conditions, and
                  coordinating bulk orders to keep our games flying smoothly.
                </p>
              )}
            </div>
            <h4 className="text-left pt-4">Loh Pishon</h4>
          </div>
          <div
            onMouseOver={() => setCard(2)}
            className={`transition-all duration-300 ease-in-out ${
              card === 2 ? "w-[25%]" : "w-[18.75%]"
            }`}>
            <div className="relative flex items-center justify-center">
              <img
                src={Jo}
                className={`transition-all duration-300 ease-in-out w-full ${
                  card === 2 ? "h-[15rem]" : "h-[12rem]"
                } rounded-md shadow-sm shadow-black/80 object-cover`}
              />
              {card === 2 && (
                <p
                  className={`absolute bottom-0 p-4 text-white bg-black/25 transition-opacity duration-1000 ease-in-out opacity-0 hover:opacity-100 max-h-full h-full rounded-md text-justify`}
                  style={{ hyphens: "auto" }}>
                  As the Miscellaneous Support for our thriving badminton
                  community, I wear many hats - I'm here to lend a helping hand
                  wherever needed, ensuring the smooth functioning and enjoyment
                  of our collective badminton experience.
                </p>
              )}
            </div>
            <h4 className="text-left pt-4">Jonda Kristy</h4>
          </div>
          <div
            onMouseOver={() => setCard(3)}
            className={`transition-all duration-300 ease-in-out ${
              card === 3 ? "w-[25%]" : "w-[18.75%]"
            }`}>
            <div className="relative flex items-center justify-center">
              <img
                src={Val}
                className={`transition-all duration-300 ease-in-out w-full ${
                  card === 3 ? "h-[15rem]" : "h-[12rem]"
                } rounded-md shadow-sm shadow-black/80 object-cover`}
              />
              {card === 3 && (
                <p
                  className={`absolute bottom-0 p-4 text-white bg-black/25 transition-opacity duration-1000 ease-in-out opacity-0 hover:opacity-100 max-h-full h-full rounded-md text-justify`}
                  style={{ hyphens: "auto" }}>
                  As the leader of our dynamic badminton community, Ispearhead
                  court bookings, manage payments, procure quality shuttlecocks,
                  and organize TBC session and enjoyable experience for all
                  members.
                </p>
              )}
            </div>
            <h4 className="text-left pt-4">Valerie Yeoh</h4>
          </div>
          <div
            onMouseOver={() => setCard(1)}
            className={`transition-all duration-300 ease-in-out ${
              card === 1 ? "w-[25%]" : "w-[18.75%]"
            }`}>
            <div className="relative flex items-center justify-center">
              <img
                src={Han}
                className={`transition-all duration-300 ease-in-out w-full ${
                  card === 1 ? "h-[15rem]" : "h-[12rem]"
                } rounded-md shadow-sm shadow-black/80 object-cover`}
              />
              {card === 1 && (
                <p
                  className={`absolute bottom-0 p-4 text-white bg-black/25 transition-opacity duration-1000 ease-in-out opacity-0 hover:opacity-100 max-h-full h-full rounded-md text-justify`}
                  style={{ hyphens: "auto" }}>
                  As the Treasurer of our vibrant badminton community, I
                  diligently handle the financial aspect, collecting payments,
                  and ensuring accurate transactions, guaranteeing smooth and
                  transparent financial operations for all members.
                </p>
              )}
            </div>
            <h4 className="text-left pt-4">Lee Han Jiang</h4>
          </div>

          <div
            onMouseOver={() => setCard(5)}
            className={`transition-all duration-300 ease-in-out ${
              card === 5 ? "w-[25%]" : "w-[18.75%]"
            }`}>
            <div className="relative flex items-center justify-center">
              <img
                src={An}
                className={`transition-all duration-300 ease-in-out w-full ${
                  card === 5 ? "h-[15rem]" : "h-[12rem]"
                } rounded-md shadow-sm shadow-black/80 object-cover`}
              />
              {card === 5 && (
                <p
                  className={`absolute bottom-0 p-4 text-white bg-black/25 transition-opacity duration-1000 ease-in-out opacity-0 hover:opacity-100 max-h-full h-full rounded-md text-justify`}
                  style={{ hyphens: "auto" }}>
                  As the IT Support for our expansive badminton community, I
                  drive the development of a user-friendly website, ensuring
                  seamless logins for all members. Additionally, I help monitor
                  the backend, tackling IT-related challenges to enhance our
                  digital experience.
                </p>
              )}
            </div>
            <h4 className="text-left pt-4">Andrew Ding</h4>
          </div>
        </div>
      </div>

      {/* Cooperation */}
      <div className="w-full h-full px-[12.33%] top-[-8rem] relative">
        <div className="flex justify-center">
          <div
            className="w-1/2 shadow shadow-black/25 pt-[5rem] py-[2.5rem] px-[4rem] bg-white"
            id="animated-text-twelve">
            <div className="flex flex-col">
              <div className="flex justify-center gap-5">
                <img
                  src={hand}
                  className="h-[4rem] w-auto object-contain self-center mb-5"
                />
                <img
                  src={TBCLogoBlack}
                  className="h-[4rem] w-auto object-contain self-center mb-5"
                />
              </div>
              <p className="mt-5 text-justify">
                Here at TBC, we embrace and support individuals from all walks
                of life. If you have a business entity and are interested in
                collaboration, we welcome you to reach out to us. Let's explore
                opportunities to grow together and enhance the experiences
                within our vibrant community.
              </p>
              <Input
                // value={username}
                // onChange={({ target }) => setUsername(target.value)}
                label="Name"
                variant="static"
                placeholder="Your Username"
                className="bg-white"
                containerProps={{ className: "mt-6" }}
              />
              <Input
                // value={username}
                // onChange={({ target }) => setUsername(target.value)}
                label="Phone No."
                variant="static"
                placeholder="Your Phone No."
                className="bg-white"
                containerProps={{ className: "mt-6" }}
              />
              <Input
                // value={username}
                // onChange={({ target }) => setUsername(target.value)}
                label="Email"
                variant="static"
                placeholder="Your Email"
                className="bg-white"
                containerProps={{ className: "mt-6" }}
              />
            </div>
            <div className="justify-end flex">
              <button type="button" className="btn">
                <p>Contact Us</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[8.33%] pb-[5rem] flex items-center justify-center">
        <div className="px-8" id="animated-text-thirdteen">
          <h4 className="bg-[#62C7CC] w-fit px-[1.5rem] py-[0.625rem] rounded text-white shadow shadow-black/50">
            TBC Info Session
          </h4>
          <h4 className="mt-8">FORUM OPTIMUM USJ COURT CENTRE</h4>
          <p>
            Lot 791, Persiaran Subang Indah, Taman Perindustrian Subang, 47610
            Subang Jaya
          </p>
          <h4 className="mt-5">EVERY TUESDAY 8-10PM</h4>
          <p>Court B05-B15</p>
        </div>
        <a
          href="https://maps.app.goo.gl/Nmo8HgQWGDdx7EiNA"
          className="w-1/2"
          id="animated-text-fourteen">
          <img
            src={googlemap}
            className="w-full rounded shadow shadow-black/50"
          />
        </a>
      </div>

      {/* footer */}
      <div className="w-full h-auto bg-[#0B274D] py-2 px-[8.33%] text-white">
        <p className="text-xs">
          © 2024 Tuesday Badminton Community Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
