import { CameraOutlined } from "@ant-design/icons";
import { Col, Image, Input, Row } from "antd";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="w-[90%]">
      <h1 className="text-orange-400 font-semibold text-2xl">
        Thông tin cá nhân
      </h1>
      <div className="mt-[10%] bg-white p-8 pb-16 rounded-2xl flex shadow-sm">
        <div className="relative w-[400px]">
          <Image
            src={require("../../assets/avatar.png")}
            className="rounded-full w-[300px] h-[300px]"
          />
          <div
            className="flex justify-center items-center 
            rounded-full bg-orange-500 text-white w-[50px] 
            h-[50px] text-3xl border-white border-2 absolute bottom-8 left-[200px]"
          >
            <CameraOutlined />
          </div>
          <p className="text-2xl font-semibold text-center">Lê Quỳnh Ái Vân</p>
        </div>
        <div className="flex justify-center items-center pl-10 text-xl font-semibold">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <p className="mb-3">Tên người dùng</p>
              <Input
                placeholder="Lê Quỳnh Ái Vân"
                disabled
                className="rounded-lg py-3 max-w-lg"
              />
            </Col>
            <Col span={12}>
              <p className="mb-3">Tên đăng nhập</p>
              <Input
                placeholder="lequynhaivan01"
                disabled
                className="rounded-lg py-3 max-w-lg"
              />
            </Col>

            <Col span={12}>
              <p className="mb-3">Số điện thoại</p>
              <Input
                placeholder="0767375921"
                disabled
                className="rounded-lg py-3 max-w-lg"
              />
            </Col>
            <Col span={12}>
              <p className="mb-3">Mật khẩu</p>
              <Input
                placeholder="311940211"
                disabled
                className="rounded-lg py-3 max-w-lg"
              />
            </Col>
            <Col span={12}>
              <p className="mb-3">Email</p>
              <Input
                placeholder="adminSS01@domain.com"
                disabled
                className="rounded-lg py-3 max-w-lg"
              />
            </Col>
            <Col span={12}>
              <p className="mb-3">Vai trò</p>
              <Input
                placeholder="Kế toán"
                disabled
                className="rounded-lg py-3 max-w-lg"
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Profile;
