import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Text from "../components/atoms/Text";
import { RootState } from "../store";
import { BiUserCircle } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import Button from "../components/atoms/Button";
import { userLogout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const handleLogout =() => {
    dispatch(userLogout())
    navigate("/")
  }
  return (
    <div className="px-10 h-20 bg-white flex items-center justify-between">
      <Text styling="font-bold text-4xl text-primary drop-shadow-xl">
        Career Hunt
      </Text>
      <div className="flex items-center">
        <div className="flex items-center mr-10">
          <Text styling="text-xl mr-2">{userInfo?.username}</Text>
          <BiUserCircle size="40px" fill="#42A7C3" />
        </div>
        <Button onClick={handleLogout} buttonType="blue" classStyle="w-min px-4" disabled={false} icon={<FiLogOut />}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
