import { Image, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const ResetPassword = (props: Props) => {
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
          <h1 className="text-xl font-semibold text-center">
            Đặt lại mật khẩu mới
          </h1>
          <div>
            <p>Mật khẩu</p>
            <Input.Password style={{ borderRadius: "10px" }} size="large" />
          </div>
          <div>
            <p>Nhập lại mật khẩu</p>
            <Input.Password style={{ borderRadius: "10px" }} size="large" />
          </div>
          <button
            onClick={() => navigate("/")}
            className="px-16 py-3 mx-auto mt-10 rounded-lg bg-orange-400 text-white font-semibold text-lg"
          >
            Xác nhận
          </button>
        </div>
      </div>
      <div className="w-3/5 flex justify-center items-center">
        <Image preview={false} src={require("../assets/Frame.png")} />
      </div>
    </div>
  );
};

export default ResetPassword;
