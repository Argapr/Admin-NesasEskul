import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../components/sidebar/index";
import React, { useState, useEffect } from "react";
import { db } from "../../components/firebase/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "Profil"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

async function addDataToFirestore(name, image, pembimbing, jumlah, deskripsi) {
  try {
    const docRef = await addDoc(collection(db, "Profil"), {
      name: name,
      image: image,
      pembimbing: pembimbing,
      jumlah: jumlah,
      deskripsi: deskripsi,
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    return false;
  }
}

const Profil = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [pembimbing, setPembimbing] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [profilData, setProfilData] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setProfilData(data.sort((a, b) => a.name.localeCompare(b.name))); // Sort data by name
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFirestore(name, image, pembimbing, jumlah, deskripsi);
    if (added) {
      setName("");
      setImage("");
      setPembimbing("");
      setJumlah("");
      setDeskripsi("");
      setShowAlert(true);
    }
  };

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
          <p className="text-[#fff] text-5xl">{profilData.length.toString().padStart(2, "0")}</p>
        </div>
        {/* table */}
        <div className="mx-10 mt-10 rounded-2xl h-[28rem] bg-[#f5f1f1]">
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
            <div className="rounded-2xl h-[22rem] bg-[#f5f1f1] overflow-x-auto">
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
                  {profilData.map((profil, index) => (
                    <tr key={profil.id} className={index % 2 === 0 ? "bg-transparent" : "bg-gray-200"}>
                      <td className="border px-2 py-2 font-bold text-center">{index + 1}</td>
                      <td className="border px-4 py-2">{profil.name}</td>
                      <td className="border px-4 py-2">{profil.image}</td>
                      <td className="border px-4 py-2">{profil.pembimbing}</td>
                      <td className="border px-4 py-2">{profil.jumlah}</td>
                      <td className="border px-4 py-2">{profil.deskripsi}</td>
                      <td className="border py-2 flex justify-evenly items-center">
                        <button className="rounded-xl h-7 w-auto bg-[#E3E4A9] items-center flex justify-center">
                          <p className="m-5 text-[#ecff40]">Edit</p>
                        </button>
                        <button className="rounded-xl h-7 w-auto bg-[#E4A9A9] items-center flex justify-center">
                          <p className="m-5 text-[#EA4444]">Delete</p>
                        </button>
                      </td>
                    </tr>
                  ))}
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
            <form className="h-[25rem] w-full border border-[#a8a0a0] rounded-xl mt-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mx-10 mt-5">
                <div>
                  <label htmlFor="nama">Nama Eskul</label>
                  <input id="nama" type="text" className="h-[3rem] rounded-xl border border-[#a8a0a0] w-full focus:outline-none px-4" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <label htmlFor="nama-pembimbing">Nama Pembimbing</label>
                  <input id="nama-pembimbing" type="text" className="h-[3rem] rounded-xl border border-[#a8a0a0] w-full focus:outline-none px-4" value={pembimbing} onChange={(e) => setPembimbing(e.target.value)} required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mx-10 mt-5">
                <div>
                  <label htmlFor="img">Image Eskul</label>
                  <input
                    type="file"
                    id="img"
                    className="h-[3rem] rounded-xl border border-[#a8a0a0] w-full focus:outline-none px-4 py-2 flex items-center justify-center bg-white text-[#333] cursor-pointer"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="anggota">Jumlah Anggota</label>
                  <input type="number" name="jmlAnggota" min={1} max={150} className="h-[3rem] rounded-xl border border-[#a8a0a0] w-full focus:outline-none px-4" value={jumlah} onChange={(e) => setJumlah(e.target.value)} required />
                </div>
              </div>
              <div className="mx-10 mt-5">
                <label htmlFor="deskripsi">Deskripsi Eskul</label>
                <textarea id="deskripsi" className="h-[6rem] rounded-lg border border-[#a8a0a0] w-full focus:outline-none px-4" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} required></textarea>
              </div>
              <div className="mx-10 justify-start flex">
                <button className="h-10 w-[5rem] mt-4 rounded-xl bg-gray-500 text-[#fff]" type="submit">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#dfd5d5] rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Success!</h2>
              <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowAlert(false)}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-700 mt-2">Data berhasil ditambahkan!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
