import axios from "axios";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginOrganisms from "../components/organisms/LoginOrganisms";
import { setError, setLoading, userLogin } from "../features/authSlice";
import { LoginType } from "../type";

const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataRequest, setDataRequest] = useState<LoginType>({
    username: "",
    password: "",
  });

  const handleChange = (key: string, value: string) => {
    setDataRequest((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const url = import.meta.env.VITE_BASE_URL;
    try {
      const result = await axios({
        url: `${url}/api/login`,
        method: "POST",
        data: dataRequest,
      });
      if (result.status === 200) {
        dispatch(userLogin(result.data));
        dispatch(setLoading(false));
        navigate("/jobs");
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setError(error?.response.data.message));
      alert(error.response.data.message)
    }
  };

  return (
    <div className="flex-auto h-full flex items-center justify-center">
      <LoginOrganisms data={dataRequest} handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
};

export default Login;
