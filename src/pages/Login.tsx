import { Image, Input } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
type Props = {};

const Login: FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full">
      <div className="bg-[#F6F6F6] w-2/5">
        <div className="flex justify-center my-20">
          <Image
            onClick={() => navigate("/")}
            preview={false}
            width={180}
            src={require("../assets/Logo alta.png")}
          />
        </div>
        <div className="flex flex-col gap-5 max-h-[300px] max-w-lg mx-auto text-lg">
          <div>
            <p>Tên đăng nhập *</p>
            <Input style={{borderRadius: "10px"}} size="large"/>
          </div>
          <div>
            <p>Mật khẩu *</p>
            <Input.Password style={{borderRadius: "10px"}} size="large"/>
          </div>
          <p onClick={() => navigate("/forgotpassword")} className="text-red-500 cursor-pointer">Quên mật khẩu?</p>
          <button onClick={() => navigate("/dashboard")} className="px-12 py-3 mx-auto rounded-lg bg-orange-400 text-white font-semibold text-lg">
            Đăng nhập
          </button>
        </div>
      </div>
      <div className="w-3/5 flex justify-center items-center">
        <Image preview={false} src={require("../assets/Group 341.png")} />
        <div className="absolute right-10 bottom-[40%]">
          <h1 className="text-orange-500 text-4xl">Hệ thống</h1>
          <h1 className="text-orange-500 font-bold text-5xl">QUẢN LÝ XẾP HÀNG</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
