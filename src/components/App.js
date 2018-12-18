import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  // resource is the state value - setResource is the call back that will change resource.
  const [resource, setResource] = useState("/todos");
  const handlePosts = post => {
    setResource(post);
  };

  const handleTodos = todo => {
    setResource(todo);
  };
  return (
    <div>
      <button onClick={() => handlePosts("posts")}>Posts</button>
      <button onClick={() => handleTodos("todos")}>Todos</button>
      <UserList resource="/users" />
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
