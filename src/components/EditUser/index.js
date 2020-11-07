import React, { useState, useEffect } from 'react';
import { UserForm, Text, Input, Button } from "../CreateUser/styles/createUser";

export const EditUser = ({ updateEditedUser, clickedUser }) => {
  const [user, setUser] = useState(clickedUser);

  useEffect(() => {
    setUser(clickedUser)
  }, [clickedUser])

  const onInputChange = e => {
    const { target: { name, value } } = e;
    setUser({ ...user, [name]: value });
  }

  const onUserSubmit = e => {
    e.preventDefault();
    updateEditedUser(user.id, user);
  }

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
      <Button type="submit">Edit</Button>
    </UserForm>
  )
}
