import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartComponent = () => {
  const data = [
    { subject: "Maths", score: 80 },
    { subject: "Science", score: 60 },
    { subject: "Commerce", score: 45 },
    { subject: "Arts", score: 75 },
    { subject: "Technology", score: 90 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="subject" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="score" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;
