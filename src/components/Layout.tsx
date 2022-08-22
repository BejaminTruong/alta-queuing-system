import { Image } from "antd";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import Sidebar from "./Sidebar";
type Props = {};

const Layout: FC<Props> = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex justify-center items-center gap-5 absolute top-5 right-20">
        <div className="rounded-full bg-orange-100 p-2">
          <FaBell className="text-orange-400 text-xl" />
        </div>
        <div className="flex gap-3">
          <Image
            src={require("../assets/avatar.png")}
            width="50px"
            height="50px"
            className="rounded-full"
          />
          <div>
            <p>Xin chào</p>
            <p className="text-lg font-semibold">Lê Quỳnh Ái Vân</p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
