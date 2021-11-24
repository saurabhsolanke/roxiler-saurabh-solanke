import React, { useState } from "react";
import TodoTable from "./component/TodoTable";
import UserTable from "./component/UserTable";

const App = () => {
  const [userId, setUserId] = useState(undefined);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2 className="display-4">Todos</h2>
          

          <TodoTable userId={userId} setUserId={setUserId} />
        </div>
        <div className="col">
          <h2 className="display-5">User Detail</h2>
          <UserTable userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default App;
