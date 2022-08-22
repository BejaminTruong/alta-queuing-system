import { Image, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const ForgotPassword = (props: Props) => {
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
        <div className="flex flex-col gap-5 max-h-[300px] max-w-md mx-auto text-lg text-center">
          <h1 className="text-xl font-semibold">Đặt lại mật khẩu</h1>
          <p className="text-lg">
            Vui lòng nhập email để đặt lại mật khẩu của bạn *
          </p>
          <Input style={{ borderRadius: "10px", width: "90%", margin: "auto" }} size="large" />
          <div className="flex justify-between mt-10">
            <button onClick={()=> navigate("/")} className="px-16 py-2 mx-auto rounded-lg text-orange-400 border-orange-400 border font-semibold text-lg">
              Hủy
            </button>
            <button onClick={()=> navigate("/resetpassword")} className="px-16 py-3 mx-auto rounded-lg bg-orange-400 text-white font-semibold text-lg">
              Tiếp tục
            </button>
          </div>
        </div>
      </div>
      <div className="w-3/5 flex justify-center items-center">
        <Image preview={false} src={require("../assets/Frame.png")} />
      </div>
    </div>
  );
};

export default ForgotPassword;
