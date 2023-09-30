import React from "react";

const User = ({ first_name, last_name }) => {
  return (
    <p>
      {first_name} {last_name}
    </p>
  );
};

export default User;
