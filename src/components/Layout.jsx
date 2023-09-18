import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-very-dark-blue text-white px-6 py-20">
      {children}
    </div>
  );
};

export default Layout;
