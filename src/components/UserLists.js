import React, { useEffect, useState } from "react";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getAllUser() {
      let path = "https://reqres.in/api/users?page=1";
      let data = await fetch(path, {
        method: "GET"
      });
      let response = await data.json();
      if (response.hasOwnProperty("data")) {
        let sortedUser = response.data;
        sortedUser = sortedUser.sort((a, b) => {
          let fn_a = a.first_name.toLowerCase();
          let fn_b = b.first_name.toLowerCase();
          if (fn_b < fn_a) {
            return -1;
          }
          return 1;
        });
        setUsers(sortedUser);
      } else {
        setUsers([]);
      }
    }
    getAllUser();
  }, []);
  return (
    <>
      <h2>UserLists</h2>
      {users?.map((userData, i) => (
        <User
          key={i}
          first_name={userData?.first_name}
          last_name={userData?.last_name}
        />
      ))}
    </>
  );
};

export default UserList;
