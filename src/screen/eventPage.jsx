import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Spinner,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import banner from "../img/banner.jpeg";
import { db } from "../firebase-config";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const EventPage = () => {
  const [userDetails, setUserDetails] = React.useState(null);
  const [disable, setDisable] = React.useState(false);
  const [joined, setJoined] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [spinner, setSpinner] = React.useState(true);

  const attendancesCollectionRef = collection(db, "attendances");

  const navigate = useNavigate();

  React.useEffect(() => {
    const data = window.localStorage.getItem("userDetail");
    if (data !== null) setUserDetails(JSON.parse(data));
  }, []);

  const getJoinedOrNot = async () => {
    setSpinner(true);
    if (userDetails) {
      const q = query(
        attendancesCollectionRef,
        where("name", "==", userDetails.name)
      );

      const data = await getDocs(q);
      if (data.docs) {
        const joinedOrNot = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))[0];

        if (joinedOrNot) {
          setJoined(true);
        } else {
          setJoined(false);
        }
      }
    }
    setSpinner(false);
  };

  React.useEffect(() => {
    getJoinedOrNot();
  }, [userDetails]);

  const logout = () => {
    window.localStorage.setItem("userDetail", null);
    setUserDetails(null);
  };

  const createUser = async () => {
    setSpinner(true);
    await addDoc(attendancesCollectionRef, {
      name: userDetails.name,
    });
    getJoinedOrNot();
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
              <Button color="white" onClick={() => navigate("/login")}>
                login
              </Button>
              <Button color="blue" className="ml-2">
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="w-sreen h-[calc(100%-64px)]">
        <div className="w-full h-auto px-[240px] mt-10">
          <div
            className="rounded-md flex flex-col items-center justify-center p-4"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${banner})`,
              backgroundSize: "cover",
              position: "relative",
            }}>
            <div className="text-sm mt-2">Real-Time Malaysia Clock</div>

            <div className="mt-2 text-xl">Tuesday Badminton</div>
            <div className="mt-1 text-sm">
              Forum Optimum, Subang Jaya | 02/01/2024 8:00 p.m. - 10:00 p.m.
            </div>
            {spinner ? (
              <Spinner className="mt-7" />
            ) : (
              <Button
                disabled={joined}
                color="blue"
                className="mt-5"
                onClick={() => createUser()}>
                <span>JOIN NOW</span>
              </Button>
            )}
          </div>
        </div>

        <div className="w-full h-auto mt-10 bg-blue-200">
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

export default EventPage;
