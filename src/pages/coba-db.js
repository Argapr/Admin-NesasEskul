"use client";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../components/firebase/firebaseConfig";

const Coba = () => {
  const [galeri, setGaleri] = useState([]);

  useEffect(() => {
    const galeriRef = ref(database, "Galeri");
    get(galeriRefRe)
      .then((snapshot) => {
        if (snapshot.exests()) {
          const galeriArray = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setGaleri(galeriArray);
        } else {
          console.log("No Data Avainable");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <h1 className="text-white">add data from firebase</h1>
      <div className="grid grid-cols-2 gap4">
        {galeri.map((galeri) => (
          <diiv key={galeri.id} className></diiv>
        ))}
      </div>
    </div>
  );
};

export default Coba;
