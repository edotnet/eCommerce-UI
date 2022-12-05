import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="container mx-auto p-4">{children}</main>;
};

export default Layout;
