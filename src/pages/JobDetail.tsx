import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setError, setLoading, userLogout } from "../features/authSlice";
import { RootState } from "../store";
import { PositionData } from "../type";
import parse from "html-react-parser";
import Text from "../components/atoms/Text";
import Button from "../components/atoms/Button";
import { MdOutlineArrowBackIos } from "react-icons/md";

const JobDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { userToken } = useSelector((state: RootState) => state.auth);
  const [data, setData] = useState<PositionData>({
    company: "",
    companyLogo: "",
    companyUrl: "",
    createdAt: "",
    description: "",
    howToApply: "",
    id: "",
    location: "",
    title: "",
    type: "",
    url: "",
  });

  const getJobDetail = async () => {
    dispatch(setLoading(true));
    const url = import.meta.env.VITE_BASE_URL;
    try {
      const result = await axios({
        url: `${url}/api/position/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      });
      if (result.status === 200) {
        setData(result.data.result);
        dispatch(setLoading(false));
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      if (error.response.status === 401) {
        alert(error.message)
        dispatch(userLogout())
        navigate("/")

        return
      }
      dispatch(setError(error.response.data.message));
      alert(error.response.data.message)
    }
  };

  useEffect(() => {
    getJobDetail();
  }, []);
  return (
    <div className=" ">
      <Button
        buttonType="primaryWhite"
        classStyle="px-4 w-32 mb-8"
        disabled={false}
        icon={<MdOutlineArrowBackIos />}
        onClick={() => navigate("/jobs")}
      >
        Back
      </Button>
      <div className="flex px-8 py-6 items-start flex-col justify-between h-full rounded-xl shadow-2xl bg-white">
        <div className="mb-4 flex items-center">
          <img className="mr-6" src={data.companyLogo} />
          <div>
            <Text styling="text-2xl font-bold">{data.title}</Text>
            <Text styling="text-xl font-semibold">{data.company}</Text>
          </div>
        </div>
        <div className="mb-4">
          <Text styling="text-xl font-semibold mb-4">Description</Text>
          <Text styling="">{parse(data.description)}</Text>
        </div>
        <div>
          <Text styling="text-xl font-semibold mb-4">How To Apply</Text>
          <Text styling="">{parse(data.howToApply)}</Text>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
