import { getFirestore, collection, getDocs } from "firebase/firestore";

const getDocumentCounts = async () => {
  const db = getFirestore();
  const collections = ["Galeri", "Pengumuman", "Profil", "Jadwal"];

  const counts = {};

  for (const collectionName of collections) {
    const collRef = collection(db, collectionName);
    const snapshot = await getDocs(collRef);
    counts[collectionName] = snapshot.size;
  }

  return counts;
};

export default getDocumentCounts;
