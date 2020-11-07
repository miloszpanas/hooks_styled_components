import React, { useState } from "react";
import { UserForm, Input, Text, Button } from "./styles/createUser";
import uuid from "react-uuid";

export const CreateUser = ({ addNewUser }) => {
  const initialState = {
    id: null,
    name: "",
    surname: "",
  };

  const [user, setUser] = useState(initialState);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onUserSubmit = (e) => {
    e.preventDefault();
    const { name, surname } = user;

    if (!name.length || !surname.length) return;

    const newUser = {
      id: uuid(),
      name,
      surname,
    };

    addNewUser(newUser);
    setUser(initialState);
  };

  return (
    <UserForm onSubmit={onUserSubmit}>
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
      <Button type="submit">Add</Button>
    </UserForm>
  );
};
