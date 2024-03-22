import React from "react";
import { Button, Input } from "@material-tailwind/react";
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

const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hide, setHide] = React.useState(true);
  const [specUsers, setSpecUsers] = React.useState([]);
  const [emptyField, setEmptyField] = React.useState(false);
  const [usernameError, setUsernameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const usersCollectionRef = collection(db, "users");

  console.log("usersCollectionRef -->", usersCollectionRef);

  const navigate = useNavigate();

  const getSpecUsers = async () => {
    if (username.length > 0 && password.length > 0) {
      const q = query(usersCollectionRef, where("name", "==", username));

      const data = await getDocs(q);
      const userDetail = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))[0];

      if (userDetail.password) {
        console.log("passhereee", userDetail.password === password);
        if (userDetail.password === password) {
          const details = {
            name: userDetail.name,
            password: userDetail.password,
          };
          window.localStorage.setItem("userDetail", JSON.stringify(details));
          navigate("/");
        } else {
          setPasswordError(true);
        }
      } else {
        console.log("error");
        setUsernameError(true);
      }
    } else {
      setEmptyField(true);
    }
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden flex justify-center items-center">
      <div className="w-[500px] h-auto shadow-lg px-[24px] py-[32px]">
        <div className="text-3xl">Login</div>
        {emptyField && (
          <div className="text-white bg-red-500 px-2 py-2 rounded mt-2 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div className="ml-2">Please Complete the Fields</div>
          </div>
        )}
        <Input
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          label="Name"
          variant="static"
          placeholder="Your Username"
          className="bg-white"
          containerProps={{ className: "mt-6" }}
        />
        {usernameError && (
          <div className="flex items-center text-red-500 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
            <div className="ml-2 text-sm">Can't find this Username</div>
          </div>
        )}
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          variant="static"
          placeholder="Your Password"
          className="bg-white"
          type={hide ? "password" : "text"}
          containerProps={{ className: "mt-6" }}
          icon={
            <button type="button" onClick={() => setHide(!hide)}>
              {hide ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </button>
          }
        />
        {passwordError && (
          <div className="flex items-center text-red-500 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
            <div className="ml-2 text-sm">Wrong Password</div>
          </div>
        )}
        <div className="w-full text-right mt-10">
          <Button color="blue" onClick={() => getSpecUsers()}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
