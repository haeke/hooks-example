import React from "react";
import PropTypes from "prop-types";
import { useResources } from "../hooks";

const UserList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <div>
      <ul>
        {resources.map(source => (
          <li key={source.id}>{source.name}</li>
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  resource: PropTypes.string.isRequired
};

export default UserList;
