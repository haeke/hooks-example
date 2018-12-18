import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResourceList from "./ResourceList";
import UserList from "./UserList";
import Weather from "./Weather";

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
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              const list = (
                <div>
                  <button onClick={() => handlePosts("posts")}>Posts</button>
                  <button onClick={() => handleTodos("todos")}>Todos</button>
                  <UserList resource="/users" />
                  <ResourceList resource={resource} />
                </div>
              );
              return list;
            }}
          />
          <Route exact path="/weather" component={Weather} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
