import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../components/sidebar/index";
import React, { useState } from "react";

const Galeri = () => {
  const [showOverlay, setShowOverlay] = useState(false); // State untuk menampilkan atau menyembunyikan overlay

  const handleAddPostClick = () => {
    setShowOverlay(true); // Menampilkan overlay ketika tombol "Tambah" diklik
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false); // Menyembunyikan overlay ketika tombol close di dalam overlay diklik
  };
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
        {/* table */}
        <div className="mx-10 mt-10 rounded-2xl h-[30rem] bg-[#f5f1f1]">
          <div className="h-[3rem] bg-[#524b4b] rounded-t-2xl flex justify-between items-center">
            <button className="ms-5 bg-[#e4d0d0] bg-opacity-20 w-[6rem] h-[2rem] rounded-lg text-[#d8d4d4] flex items-center justify-center" onClick={handleAddPostClick}>
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
            <div className="me-5">
              <input type="text" placeholder="Cari data" className="px-4 h-[2rem] w-[20rem] rounded-full focus:outline-none focus:text-[#fff] bg-[#e4d0d0] bg-opacity-20" />
            </div>
          </div>
          <div className="m-5">
            <div className="rounded-2xl h-[25rem] bg-[#f5f1f1] overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-2 py-2">No</th>
                    <th className="px-4 py-2">Nama Eskul</th>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Pembimbing</th>
                    <th className="px-4 py-2">Jumlah Anggota</th>
                    <th className="px-4 py-2 w-[30rem]">Deskripsi Eskul</th>
                    <th className="px-4 py-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-2 py-2 font-bold text-center">1</td>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">30</td>
                    <td className="border px-4 py-2">Aji Setiawan</td>
                    <td className="border px-4 py-2">16/09</td>
                    <td className="border px-4 py-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </td>
                    <td className="border py-2 flex justify-evenly items-center">
                      <button className="rounded-xl h-7 w-auto bg-[#E3E4A9] items-center flex justify-center">
                        <p className="m-5 text-[#edff47]">Edit</p>
                      </button>
                      <button className="rounded-xl h-7 w-auto bg-[#E4A9A9] items-center flex justify-center">
                        <p className="m-5 text-[#EA4444]">Delete</p>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-[#e7e5e5]">
                    <td className="border px-2 py-2 font-bold text-center">2</td>
                    <td className="border px-4 py-2">Jane Doe</td>
                    <td className="border px-4 py-2">25</td>
                    <td className="border px-4 py-2">Aji Setiawan</td>
                    <td className="border px-4 py-2">16/09</td>
                    <td className="border px-4 py-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </td>
                    <td className="border py-2 flex justify-evenly items-center">
                      <button className="rounded-xl h-7 w-auto bg-[#E3E4A9] items-center flex justify-center">
                        <p className="m-5 text-[#edff47]">Edit</p>
                      </button>
                      <button className="rounded-xl h-7 w-auto bg-[#E4A9A9] items-center flex justify-center">
                        <p className="m-5 text-[#EA4444]">Delete</p>
                      </button>
                    </td>
                  </tr>
                  <tr className="items-center">
                    <td className="border px-2 py-2 font-bold text-center">3</td>
                    <td className="border px-4 py-2">Alice</td>
                    <td className="border px-4 py-2">35</td>
                    <td className="border px-4 py-2">Aji Setiawan</td>
                    <td className="border px-4 py-2">16/09</td>
                    <td className="border px-4 py-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </td>
                    <td className="border h-auto py-2 flex justify-evenly items-center">
                      <button className="rounded-xl h-7 w-auto bg-[#E3E4A9] items-center flex justify-center">
                        <p className="m-5 text-[#edff47]">Edit</p>
                      </button>
                      <button className="rounded-xl h-7 w-auto bg-[#E4A9A9] items-center flex justify-center">
                        <p className="m-5 text-[#EA4444]">Delete</p>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showOverlay && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-[70rem] h-[35rem]">
            {/* tombol untuk menutup overflay */}
            <button type="button" className="rounded-full h-10 w-10 bg-[#f1eeee] items-center flex justify-center" onClick={handleCloseOverlay}>
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="w-5">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#000000"
                    d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                  ></path>
                </g>
              </svg>
            </button>
            <p className="text-[#000] font-semibold text-3xl ms-10">Post Profil</p>
            <form className="h-[22rem] w-full border border-[#a8a0a0] rounded-xl mt-3">
              <div className="grid grid-cols-2 gap-4 mx-10 mt-5">
                <div>
                  <label htmlFor="nama">Nama Eskul</label>
                  <input id="nama" type="text" className="h-[3rem] rounded-xl border border-[#a8a0a0] w-full focus:outline-none px-4" />
                </div>
                <div>
                  <label htmlFor="nama-pembimbing">Nama Pembimbing</label>
                  <input id="nama-pembimbing" type="text" className="h-[3rem] rounded-xl border border-[#a8a0a0] w-full focus:outline-none px-4" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mx-10 mt-5">
                <div>
                  <label htmlFor="img">Image Eskul</label>
                  <input type="file" id="img" className="h-[3rem] rounded-xl border border-[#a8a0a0] w-full focus:outline-none px-4 py-2 flex items-center justify-center bg-white text-[#333] cursor-pointer" />
                </div>
                <div>
                  <label htmlFor="anggota">Jumlah Anggota</label>
                  <input type="number" name="jmlAnggota" min={1} max={150} className="h-[3rem] rounded-xl border border-[#a8a0a0] w-full focus:outline-none px-4" />
                </div>
              </div>
              <div className="mx-10 mt-5">
                <label htmlFor="deskripsi">Deskripsi Eskul</label>
                <textarea id="deskripsi" className="h-[6rem] rounded-lg border border-[#a8a0a0] w-full focus:outline-none px-4"></textarea>
              </div>
            </form>
            <button className="h-10 w-[5rem] mt-5 rounded-xl bg-gray-500 text-[#fff]">Post</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeri;
