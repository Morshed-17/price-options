import {
  BarChart,
  LineChart as Lchart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar
} from "recharts";
const LineChart = () => {
  const mathMarks = [
    { id: 1, name: "John", math: 90, physics: 85, chemistry: 78 },
    { id: 2, name: "Alice", math: 85, physics: 88, chemistry: 92 },
    { id: 3, name: "Michael", math: 78, physics: 75, chemistry: 80 },
    { id: 4, name: "Emily", math: 44, physics: 90, chemistry: 82 },
    { id: 5, name: "David", math: 88, physics: 85, chemistry: 95 },
    { id: 6, name: "Sarah", math: 75, physics: 50, chemistry: 70 },
    { id: 7, name: "Robert", math: 96, physics: 88, chemistry: 91 },
    { id: 8, name: "Jessica", math: 84, physics: 89, chemistry: 76 },
    { id: 9, name: "Matthew", math: 77, physics: 81, chemistry: 85 },
    { id: 10, name: "Olivia", math: 95, physics: 85, chemistry: 89 },
  ];

  return (
    <div className="grid grid-cols-2">
      <ResponsiveContainer width="100%" height={400}>
        <Lchart width={500} data={mathMarks}>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Line dataKey="math" stroke="red" />
          <Line dataKey="physics" stroke="orange" />
          <Line dataKey="chemistry" stroke="blue" />
        </Lchart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart width={730} data={mathMarks}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="math" fill="#8884d8" />
          <Bar dataKey="physics" fill="#82ca9d" />
          <Bar dataKey="chemistry" fill="#8804d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
