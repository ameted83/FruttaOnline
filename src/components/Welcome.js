import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const arrayUsers = useSelector((state) => state.user.users);
  console.log(arrayUsers);
  return (
    <div>
      <h2>Welcome{arrayUsers[0]?.name}</h2>
    </div>
  );
};

export default Welcome;
