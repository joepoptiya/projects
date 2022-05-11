import React, { useEffect } from "react";
import axios from "axios";

export default function ListOfTodo({ token }) {
  const service_base_url = process.env.REACT_APP_SERVICE_BASE_URL;
  useEffect(() => {
    console.log("ListOfTodo");
    if (token) {
      fetchData(token);
    }
  }, [token]);

  const fetchData = async (token) => {
    console.log("fetchData");
    const res = await axios.get(`${service_base_url}/api/v1/todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
  };

  return (
    <div>
      <h1>List Of Todos</h1>
    </div>
  );
}
