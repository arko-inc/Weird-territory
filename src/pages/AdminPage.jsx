import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminPage = () => {
  const data = {
    labels: ["Blog 1", "Blog 2", "Blog 3"],
    datasets: [
      {
        label: "Likes",
        data: [12, 19, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Comments",
        data: [2, 3, 5],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Bar data={data} />
      </div>
    </div>
  );
};

export default AdminPage;