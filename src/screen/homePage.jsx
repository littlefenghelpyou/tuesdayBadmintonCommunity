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
        <img src={banner} className="h-full w-full object-cover" />
        <div className="h-auto w-full mt-10 px-[156px]">
          <div className="text-center text-3xl">Our Event</div>
          <Carousel
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i
                        ? "w-8 bg-blue-500"
                        : "w-4 bg-blue-500/50"
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
                className="!absolute top-2/4 left-4 -translate-y-2/4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-500">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-500">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </IconButton>
            )}>
            {events &&
              events.length > 0 &&
              events.map((event, index) => (
                <div
                  className="relative w-full h-auto flex justify-center"
                  key={index}>
                  <div className="w-5/6 h-[300px] flex items-center">
                    {event.map((eachEvent, index) => (
                      <div
                        className="w-1/3 flex justify-center"
                        key={`${eachEvent.title}-${index}`}>
                        <div className="w-[96%] min-h-[150px] max-h-[300px] bg-white rounded px-5 pt-5 pb-2 shadow-md">
                          <div className="text-xl">{eachEvent.title}</div>
                          <div className="text-xs text-gray-500 mt-2">
                            Date: {eachEvent.date}
                          </div>
                          <div className="text-xs text-gray-500">
                            Location: {eachEvent.location}
                          </div>
                          <div className="w-full text-right mt-3">
                            <Button
                              color="blue"
                              size="sm"
                              onClick={() =>
                                navigate(`/event/${eachEvent.id}`)
                              }>
                              Join
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
        <div className="w-full h-auto mt-10">
          <div className="flex">
            <div className="w-2/5 pl-[240px] pb-[80px] flex justify-center items-center">
              <div className="w-full ">
                <div>
                  <div className="text-3xl">Our New Shirt!</div>
                  <div className="text-base mt-3">
                    Why is B&W, Because it is TEMPLATE!
                  </div>
                  <Button color="blue" className="mt-4">
                    Click Here to Buy
                  </Button>
                </div>
              </div>
            </div>
            <div
              ref={ref}
              className={`w-3/5 ${
                showImage ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-1000 relative left-0 flex justify-end mr-[200px]`}>
              <img
                src={templateShirt}
                alt="Moving Image"
                style={{ width: "660px", height: "378px" }}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto mt-[102px]">
          <div className="">
            <div className="text-center text-3xl">
              WE WOULD LIKE TO LISTEN TO YOUR OPINION
            </div>
            <div className="flex w-full">
              <div className="w-1/5"></div>
              <div className="px-[48px] py-[36px] mt-10 bg-gray-100/80 rounded w-3/5 mb-20">
                <div className="text-base">Please Enter Your Email ✉️</div>
                <Input
                  label="Email"
                  className="bg-white"
                  containerProps={{ className: "mt-3" }}
                />
                <div className="text-base mt-5">
                  Please Share With Me What You Think 😊
                </div>
                <Textarea
                  label="Opinion"
                  containerProps={{ className: "mt-3" }}
                  className="bg-white"
                />
                <div className="w-full text-right">
                  <Button color="blue" className="mt-4">
                    Submit
                  </Button>
                </div>
              </div>
              <div className="w-1/5 flex justify-end items-end">
                <img src={catLook} className="w-[144px] h-[205px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto bg-blue-200">
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
}

export default App;
