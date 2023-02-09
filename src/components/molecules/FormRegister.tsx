import React, { FC, useState } from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Text from '../atoms/Text'
import { AiOutlineUser } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { LoginType } from '../../type';

interface Props {
    data: LoginType;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (key: string, value: string) => void;
}

const FormRegister:FC <Props> = ({data, handleSubmit, handleChange}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Text styling="mb-2">Username</Text>
      <Input
        value={data.username}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("username", e.target.value)
        }
        icon={<AiOutlineUser size="20px" fill="#42A7C3" />}
        styling="mb-8"
        placeholder="Insert Username"
      />
      <Text styling="mb-2">Password</Text>
      <Input
        value={data.password}
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("password", e.target.value)
        }
        icon={<BsShieldLock size="20px" fill="#42A7C3" />}
        styling="mb-8"
        placeholder="Insert password"
      />
      <Button onClick={()=>{}} disabled={data.username === "" || data.password === ""} buttonType="blue" classStyle="" icon={null}>
        Register
      </Button>
    </form>
  )
}

export default FormRegister