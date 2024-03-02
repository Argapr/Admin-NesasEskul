import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../components/sidebar/index";

const Profil = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow bg-[#2F2D2D] m-5 rounded-xl">
        <div className="p-8">
          <p className="font-semibold text-3xl text-[#d8d4d4]">Profil</p>
          <div className="w-12 h-1 rounded-lg bg-[#d8d4d4]"></div>
        </div>
        <div className="p-5 rounded-xl bg-[#524b4b] mt-5 mx-10 flex justify-center items-center flex-col">
          <p className="text-[#fff]">Total</p>
          <p className="text-[#fff] text-5xl">00</p>
        </div>
        <div className="flex justify-between items-center p-2 mx-10 mt-10 rounded-xl">
          <button className="border border-[#d8d4d4] w-[5rem] rounded-lg text-[#d8d4d4] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M4 12H20M12 4V20" stroke="#d8d4d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
              </g>
            </svg>
            <p className="ms-1">Post</p>
          </button>
          <button></button>
        </div>
        <div className="mx-10">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Nama</th>
                  <th className="px-4 py-2">Usia</th>
                  <th className="px-4 py-2">Kota</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">John Doe</td>
                  <td className="border px-4 py-2">30</td>
                  <td className="border px-4 py-2">Jakarta</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Jane Doe</td>
                  <td className="border px-4 py-2">25</td>
                  <td className="border px-4 py-2">Bandung</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">3</td>
                  <td className="border px-4 py-2">Alice</td>
                  <td className="border px-4 py-2">35</td>
                  <td className="border px-4 py-2">Surabaya</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
