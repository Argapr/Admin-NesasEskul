import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { db } from "../components/firebase/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "Galeri"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

const Galeri = () => {
  const [galeriData, setGaleriData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setGaleriData(data.sort((a, b) => a.name.localeCompare(b.name))); // Sort data by name
    }
    fetchData();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">Nama</th>
          <th className="px-4 py-2">Image</th>
        </tr>
      </thead>
      <tbody>
        {galeriData.map((galeri) => (
          <tr key={galeri.id}>
            <td className="border px-4 py-2">{galeri.name}</td>
            <td className="border px-4 py-2">{galeri.image && <img src={galeri.image} alt={galeri.name} style={{ width: "100px" }} />}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Galeri;
