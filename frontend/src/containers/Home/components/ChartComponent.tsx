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

const ChartComponent = () => {
  const dispatch = useAppDispatch();
  const predictStream = useSelector(
    (state: RootState) => state.studentList.predictedData
  );
  const [data, setData] = useState<{ subject: string; score: number }[]>([]);
  useEffect(() => {
    console.log(predictStream);
    const tempData: { subject: string; score: number }[] = [];
    for (let i = 0; i < 5; i++) {
      console.log(predictStream.streams[i], predictStream.scores[i]);
      tempData.push({
        subject: predictStream.streams[i],
        score: predictStream.scores[i],
      });
    }
    setData(tempData);
  }, [predictStream.scores, predictStream.streams]);

  return (
    <ResponsiveContainer width="100%" height={300}>
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
