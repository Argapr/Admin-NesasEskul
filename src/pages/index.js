import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/sidebar/index";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow bg-[#2F2D2D] m-5 rounded-xl">
        <div className="p-8">
          <p className="font-semibold text-3xl text-[#d8d4d4]">Dashboard</p>
          <div className="w-[6rem] h-1 rounded-lg bg-[#d8d4d4]"></div>
        </div>
        <div className="mx-10 mt-5">
          <div class="grid grid-cols-2 gap-4">
            <div className="p-5 bg-[#d8d4d4] rounded-xl flex justify-between items-center">
              <div className="ms-3">
                <p className="text-[#000] text-3xl font-semibold">Galeri</p>
                <p className="text-[#fff] text-2xl">00</p>
              </div>
              <div></div>
            </div>
            <div className="p-5 bg-[#d8d4d4] rounded-xl flex justify-between items-center">
              <div className="ms-3">
                <p className="text-[#000] text-3xl font-semibold">Pengumuman</p>
                <p className="text-[#fff] text-2xl">00</p>
              </div>
              <div></div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-5">
            <div className="p-5 bg-[#d8d4d4] rounded-xl flex justify-between items-center">
              <div className="ms-3">
                <p className="text-[#000] text-3xl font-semibold">Profil</p>
                <p className="text-[#fff] text-2xl">00</p>
              </div>
              <div></div>
            </div>
            <div className="p-5 bg-[#d8d4d4] rounded-xl flex justify-between items-center">
              <div className="ms-3">
                <p className="text-[#000] text-3xl font-semibold">Jadwal</p>
                <p className="text-[#fff] text-2xl">00</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="p-[10rem] bg-[#d8d4d4] m-10 rounded-xl flex justify-center items-center flex-col">yarn build</div>
      </div>
    </div>
  );
};

export default Dashboard;
