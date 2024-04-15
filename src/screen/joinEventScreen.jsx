import React from "react";
import { Button, Input } from "@material-tailwind/react";

const JoinEventScreen = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex justify-center items-center">
      <div className="w-[500px] h-auto shadow-lg px-[24px] py-[32px]">
        <div className="text-3xl">Join Session Now</div>

        <div className="w-full text-right mt-10">
          <Button color="blue">Join</Button>
        </div>
      </div>
    </div>
  );
};

export default JoinEventScreen;
