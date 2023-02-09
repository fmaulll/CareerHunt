import React, { FC, Fragment } from "react";
import { PositionData } from "../../type";
import Text from "../atoms/Text";
import { TbBuilding } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { BiBriefcase } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

interface Props {
  data: PositionData[];
}

const JobsTable: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex-auto h-full overflow-y-scroll bg-white shadow-2xl rounded-xl">
      {data.length > 0 ? (
        <Fragment>
          {data.map((position, index) => (
            <div
              onClick={() => navigate(`/jobs/detail/${position.id}`)}
              className={`${
                data.length - 1 === index
                  ? "border-none"
                  : "border-b-primary border-b"
              } p-6 hover:bg-gray-300 duration-200 cursor-pointer flex items-center`}
              key={index}
            >
              <img className="mr-8 w-30" src={position.companyLogo} />
              <div>
                <Text styling="font-bold">{position.title}</Text>
                <Text styling="text-xs flex items-center mt-2">
                  <TbBuilding className="mr-2" />
                  {position.company}
                </Text>
                <Text styling="text-xs flex items-center">
                  <GrLocation className="mr-2" />
                  {position.location}
                </Text>
                <Text styling="text-xs flex items-center">
                  <BiBriefcase className="mr-2" />
                  {position.type}
                </Text>
              </div>
            </div>
          ))}
        </Fragment>
      ) : (
        <Text styling="w-full h-full flex items-center justify-center">
          No Content
        </Text>
      )}
    </div>
  );
};

export default JobsTable;
