import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginType } from "../../type";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import FormLogin from "../molecules/FormLogin";

interface Props {
  data: LoginType;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (key: string, value: string) => void;
}

const LoginOrganisms: FC<Props> = ({ data, handleSubmit, handleChange }) => {
  const navigate = useNavigate()
  return (
    <div className="px-8 py-6 max-w-[420px] shadow-2xl rounded-xl bg-white">
      <div className="mb-4">
        <Text styling="text-3xl font-bold text-primary">Login</Text>
        <Text styling="">
          Login now and we'll search the best suited high paying jobs for you!
          What are you waiting for?
        </Text>
      </div>
      <FormLogin
        data={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Text styling="text-center mt-4">Don't have an account?</Text>

      <Button
        onClick={() => navigate("/register")}
        disabled={false}
        buttonType="white"
        classStyle="mt-4"
        icon={null}
      >
        Register
      </Button>
    </div>
  );
};

export default LoginOrganisms;
