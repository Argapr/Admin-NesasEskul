import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const [dataCounts, setDataCounts] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      const collections = ['Galeri', 'Pengumuman', 'Profil', 'Jadwal'];
      const counts = {};

      for (const collectionName of collections) {
        const col = collection(db, collectionName);
        const snapshot = await getDocs(col);
        counts[collectionName] = snapshot.size;
      }

      setDataCounts(counts);
    };

    fetchData();
  }, []);
  
  const chartData = {
    labels: Object.keys(dataCounts),
    datasets: [{
      label: 'Jumlah Data',
      data: Object.values(dataCounts),
      backgroundColor: '#e2dede18',
      borderColor: '#000000',
      borderWidth: 0,
    }],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
