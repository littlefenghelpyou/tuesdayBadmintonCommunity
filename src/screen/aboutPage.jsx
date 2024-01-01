import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import AboutUs from "../img/aboutUs.jpeg";
import Values from "../img/values.jpeg";
import Mission from "../img/mission.jpeg";
import Vision from "../img/vision.jpeg";
import Valerie from "../img/Valerie.png";
import Pishon from "../img/pishon.png";
import Andrew from "../img/andrew.png";
import Hanjiang from "../img/hanjiang.png";
import Geoffrey from "../img/geoffrey.png";
import Franky from "../img/franky.png";
import TBC from "../img/logoTBC.jpeg";

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
  });

  const [refFirst, inFirstView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
  });

  const [refSecond, inSecondView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
  });

  const [refThird, inThirdView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
  });

  React.useEffect(() => {
    if (inView) {
      setShowImage(true);
    }
  }, [inView]);

  React.useEffect(() => {
    if (inFirstView) {
      setFirstShowings(true);
    }
  }, [inFirstView]);

  React.useEffect(() => {
    if (inSecondView) {
      setSecondShowings(true);
    }
  }, [inSecondView]);

  React.useEffect(() => {
    if (inThirdView) {
      setThirdShowings(true);
    }
  }, [inThirdView]);

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [showImage, setShowImage] = React.useState(false);
  const [showFirstImage, setFirstShowings] = React.useState(false);
  const [showSecondImage, setSecondShowings] = React.useState(false);
  const [showThirdImage, setThirdShowings] = React.useState(false);

  React.useEffect(() => {
    const data = window.localStorage.getItem("userDetail");
    if (data !== null) setUserDetails(JSON.parse(data));
  }, []);

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
            <div className="text-3xl text-blue-500 font-mono">TBC</div>
          </button>
          <button
            type="button"
            onClick={() => navigate("/aboutUs")}
            className="hover:text-blue-500">
            <div>About</div>
          </button>
          <button type="/" className="hover:text-blue-500">
            <div>Help Centre</div>
          </button>
          <button type="/" className="hover:text-blue-500" disabled>
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
        <div className="w-full h-auto">
          <div className="w-full flex mt-10">
            <div
              className="w-1/3"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              {/* <img src={AboutUs} className="w-[480px] h-[360px] object-cover" /> */}
              <div
                ref={ref}
                className={`flex items-end w-[60%] ${
                  showImage
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                } transition-transform duration-1000 relative flex justify-end`}>
                <div className="text-6xl w-[30px] text-blue-500">T</div>
                <div className="text-4xl tracking-wider text-blue-500">
                  uesday
                </div>
              </div>
              <div
                ref={ref}
                className={`flex items-end w-[70%] ${
                  showImage
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                } transition-transform duration-1000 relative flex justify-end`}>
                <div className="text-6xl w-[30px] text-blue-500">B</div>
                <div className="text-4xl tracking-wider text-blue-500">
                  adminton
                </div>
              </div>
              <div
                ref={ref}
                className={`flex items-end w-[75%] ${
                  showImage
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                } transition-transform duration-1000 relative flex justify-end`}>
                <div className="text-6xl w-[30px] text-blue-500">C</div>
                <div className="text-4xl tracking-wider text-blue-500">
                  ommunity
                </div>
              </div>
            </div>
            <div className="w-2/3">
              <div
                className="text-3xl text-blue-500"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                What is TBC?
              </div>
              <div className="text-base pr-[180px] mt-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                commodo, diam ac tempus feugiat, leo ante sollicitudin dolor,
                vel bibendum lectus augue eget lectus. Sed sed enim non neque
                ornare ullamcorper et at quam. Curabitur interdum nisi turpis,
                vel euismod tellus dignissim quis. Sed nunc purus, malesuada non
                ultrices id, mollis a sapien. Fusce malesuada nec justo
                ullamcorper pretium. Duis sagittis dolor sit amet tortor
                vehicula, faucibus sodales velit mollis. Aenean euismod velit
                eget auctor tincidunt. Proin facilisis finibus lectus in
                ultrices. Vestibulum et feugiat nulla, eu facilisis urna.
                Vivamus posuere laoreet volutpat. Nam varius orci ex, a
                ullamcorper turpis ullamcorper id. Mauris efficitur metus at
                orci ultrices, et tempor ante lobortis.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto bg-gray-100 mt-10">
          <div className="px-[240px] py-[56px]">
            <div className="flex w-full">
              <div className="w-full flex flex-col justify-center px-10">
                <div
                  className="w-2/3 text-4xl text-blue-500"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                  Our Vision
                </div>
                <div className="text-base mt-2">
                  To be the leading technology partner in the region for
                  fostering sports collaboration and facilitating the growth of
                  the sports ecosystem.
                </div>
              </div>
              <img
                ref={refFirst}
                src={Vision}
                className={`w-[400px] h-[400px] object-cover rounded ${
                  showFirstImage
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                } transition-transform duration-1000 relative flex justify-end`}
              />
            </div>
            <div className="flex w-full px-10 mt-10">
              <img
                ref={refSecond}
                src={Mission}
                className={`w-[400px] h-[400px] object-cover rounded ${
                  showSecondImage
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                } transition-transform duration-1000 relative flex justify-end`}
              />
              <div className="w-full flex flex-col justify-center pl-20">
                <div
                  className="w-2/3 text-4xl text-blue-500"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                  Our Mission
                </div>
                <div className="text-base mt-2">
                  We aspire to be the biggest supporters of sports! With our
                  sports technology and a strong can-do sporting spirit, here
                  are three things to which we are wholeheartedly committed:
                  Getting people to play more sports by Connecting more players,
                  businesses and communities with our technology For the growth
                  of the sports ecosystem
                </div>
              </div>
            </div>
            <div className="flex w-full px-10 mt-10">
              <div className="w-full flex flex-col justify-center px-10">
                <div
                  className="w-2/3 text-4xl text-blue-500"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                  Our Values
                </div>
                <div className="text-base mt-2">
                  We work as a team​ Just like in sports, exceptional team
                  players strengthen our teams. We believe in collaborating with
                  exceptional employees who prioritize teamwork, bringing their
                  A-game every day. Our doors are also open to partnering with
                  like-minded individuals and innovators who share our passion
                  for advancing sports. We believe in tech for the community​ We
                  are dedicated to delivering outstanding products that are both
                  straightforward and purposeful, ensuring that sports remain
                  enjoyable without causing headaches for players and
                  businesses.​ We pursue excellence​ Our customer-centred
                  approach guides us to consistently innovate, learn, and
                  enhance our services to better serve the sports industry.
                  Through our sports technology and innovative approach, we are
                  already breaking traditional boundaries and will continue to
                  do so to elevate the sports industry.
                </div>
              </div>
              <img
                ref={refThird}
                src={Values}
                className={`w-[400px] h-[400px] object-cover rounded ${
                  showThirdImage
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                } transition-transform duration-1000 relative flex justify-end`}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto mt-10">
          <div
            className="w-full text-4xl text-center text-blue-500"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Our Team
          </div>
          <div
            className="w-full text-2xl text-center text-blue-300 mt-10"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Founding Team
          </div>
          <div className="mt-5">
            <div className="flex justify-center gap-x-32">
              <div>
                <img
                  className="w-[150px] h-[150px] rounded-full bg-gray-500"
                  src={Valerie}
                />
                <div className="text-center">Valerie</div>
              </div>
              <div>
                <img
                  className="w-[150px] h-[150px] rounded-full bg-gray-500"
                  src={TBC}
                />
                <div className="text-center">MELANIE</div>
              </div>
              <div>
                <img
                  className="w-[150px] h-[150px] rounded-full bg-gray-500"
                  src={TBC}
                />
                <div className="text-center">Joanda Merielle Kristy</div>
              </div>
              <div>
                <img
                  className="w-[150px] h-[150px] rounded-full bg-gray-500"
                  src={Pishon}
                />
                <div className="text-center">Pishon</div>
              </div>
            </div>
          </div>
          <div
            className="w-full text-2xl text-center text-blue-300 mt-10"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Engineer Team
          </div>
          <div className="mt-5">
            <div className="flex justify-center gap-x-32">
              <div>
                <img
                  className="w-[150px] h-[150px] rounded-full bg-gray-500"
                  src={Andrew}
                />
                <div className="text-center">Andrew</div>
              </div>
              <div>
                <img
                  className="w-[150px] h-[150px] rounded-full bg-gray-500"
                  src={Hanjiang}
                />
                <div className="text-center">Han Jiang</div>
              </div>
            </div>
          </div>
          <div
            className="w-full text-2xl text-center text-blue-300 mt-10"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            IT Team
          </div>
          <div className="mt-5">
            <div className="flex justify-center gap-x-32">
              <div>
                <img
                  className="w-[150px] h-[150px] rounded-full bg-gray-500"
                  src={Geoffrey}
                />
                <div className="text-center">Geoffrey</div>
              </div>
              <div>
                <img
                  className="w-[150px] h-[150px] rounded-full bg-gray-500"
                  src={Franky}
                />
                <div className="text-center">Franky</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto bg-blue-200 mt-10">
          <div className="pt-5 mx-[224px] min-h-[360px] border-b border-gray-300">
            <div className="flex text-sm text-blue-900">
              <div className="w-1/4 px-5">
                <div className="text-base mb-2">Home</div>
                <div>Dashboard</div>
              </div>
              <div className="w-1/4 px-5">
                <div className="text-base  mb-2">About Us</div>
                <div className="mb-[2px]">About Us</div>
                <div>Our Blogs</div>
              </div>
              <div className="w-1/4 px-5">
                <div className="text-base  mb-2">Help Centre</div>
                <div className="mb-[2px]">
                  Frequently Asked Questions (FAQs)
                </div>
                <div className="mb-[2px]">Terms of Use</div>
                <div className="mb-[2px]">Privacy Policy</div>
                <div>Contact Us</div>
              </div>
              <div className="w-1/4 px-5">
                <div className="text-base  mb-2">Our Partner</div>
                <div className="mb-[2px]">Kingdom City Kuala Lumpur</div>
                <div className="mb-[2px]">Tuina Massage</div>
                <div>Printing Store</div>
              </div>
            </div>
          </div>
          <div className="py-5 px-[224px] text-sm text-blue-900">
            <div>© 2023 | Tuesday Badminton Court Sdn Bhd (1246872-K)</div>
            <div>{/* <i class="fa-brands fa-facebook"></i> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
