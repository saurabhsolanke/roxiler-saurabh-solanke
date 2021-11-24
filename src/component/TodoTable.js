import axios from "axios";
import React, { useEffect, useState } from "react";

const TodoTable = ({userId,setUserId}) => {
  const [todos, setTodos] = useState(undefined);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((data) => {setTodos(data.data);
      })
      .catch((err) => console.log(err));
  },[]);
  return (
    <div>
      {todos ? (
        <table className="table table-bordered">
          <tr>
            <th scope="col">ToDo ID</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
          {todos.map((todo) => 
          <tbody>
             <tr>
              <td scope="row">{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Complete" : "Incomplete"}</td>
              <td><button className="btn btn-info btn-sm" onClick={()=>setUserId(todo.userId)}>View User</button></td>
            </tr>
          </tbody>
           
          )}
        </table>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default TodoTable;
