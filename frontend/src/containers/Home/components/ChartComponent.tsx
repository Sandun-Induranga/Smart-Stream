import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { RootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";

interface IPredictProps {
  streams: string[];
  scores: number[];
}

const ChartComponent = (props: IPredictProps) => {
  const dispatch = useAppDispatch();
  const predictStream = useSelector(
    (state: RootState) => state.studentList.predictedData
  );
  const [data, setData] = useState<{ subject: string; score: number }[]>([]);
  useEffect(() => {
    if (predictStream.streams != null && predictStream.scores != null) {
      console.log(predictStream);
      for (let i = 0; i < 5; i++) {
        setData([
          ...data,
          { subject: props.streams[i], score: props.scores[i] },
        ]);
      }
      console.log(data);
    }
  }, [dispatch]);

  return (
    <ResponsiveContainer width="100%" height={100}>
      <BarChart data={data}>
        <XAxis dataKey="subject" />
        <Tooltip />
        <Legend />
        <Bar dataKey="score" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;
