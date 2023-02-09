import React, { FC, useState } from "react";
import Input from "../atoms/Input";
import { MdTitle } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import { PositionRequest } from "../../type";
import Text from "../atoms/Text";

interface Props {
  handleFilter: (dataRequest: PositionRequest) => void;
  handleReset: () => void;
}

const Filter: FC<Props> = ({
  handleFilter,
  handleReset,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [dataRequest, setDataRequest] = useState<PositionRequest>({
    description: "",
    location: "",
    fullTime: "",
  });

  const handleClickApply = () => {
    setIsActive(true);
    handleFilter(dataRequest);
  };

  const handleClickReset = () => {
    setIsActive(false);
    setDataRequest({
      description: "",
      location: "",
      fullTime: "",
    });
    handleReset();
  };

  const handleChange = (key: string, value: string) => {
    setDataRequest((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-2xl rounded-xl p-4 w-full">
      <div className="flex items-center">
        <Input
          value={dataRequest.description}
          icon={<MdTitle />}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("description", e.target.value)
          }
          placeholder="Title"
          styling="w-64 py-2 rounded-lg"
        />
        <Input
          value={dataRequest.location}
          icon={<GrLocation />}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("location", e.target.value)
          }
          placeholder="Location"
          styling="w-64 ml-4 py-2 rounded-lg mr-4"
        />
        <div className="flex items-center">
            <Text styling="mr-4">Full Time :</Text>
        <Checkbox
          checked={dataRequest.fullTime}
          handleClick={() =>
            handleChange("fullTime", dataRequest.fullTime ? "" : "true")
          }
        />
        </div>
      </div>
      <div className="flex">
        {isActive && (
          <Button
            classStyle="px-4 mr-4"
            buttonType="white"
            disabled={false}
            icon={null}
            onClick={handleClickReset}
          >
            Reset
          </Button>
        )}
        <Button
          classStyle="px-4"
          buttonType="blue"
          disabled={false}
          icon={null}
          onClick={handleClickApply}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default Filter;
