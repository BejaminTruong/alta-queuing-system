import { Image } from "antd";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="w-2/12 flex flex-col items-center">
      <Image src={require("../assets/Logo alta.png")} width="80px" className="my-10"/>
      <div className="flex flex-col gap-10 text-xl">
        <div>Dashboard</div>
        <div>Thiết bị</div>
        <div>Dịch Vụ</div>
        <div>Cấp số </div>
        <div>Báo cáo</div>
        <div>Cài đặt hệ thống</div>
      </div>
    </div>
  );
};

export default Sidebar;
