import React from "react";

const UserGists = ({ userGists }) => {
  return (
    <div className="bg-red-800 overflow-auto">
      {userGists.map((gist, index) => (
        <div key={gist.id}>{gist.owner.login}</div>
      ))}
    </div>
  );
};

export default UserGists;
