import {
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { RootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { studentActions } from "../../../redux/student/slice";
import { generateAge } from "../../../util/generateAgeUtil";

interface IStudentData {
  studentId: number;
  name: string;
  address: string;
  mobile: string;
  dob: string;
  gender: string;
  age?: number;
}

const Student = () => {
  const dispatch = useAppDispatch();
  const studentList = useSelector(
    (state: RootState) => state.studentList.studentList
  );
  const [formData, setFormData] = useState<IStudentData>({
    studentId: 0,
    name: "",
    address: "",
    mobile: "",
    dob: "",
    gender: "",
  });

  useEffect(() => {
    dispatch(studentActions.fetchStudent());
  }, [dispatch]);

  return (
    <Grid container gap={2}>
      <Grid item xs={12} md={6}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Birthday</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentList.map((row) => (
                <TableRow key={row.studentId}>
                  <TableCell>{row.studentId}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.dob}</TableCell>
                  <TableCell>{generateAge(row.dob)}</TableCell>
                  <TableCell>{row.mobile}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} md={5} p={2} component={Paper}>
        <Box>
          <TextField
            label="Student ID"
            value={formData.studentId}
            onChange={(e) => {
              setFormData({ ...formData, studentId: parseInt(e.target.value) });
            }}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Student Name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Address"
            value={formData.address}
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
            }}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Birthday"
            type="date"
            value={formData.dob}
            onChange={(e) => {
              setFormData({ ...formData, dob: e.target.value });
            }}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Mobile"
            value={formData.mobile}
            onChange={(e) => {
              setFormData({ ...formData, mobile: e.target.value });
            }}
            margin="normal"
            fullWidth
          />
          <Select fullWidth value={"male"} label="Gender">
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Student;
