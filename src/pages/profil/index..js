"use client";
import Sidebar from "@/components/sidebar/index";
import React, { useState, useEffect } from "react";
import { db } from "../../components/firebase/firebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "Profil"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

async function addDataToFirestore(name, imageUrl, pembimbing, jumlah, deskripsi) {
  try {
    const docRef = await addDoc(collection(db, "Profil"), {
      name: name,
      image: imageUrl,
      pembimbing: pembimbing,
      jumlah: jumlah,
      deskripsi: deskripsi,
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    return null;
  }
}

async function deleteDataFromFirestore(id) {
  try {
    await deleteDoc(doc(db, "Profil", id));
    console.log("Document successfully deleted!");
  } catch (error) {
    console.error("Error removing document: ", error);
    throw error;
  }
}

async function updateDataInFirestore(id, name, imageUrl, pembimbing, jumlah, deskripsi) {
  try {
    const docRef = doc(db, "Profil", id);
    await updateDoc(docRef, {
      name: name,
      image: imageUrl,
      pembimbing: pembimbing,
      jumlah: jumlah,
      deskripsi: deskripsi,
    });
    console.log("Document successfully updated!");
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
}

const Profil = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [pembimbing, setPembimbing] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [profilData, setProfilData] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showAlert, setShowAlert] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setProfilData(data.sort((a, b) => a.name.localeCompare(b.name)));
    }
    fetchData();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let finalImageUrl = imageUrl; // Gunakan imageUrl lama jika gambar tidak diubah

    if (image) {
      const storage = getStorage();
      const storageRef = ref(storage, `images/profil/${image.name}`);
      await uploadBytes(storageRef, image);
      finalImageUrl = await getDownloadURL(storageRef);
    }

    if (editingId) {
      await updateDataInFirestore(editingId, name, finalImageUrl, pembimbing, jumlah, deskripsi);
      setEditingId(null);
    } else {
      await addDataToFirestore(name, finalImageUrl, pembimbing, jumlah, deskripsi);
    }

    setName("");
    setImage(null);
    setImageUrl("");
    setPembimbing("");
    setJumlah("");
    setDeskripsi("");
    setShowAlert(editingId ? "Data berhasil diperbarui!" : "Data berhasil ditambahkan!");
  };

  const handleAddPostClick = () => {
    setEditingId(null);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      try {
        await deleteDataFromFirestore(id);
        const updatedData = profilData.filter((profil) => profil.id !== id);
        setProfilData(updatedData);
        setShowAlert("Data berhasil dihapus!");
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  const fetchDataForEdit = (id) => {
    const profil = profilData.find((item) => item.id === id);
    if (profil) {
      setName(profil.name);
      setImageUrl(profil.image);
      setPembimbing(profil.pembimbing);
      setJumlah(profil.jumlah);
      setDeskripsi(profil.deskripsi);
      setEditingId(id);
      setShowOverlay(true);
    }
  };

  const filteredData = profilData.filter((profil) => profil.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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
                  <path d="M4 12H20M12 4V20" stroke="#d8d4d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </svg>
              <p className="ms-1">Post</p>
            </button>
            <div className="me-5">
              <input type="text" placeholder="Cari data" value={searchQuery} onChange={handleSearchChange} className="px-4 h-[2rem] w-[20rem] rounded-full focus:outline-none focus:text-[#fff] bg-[#e4d0d0] bg-opacity-20" />
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
                    <th className="px-4 py-2 w-[20rem]">Deskripsi Eskul</th>
                    <th className="px-4 py-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((profil, index) => (
                    <tr key={profil.id} className={index % 2 === 0 ? "bg-transparent" : "bg-gray-200"}>
                      <td className="border px-2 py-2 font-bold text-center">{index + 1}</td>
                      <td className="border px-4 py-2">{profil.name}</td>
                      <td className="border px-4 py-2">{profil.image && <img src={profil.image} alt={profil.name} className="w-16 h-16 object-cover" />}</td>
                      <td className="border px-4 py-2">{profil.pembimbing}</td>
                      <td className="border px-4 py-2">{profil.jumlah}</td>
                      <td className="border px-4 py-2">{profil.deskripsi}</td>
                      <td className="border py-2">
                        <div className="flex items-center justify-evenly">
                          <button className="rounded-xl h-10 w-10  bg-[#dddf88] items-center flex justify-center flex-col" onClick={() => fetchDataForEdit(profil.id)}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                                  stroke="#ffffff"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                                  stroke="#ffffff"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </g>
                            </svg>
                          </button>
                          <button className="rounded-xl h-10 w-10 bg-[#e29090] items-center flex justify-center flex-col" onClick={() => handleDelete(profil.id)}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                              <g id="SVGRepo_iconCarrier">
                                <path d="M10 12V17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M14 12V17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M4 7H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {showOverlay && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-[70rem]">
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
              <p className="text-[#000] font-semibold text-3xl ms-10">{editingId ? "Edit Profil" : "Post Profil"}</p>
              <form className="w-full border border-[#a8a0a0] rounded-xl mt-3" onSubmit={handleSubmit}>
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
                      accept="image/*"
                      className="h-[3rem] rounded-xl border border-[#a8a0a0] w-full focus:outline-none px-4 py-2 flex items-center justify-center bg-white text-[#333] cursor-pointer"
                      onChange={handleFileChange}
                    />
                    {imageUrl && <img src={imageUrl} alt="Preview" className="w-32 h-32 object-cover mt-2" />}
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

                <div className="mx-10 justify-start flex mb-4">
                  <button className="h-10 w-[5rem] mt-4 rounded-xl bg-gray-500 text-[#fff]" type="submit">
                    {editingId ? "Update" : "Post"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
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
            <p className="text-gray-700 mt-2">{showAlert}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
