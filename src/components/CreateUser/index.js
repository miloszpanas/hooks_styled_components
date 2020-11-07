import React, { useState } from "react";
import { UserForm, Input, Text } from "./styles/createUser";

export const CreateUser = () => {
  const initialState = {
    id: null,
    name: "",
    surname: "",
  };

  const [user, setUser] = useState(initialState);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <UserForm>
      <Text>Create new User</Text>
      <Input
        type="text"
        name="name"
        placeholder="name"
        value={user.name}
        onChange={onInputChange}
      />
      <Input
        type="text"
        name="surname"
        placeholder="surname"
        value={user.surname}
        onChange={onInputChange}
      />
    </UserForm>
  );
};
