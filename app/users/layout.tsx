import React from "react";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Page</h1>
      {children}
    </div>
  );
};

export default UserLayout;
