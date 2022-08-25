import { Image } from "antd";
import { FC, useEffect } from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { ImStack } from "react-icons/im";
import { RiSettingsLine } from "react-icons/ri";
import {
  BsColumnsGap,
  BsFileEarmarkBarGraph,
  BsBoxArrowRight,
} from "react-icons/bs";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
type Props = {};

const Sidebar: FC<Props> = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname !== "/dashboard") {
      document.getElementById("/")?.classList.remove("itemActive");
    }
  }, []);
  const handleActive = (id: string) => {
    const arr = document.getElementsByClassName("menuItems");
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      el.classList.remove("itemActive");
    }
    document.getElementById(id)?.classList.add("itemActive");
  };
  return (
    <div className="w-[15%] flex flex-col">
      <div className="my-10 mx-auto">
        <Image
          src={require("../../assets/Logo alta.png")}
          width="120px"
          preview={false}
          className="cursor-pointer"
          onClick={() => navigate("/dashboard")}
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col text-xl text-gray-500">
          <button
            onClick={() => {
              navigate("/dashboard");
              handleActive("dashboard");
            }}
            className="menuItems itemActive"
            id="dashboard"
          >
            <BsColumnsGap /> Dashboard
          </button>
          <button
            onClick={() => {
              navigate("/device");
              handleActive("device");
            }}
            className="menuItems"
            id="device"
          >
            <HiOutlineDesktopComputer /> Thiết bị
          </button>
          <button
            onClick={() => {
              navigate("/service");
              handleActive("service");
            }}
            className="menuItems"
            id="service"
          >
            <IoChatbubblesOutline /> Dịch Vụ
          </button>
          <button
            onClick={() => {
              navigate("/progression");
              handleActive("progression");
            }}
            className="menuItems"
            id="progression"
          >
            <ImStack /> Cấp số
          </button>
          <button
            onClick={() => {
              navigate("/report");
              handleActive("report");
            }}
            className="menuItems"
            id="report"
          >
            <BsFileEarmarkBarGraph /> Báo cáo
          </button>
          <button
            onClick={() => {
              //something here
            }}
            className="menuItems"
          >
            <RiSettingsLine /> Cài đặt hệ thống
          </button>
        </div>
        <div className="menuBtn">
          <BsBoxArrowRight className="text-2xl mx-3" />
          <button className="py-3 px-3 text-xl">Đăng xuất</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
