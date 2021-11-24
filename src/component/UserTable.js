import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoTable from "./TodoTable";

const UserTable = ({ userId}) => {
  const [userData, setUserData] = useState(undefined);
  const [todos, setTodos] = useState(undefined);
  useEffect(() => {
    if (userId !== undefined) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((data) => setUserData(data.data))
        .catch((err) => console.log(err));
    }
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((data) => {setTodos(data.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    
    <div className="container mt-5">
      {userData !== undefined ?<div>
        
        <table className="table table-bordered">
          <tr>
            <th scope="col">Todo ID</th>
            <th scope="col">Todo Title</th>

            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">Email</th>
          </tr>
          
          <tbody>
            
            <tr>
              <td>
                {/* {todo.id} */}
              </td>
              <td>
                {/* {todo.data.title} */}
              </td>
              <td>
                {userData.id}
              </td>
              <td>
                {userData.name}
              </td>
              <td>
                {userData.email}
              </td>
            </tr>
          </tbody>
        </table>
      </div> : <div>loading</div>}
    </div>
  );
};

export default UserTable;
