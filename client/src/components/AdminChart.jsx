import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const AdminChart = () => {
  const data = [
    { name: "Jan", users: 4000 },
    { name: "Feb", users: 3000 },
    { name: "Mar", users: 2000 },
    { name: "Apr", users: 2780 },
    { name: "May", users: 1890 },
    { name: "Jun", users: 2390 },
  ];

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg mt-8 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">User Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#ff4d4d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminChart;
