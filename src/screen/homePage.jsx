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
import { db } from "../firebase/firebase-config";
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
import Val from "../img/Valerie.png";
import Pi from "../img/pishon.png";
import An from "../img/andrew.png";
import hand from "../img/hand.png";

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

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text");
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.classList.add("animate-to-top");
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-two");
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.classList.add("animate-to-top");
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-three");
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.classList.add("animate-to-top");
    }
  });

  // window.addEventListener("scroll", function () {
  //   var element = document.getElementById("animated-text-four");
  //   var position = element.getBoundingClientRect().top;
  //   var windowHeight = window.innerHeight;

  //   if (position < windowHeight) {
  //     element.classList.add("animate-to-show");
  //   }
  // });

  // window.addEventListener("scroll", function () {
  //   var element = document.getElementById("animated-text-five");
  //   var position = element.getBoundingClientRect().top;
  //   var windowHeight = window.innerHeight;

  //   if (position < windowHeight) {
  //     element.classList.add("animate-to-show");
  //   }
  // });

  // window.addEventListener("scroll", function () {
  //   var element = document.getElementById("animated-text-six");
  //   var position = element.getBoundingClientRect().top;
  //   var windowHeight = window.innerHeight;

  //   if (position < windowHeight) {
  //     element.classList.add("animate-to-show");
  //   }
  // });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-seven");
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.classList.add("animate-to-top");
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-eight");
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.classList.add("animate-to-top");
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-nine");
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.classList.add("animate-to-top");
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-ten");
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.classList.add("animate-to-top");
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-elevan");
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.classList.add("animate-to-top");
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("animated-text-twelve");
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.classList.add("animate-to-top");
    }
  });

  const [card, setCard] = useState(3);

  return (
    <div className="w-full h-auto">
      <div className="header-bg w-full">
        {/* NavBar */}
        <div className="py-[1rem] px-[8.33%] flex justify-between items-center text-white">
          <div className="flex items-center">
            <img src={TBCLogo} className="h-10 w-12" />
            <div className="ml-2">
              <h3 className="mt-1">Tuesday Badminton</h3>
              <h3 className="leading-3">Community</h3>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <p>About Us</p>
            <p>Help Centre</p>
            <p>Collaborate</p>
            <button type="button" className="bg-white px-4 py-1 rounded-full">
              <p className="text-[#62C7CC]">Login</p>
            </button>
          </div>
        </div>

        {/* Banner */}
        <div className="pt-[3.75rem] pb-[3.75rem] px-[8.33%] min-h-screen flex items-center justify-between">
          <div className="w-[60%]">
            <div class="container">
              <h3 class="text-white flow-from-bottom delay-1s text-xl">
                Welcome to Tuesday Badminton Community
              </h3>
            </div>

            <div class="container h-[6rem]">
              <h2 class="text-[#F9CA55] flow-from-bottom delay-2s">
                WHERE OUR BOND EXTENDS BEYOND THE COURTS
              </h2>
            </div>
            <button type="button" className="btn">
              <p>Join Our Session</p>
            </button>
          </div>
          <div className="w-[40%] flex justify-center">
            <img src={TBCLogo} className="h-[75%] w-[78%] mb-[5rem]" />
          </div>
        </div>

        <div class="section-two w-full h-full px-[8.33%] pb-[3.75rem]">
          <div className="flex px-4">
            <div className="w-1/2 mt-5">
              <div class="container h-[3.0rem]">
                <h2 className="text-[#F9CA55] mb-5" id="animated-text-two">
                  About Us
                </h2>
              </div>
              <div class="container h-[4.8rem] mt-[2rem] pr-[2rem]">
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
      <div className="w-full h-full px-[8.33%] text-white">
        <div className="flex gap-5">
          <div>
            <img
              src={racket}
              className="w-[7.5rem] h-[7.5rem] object-contain"
            />
            <h4 className="my-5">Grip Change</h4>
            <p>
              Enhance your game with our badminton grip Services - Purchase new
              grips and have them replaced for an optimal playing experience
            </p>
          </div>
        </div>
        {/* <div className=" py-[1.75rem] h-full flex items-center">
          <h2 className="text-center mt-[1.75rem]">TBC Services</h2>
          <div className="flex px-[8.33%] justify-center text-center gap-4">
            <div
              className="coin w-[20rem] h-[20rem] flex flex-col items-center justify-center rounded-full border-2 border-white p-5 bg-[#62C7CC]"
              id="animated-text-four">
              <img
                src={racket}
                className="w-[7.5rem] h-[7.5rem] object-contain"
              />
              <h4 className="my-5">Grip Change</h4>
              <p>
                Enhance your game with our badminton grip Services - Purchase
                new grips and have them replaced for an optimal playing
                experience
              </p>
            </div>
            <div
              className="coin w-[20rem] h-[20rem] flex flex-col items-center justify-center rounded-full border-2 border-white p-5 bg-[#62C7CC]"
              id="animated-text-five">
              <img
                src={shuttle}
                className="w-[7.5rem] h-[7.5rem] object-contain"
              />
              <h4 className="my-5">RSL Shuttlecock</h4>
              <p>
                Get the best deals on RSL Classic or RSL G2 - Your go-to source
                for unbeatable prices compared to other retailers!
              </p>
            </div>
            <div
              className="coin w-[20rem] h-[20rem] flex flex-col items-center justify-center rounded-full border-2 border-white p-5 bg-[#62C7CC]"
              id="animated-text-six">
              <img
                src={shirt}
                className="w-[7.5rem] h-[7.5rem] object-contain"
              />
              <h4 className="my-5">TBC shirt</h4>
              <p>
                Elevate your Tuesday Badminton Community spirit - Purchase a TBC
                shirt with customizable names for a personalized touch
              </p>
            </div>
          </div>
        </div> */}
      </div>

      {/* MEET OUR COMMITEE */}
      <div className="w-full h-full px-[8.33%] pt-[8rem] pb-[15rem] section-three">
        <h2 className="text-center mb-[3.75rem]">MEET OUR COMMITEE</h2>
        <div className="flex justify-center items-end gap-5 h-[15rem]">
          <button
            type="button"
            onClick={() => setCard(1)}
            className={`transition-all duration-300 ease-in-out ${
              card === 1 ? "w-[25%]" : "w-[18.75%]"
            }`}>
            <div className="relative flex items-center justify-center">
              <img
                className={`transition-all duration-300 ease-in-out w-full ${
                  card === 1 ? "h-[15rem]" : "h-[12rem]"
                } rounded-md shadow-sm shadow-black/80 object-cover`}
                id="animated-text-seven"
              />
            </div>
            <h4 className="text-left pt-4">Lee Han Jiang</h4>
          </button>
          <button
            type="button"
            onClick={() => setCard(2)}
            className={`transition-all duration-300 ease-in-out ${
              card === 2 ? "w-[25%]" : "w-[18.75%]"
            }`}>
            <div className="relative flex items-center justify-center">
              <img
                className={`transition-all duration-300 ease-in-out w-full ${
                  card === 2 ? "h-[15rem]" : "h-[12rem]"
                } rounded-md shadow-sm shadow-black/80 object-cover`}
                id="animated-text-eight"
              />
            </div>
            <h4 className="text-left pt-4">Jonda Kristy</h4>
          </button>
          <button
            type="button"
            onClick={() => setCard(3)}
            className={`transition-all duration-300 ease-in-out ${
              card === 3 ? "w-[25%]" : "w-[18.75%]"
            }`}>
            <div className="relative flex items-center justify-center">
              <img
                src={Val}
                className={`transition-all duration-300 ease-in-out w-full ${
                  card === 3 ? "h-[15rem]" : "h-[12rem]"
                } rounded-md shadow-sm shadow-black/80 object-cover`}
                id="animated-text-nine"
              />
              {card === 3 && (
                <p
                  className={`absolute bottom-0 p-4 text-white bg-black/25 transition-opacity duration-1000 ease-in-out opacity-0 hover:opacity-100 max-h-[15rem]`}>
                  As the leader of our dynamic badminton community, I spearhead
                  court bookings, manage payments, procure quality shuttlecocks,
                  and organize TBC sessions to ensure an enjoyable experience
                  for all members.
                </p>
              )}
            </div>
            <h4 className="text-left pt-4">Valerie Yeoh</h4>
          </button>
          <button
            type="button"
            onClick={() => setCard(4)}
            className={`transition-all duration-300 ease-in-out ${
              card === 4 ? "w-[25%]" : "w-[18.75%]"
            }`}>
            <div className="relative flex items-center justify-center">
              <img
                src={Pi}
                className={`transition-all duration-300 ease-in-out w-full ${
                  card === 4 ? "h-[15rem]" : "h-[12rem]"
                } rounded-md shadow-sm shadow-black/80 object-cover`}
                id="animated-text-ten"
              />
              {card === 4 && (
                <p
                  className={`absolute bottom-0 p-4 text-white bg-black/25 transition-opacity duration-1000 ease-in-out opacity-0 hover:opacity-100 max-h-[15rem]`}>
                  As the dedicated Inventory Manager, my role involves
                  maintaining a seamless badminton experience by refilling
                  shuttles on court, meticulosly vetting shuttle conditions
                </p>
              )}
            </div>
            <h4 className="text-left pt-4">Loh Pishon</h4>
          </button>
          <button
            type="button"
            onClick={() => setCard(5)}
            className={`transition-all duration-300 ease-in-out ${
              card === 5 ? "w-[25%]" : "w-[18.75%]"
            }`}>
            <div className="relative flex items-center justify-center">
              <img
                src={An}
                className={`transition-all duration-300 ease-in-out w-full ${
                  card === 5 ? "h-[15rem]" : "h-[12rem]"
                } rounded-md shadow-sm shadow-black/80 object-cover`}
                id="animated-text-elevan"
              />
              {card === 5 && (
                <p
                  className={`absolute bottom-0 p-4 text-white bg-black/25 transition-opacity duration-1000 ease-in-out opacity-0 hover:opacity-100 max-h-[15rem]`}>
                  As the IT Support for our expansive badminton community, I
                  drive the development of a user-friendly website, ensuring
                  seamless logins for all members. Additionally, I help monitor
                  the backend
                </p>
              )}
            </div>
            <h4 className="text-left pt-4">Andrew Ding</h4>
          </button>
        </div>
      </div>

      {/* Cooperation */}
      <div className="w-full h-full px-[12.33%] top-[-8rem] relative">
        <div className="flex justify-center">
          <div
            className="w-3/4 shadow shadow-black/25 pt-[5rem] py-[2.5rem] px-[4rem] bg-white"
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
    </div>
  );
}

export default App;
