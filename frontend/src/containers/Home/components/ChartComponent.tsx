import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface IPredictProps {
  predicted_sub: string;
  streams: string[];
  scores: number[];
}

const ChartComponent = (props: IPredictProps) => {
  const data = [];
  for (let i = 0; i < props.streams.length; i++) {
    data.push({ subject: props.streams[i], score: props.scores[i] });
  }

  return (
    <ResponsiveContainer width="100%" height="50%">
      <BarChart data={data}>
        <XAxis dataKey="subject" />
        {/* <YAxis /> */}
        <Tooltip />
        <Legend />
        <Bar dataKey="score" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;
