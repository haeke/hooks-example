import React from "react";
import { useResources } from "../hooks";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <div>
      <h1>Resource:</h1>
      {resource}
      <ul>
        {resources.map(record => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
