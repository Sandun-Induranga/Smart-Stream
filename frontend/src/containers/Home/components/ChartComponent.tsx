import { Box } from "@mui/material";
import { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface IPredictProps {
  streams: string[];
  scores: number[];
}

const ChartComponent = (props: IPredictProps) => {
  const data = [{ subject: "A", score: 100 }];
  useEffect(() => {
    // for (let i = 0; i < props.streams.length; i++) {
    //   data.push({
    //     subject: props.streams[i],
    //     score: props.scores[i],
    //   });
    // }
  }, [props.streams, props.scores]);

  return (
    <Box width="100%" height={100}>
      <BarChart data={data}>
        <XAxis dataKey="subject" />
        <Tooltip />
        <Legend />
        <Bar dataKey="score" fill="#8884d8" />
      </BarChart>
    </Box>
  );
};

export default ChartComponent;
