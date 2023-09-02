import React, { FC } from "react";
import { classes } from "./Layout.css";

export interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className={classes.root}>{children}</div>;
};

export { Layout };
