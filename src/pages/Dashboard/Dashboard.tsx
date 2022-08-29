import React, { FC } from "react";
import { BsCalendar, BsCalendarCheck, BsBookmarkStar } from "react-icons/bs";
import { BiUserVoice } from "react-icons/bi";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiFillCaretDown,
} from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { ImStack } from "react-icons/im";
import "./Dashboard.css";
type Props = {};

const Dashboard: FC<Props> = () => {
  return (
    <div className="h-full flex">
      <div className="w-[70%]">
        <h1 className="text-orange-400 font-semibold text-2xl">Dashboard</h1>
        <h1 className="text-orange-500 font-semibold text-3xl mt-24">
          Biểu đồ cấp số
        </h1>
        <div className="flex flex-col gap-5 h-[80%]">
          <div className="flex gap-5 pl-3 pr-10 pt-5">
            <div className="middleItems">
              <div className="flex gap-10">
                <div className="middleIcons bg-blue-100 text-blue-400">
                  <BsCalendar />
                </div>
                <p className="middleStats">Số thứ tự đã cấp</p>
              </div>
              <div className="middleStatParent">
                <p className="text-4xl font-semibold">4.221</p>
                <div className="middleStatBadge bg-orange-100 text-orange-400">
                  <AiOutlineArrowUp />
                  <p>32,41%</p>
                </div>
              </div>
            </div>
            <div className="middleItems">
              <div className="flex gap-10">
                <div className="middleIcons bg-green-100 text-green-400">
                  <BsCalendarCheck />
                </div>
                <p className="middleStats">Số thứ tự đang sử dụng</p>
              </div>
              <div className="middleStatParent">
                <p className="text-4xl font-semibold">3.721</p>
                <div className="middleStatBadge bg-red-100 text-red-400">
                  <AiOutlineArrowDown />
                  <p>32,41%</p>
                </div>
              </div>
            </div>
            <div className="middleItems">
              <div className="flex gap-10">
                <div className="middleIcons bg-orange-100 text-orange-400">
                  <BiUserVoice />
                </div>
                <p className="middleStats">Số thứ tự đang chờ</p>
              </div>
              <div className="middleStatParent">
                <p className="text-4xl font-semibold">468</p>
                <div className="middleStatBadge bg-orange-100 text-orange-400">
                  <AiOutlineArrowUp />
                  <p>56,41%</p>
                </div>
              </div>
            </div>
            <div className="middleItems">
              <div className="flex gap-10">
                <div className="middleIcons bg-red-100 text-red-400">
                  <BsBookmarkStar />
                </div>
                <p className="middleStats">Số thứ tự đã bỏ qua</p>
              </div>
              <div className="middleStatParent">
                <p className="text-4xl font-semibold">32</p>
                <div className="middleStatBadge bg-red-100 text-red-400">
                  <AiOutlineArrowUp />
                  <p>22,41%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-full rounded-lg mr-8 p-5">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">
                  Bảng thống kê theo ngày
                </h1>
                <p className="text-gray-500">Tháng 11/2021</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-lg font-semibold">Xem theo</p>
                <div className="flex items-center p-3 gap-10 border-gray-300 border-2 rounded-lg">
                  <p className="text-lg text-gray-500">Ngày</p>
                  <AiFillCaretDown className="text-orange-500 text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] bg-white -mt-5 p-5">
        <h1 className="text-orange-500 font-semibold text-3xl mt-[130px]">
          Tổng quan
        </h1>
        <div className="pt-5">
          <div className="flex flex-col gap-5">
            <div className="itemsRight">
              <div className="flex gap-2 w-1/2 items-center">
                <div className="circleRight border-orange-500">90%</div>
                <div>
                  <p className="text-3xl font-bold">4.221</p>
                  <div className="flexClasses text-orange-500">
                    <HiOutlineDesktopComputer />
                    <p>Thiết bị</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-1/2">
                <div className="flex items-center">
                  <div className="w-2/3 flexClasses">
                    <span className="itemDot bg-orange-300"></span>
                    <p className="text-gray-500">Đang hoạt động</p>
                  </div>
                  <span className="itemRightNumbers text-orange-500">
                    3.799
                  </span>
                </div>
                <div className="flexClasses">
                  <div className="w-2/3 flexClasses">
                    <span className="itemDot bg-gray-500"></span>
                    <p className="text-gray-500">Ngưng hoạt động</p>
                  </div>
                  <span className="itemRightNumbers text-orange-500">422</span>
                </div>
              </div>
            </div>
            <div className="itemsRight">
              <div className="flex gap-2 w-1/2 items-center">
                <div className="circleRight border-blue-500">76%</div>
                <div>
                  <p className="text-3xl font-bold">276</p>
                  <div className="flexClasses text-blue-500">
                    <IoChatbubblesOutline />
                    <p>Dịch vụ</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-1/2">
                <div className="flexClasses">
                  <div className="w-2/3 flexClasses">
                    <span className="itemDot bg-blue-300"></span>
                    <p className="text-gray-500">Đang hoạt động</p>
                  </div>
                  <span className="itemRightNumbers text-blue-500">210</span>
                </div>
                <div className="flexClasses">
                  <div className="w-2/3 flexClasses">
                    <span className="itemDot bg-gray-500"></span>
                    <p className="text-gray-500">Ngưng hoạt động</p>
                  </div>
                  <span className="itemRightNumbers text-blue-500">66</span>
                </div>
              </div>
            </div>
            <div className="itemsRight">
              <div className="flex gap-2 w-1/2 items-center">
                <div className="circleRight border-green-500">86%</div>
                <div>
                  <p className="text-3xl font-bold">4.221</p>
                  <div className="flexClasses text-green-500">
                    <ImStack />
                    <p>Thiết bị</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <div className="flexClasses">
                  <div className="w-2/3 flexClasses">
                    <span className="itemDot bg-green-300"></span>
                    <p className="text-gray-500">Đang hoạt động</p>
                  </div>
                  <span className="itemRightNumbers text-green-500">3.721</span>
                </div>
                <div className="flexClasses">
                  <div className="w-2/3 flexClasses">
                    <span className="itemDot bg-gray-500"></span>
                    <p className="text-gray-500">Ngưng hoạt động</p>
                  </div>
                  <span className="itemRightNumbers text-green-500">486</span>
                </div>
                <div className="flexClasses">
                  <div className="w-2/3 flexClasses">
                    <span className="itemDot bg-orange-600"></span>
                    <p className="text-gray-500">Bỏ qua</p>
                  </div>
                  <span className="itemRightNumbers text-green-500">32</span>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
