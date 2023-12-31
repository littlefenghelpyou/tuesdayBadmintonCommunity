import React from "react";
import {
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Carousel,
  IconButton
} from "@material-tailwind/react";
import './App.css';
import { useInView } from 'react-intersection-observer';
import templateShirt from '../src/img/templateShirt.png'

function App() {

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
  });

  const [showImage, setShowImage] = React.useState(false);

  // Update showImage when inView changes
  React.useEffect(() => {
    if (inView) {
      setShowImage(true);
    }
  }, [inView]);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="flex justify-between items-center h-[64px] w-screen bg-white px-[156px] shadow-lg sticky top-0 left-0 z-[999]">
        <div className="flex justify-center items-center text-lg gap-x-[32px]">
          <div className="text-3xl text-blue-500 font-mono">TBC</div>
          <div>About</div>
          <div>Help Centre</div>
          <div>Collaborate</div>
          <div>Store</div>
        </div>
        <div className="flex justify-center items-center">
          <Button color="white">login</Button>
          <Button color="blue" className="ml-2">Sign Up</Button>
        </div>
      </div>
      <div className="w-sreen h-[calc(100%-64px)] bg-red-200">
        <img src="" className="h-full w-full" />
        <div className="h-auto w-full mt-10 px-[156px]">
          <div className="text-center text-3xl">Our Event</div>
          <Carousel
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-blue-500" : "w-4 bg-blue-500/50"
                      }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </IconButton>
            )}
          >
            <div className="relative w-full h-auto flex justify-center">
              <div className="w-5/6 h-[300px] flex items-center">
                <div className="w-1/3 flex justify-center">
                  <div className="w-[96%] min-h-[150px] max-h-[300px] bg-white rounded px-5 pt-5 pb-2 shadow-md">
                    <div className="text-xl">Tuesday Badminton</div>
                    <div className="text-xs text-gray-500 mt-2">Date: 2/1/2024 8:00pm - 10pm</div>
                    <div className="text-xs text-gray-500">Location: Froum Optimum, Subang</div>
                    <div className="w-full text-right mt-3">
                      <Button color="blue" size="sm">Join</Button>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 flex justify-center">
                  <div className="w-[96%] min-h-[150px] max-h-[300px] bg-white rounded px-5 pt-5 pb-2 shadow-md">
                    <div className="text-xl">Tuesday Badminton</div>
                    <div className="text-xs text-gray-500 mt-2">Date: 9/1/2024 8:00pm - 10pm</div>
                    <div className="text-xs text-gray-500">Location: Froum Optimum, Subang</div>
                    <div className="w-full text-right mt-3">
                      <Button color="blue" size="sm">Join</Button>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 flex justify-center">
                  <div className="w-[96%] min-h-[150px] max-h-[300px] bg-white rounded px-5 pt-5 pb-2 shadow-md">
                    <div className="text-xl">Tuesday Badminton</div>
                    <div className="text-xs text-gray-500 mt-2">Date: 16/1/2024 8:00pm - 10pm</div>
                    <div className="text-xs text-gray-500">Location: Froum Optimum, Subang</div>
                    <div className="w-full text-right mt-3">
                      <Button color="blue" size="sm">Join</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-auto flex justify-center">
              <div className="w-5/6 h-[300px] flex items-center">
                <div className="w-1/3 flex justify-center">
                  <div className="w-[96%] min-h-[150px] max-h-[300px] bg-white rounded px-5 pt-5 pb-2 shadow-md">
                    <div className="text-xl">Tuesday Badminton</div>
                    <div className="text-xs text-gray-500 mt-2">Date: 23/10/2024 8:00pm - 10pm</div>
                    <div className="text-xs text-gray-500">Location: Froum Optimum, Subang</div>
                    <div className="w-full text-right mt-3">
                      <Button color="blue" size="sm">Join</Button>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 flex justify-center">
                  <div className="w-[96%] min-h-[150px] max-h-[300px] bg-white rounded px-5 pt-5 pb-2 shadow-md">
                    <div className="text-xl">Tuesday Badminton</div>
                    <div className="text-xs text-gray-500 mt-2">Date: 30/10/2024 8:00pm - 10pm</div>
                    <div className="text-xs text-gray-500">Location: Froum Optimum, Subang</div>
                    <div className="w-full text-right mt-3">
                      <Button color="blue" size="sm">Join</Button>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 flex justify-center">
                  <div className="w-[96%] min-h-[150px] max-h-[300px] bg-white rounded px-5 pt-5 pb-2 shadow-md">
                    <div className="text-xl">Find Your Monlty Slot!</div>
                    <div className="text-xs text-gray-500 mt-2">Date: 30/10/2024 8:00pm - 10pm</div>
                    <div className="text-xs text-gray-500">Location: Froum Optimum, Subang</div>
                    <div className="w-full text-right mt-3">
                      <Button color="blue" size="sm">Join</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="w-full h-auto mt-10">
          <div className="flex">
            <div className="w-2/5 pl-[240px] pb-[80px] flex justify-center items-center">
              <div className="w-full ">
                <div>
                  <div className="text-3xl">Our New Shirt!</div>
                  <div className="text-base mt-3">Why is B&W, Because it is TEMPLATE!</div>
                  <Button color="blue" className="mt-4">Click Here to Buy</Button>
                </div>
              </div>
            </div>
            <div ref={ref} className={`w-3/5 ${showImage ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-1000 relative left-0 flex justify-end mr-[200px]`}>
              <img
                src={templateShirt}
                alt="Moving Image"
                style={{ width: '660px', height: '378px' }}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto mt-10 bg-blue-200">
          <div className="pt-5 mx-[224px] min-h-[480px] border-b border-gray-300">
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
                <div className="mb-[2px]">Frequently Asked Questions (FAQs)</div>
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
            <div>
              <i class="fa-brands fa-facebook"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;