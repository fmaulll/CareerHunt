import React, { FC } from "react";
import Job from "../assets/Job.webp";
import Text from "../components/atoms/Text";

interface Props {
  children: React.ReactNode;
}

const NonAuth: FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen bg-primary">
      <div className="flex flex-col relative h-full flex-1 p-6">
        <div className="flex items-center justify-center">
          <Text styling="font-bold text-4xl text-white drop-shadow-xl">
            Career Hunt
          </Text>
        </div>
        {children}
      </div>
      <div className="flex-1 py-6 pr-6">
        <div className="relative z-20 rounded-2xl h-full bg-[#60B8D0] border border-primary px-12 py-10">
          <Text styling="z-20 absolute top-16 left-0 text-[45px] font-bold text-white ml-12 mt-10">
            Start your job seeking journey now!
          </Text>
          <img
            className="z-10 absolute opacity-100 bottom-0 right-0 w-full"
            src={Job}
            alt="image of a person"
          />
        </div>
      </div>
    </div>
  );
};

export default NonAuth;
