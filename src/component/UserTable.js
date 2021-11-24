import axios from "axios";
import React, { useEffect, useState } from "react";

const UserTable = ({ userId,todos}) => {
  const [userData, setUserData] = useState(undefined);
  const [particularTodos,setParticularTodos] = useState(undefined)
  useEffect(() => {
    if (userId !== undefined && (userData===undefined || userData.id!==userId)) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((data) => {setUserData(data.data)
          console.log(todos)
        let a = todos.filter(x=>parseInt(x.userId)===parseInt(userId))
          setParticularTodos(a)
        })
        .catch((err) => console.log(err));
    }
  });

  return (
    
    <div className="container mt-5">
      {userData !== undefined ?<div>
        <table className="table table-bordered">
          <tr>
            <th scope="col">user id</th>
            <th scope="col">name</th>
            <th scope="col">Email</th>
          </tr>
          <tbody>
            <tr>
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
        <div className="container mt-5 border">
          <h3>Todos by UserId "  {userData.id} "</h3>
        {particularTodos !== undefined && particularTodos.map(x=><p>{x.title}</p>)}
        </div>

      </div> : <div>loading</div>}
    </div>
  );
};

export default UserTable;
