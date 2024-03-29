import {
  Box,
  Button,
  CircularProgress,
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
  Typography,
} from "@mui/material";
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { studentActions } from "../../redux/student/slice";
import { generateAge } from "../../util/generateAgeUtil";
import {
  validateAddress,
  validateMobile,
  validateName,
} from "../../util/validationUtil";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/TopBar/TopBar";

interface IStudentData {
  studentId: string;
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
  const isStudentLoading = useSelector(
    (state: RootState) => state.studentList.isStudentLoading
  );
  const [formData, setFormData] = useState<IStudentData>({
    studentId: "",
    name: "",
    address: "",
    mobile: "",
    dob: "",
    gender: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    dispatch(studentActions.fetchStudent());
  }, [dispatch]);

  const handleSaveStudent = () => {
    dispatch(studentActions.addStudent(formData));
    hanldeClearForm();
  };

  const handleUpdateStudent = () => {
    dispatch(studentActions.updateStudent(formData));
    hanldeClearForm();
  };

  const handleDeleteStudent = () => {
    dispatch(studentActions.removeStudent(formData.studentId));
    hanldeClearForm();
  };

  const handleSelectStudent = (student: IStudentData) => {
    setFormData(student);
  };

  const hanldeClearForm = () => {
    setFormData({
      studentId: "",
      name: "",
      address: "",
      mobile: "",
      dob: "",
      gender: "",
    });
  };

  return (
    <>
      <TopBar />
      <Grid container gap={2} p={2}>
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
                  <TableRow
                    hover
                    key={row.studentId}
                    onClick={() => {
                      handleSelectStudent(row);
                    }}
                  >
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
            <Typography variant="h5" textAlign={"center"} color={"GrayText"}>
              Manage Student
            </Typography>
            <TextField
              label="Student ID"
              value={formData.studentId}
              onChange={(e) => {
                setFormData({ ...formData, studentId: e.target.value });
              }}
              margin="dense"
              fullWidth
            />
            <TextField
              label="Student Name"
              value={formData.name}
              color={errors.includes("name") ? "error" : "success"}
              onChange={(e) => {
                validateName(e.target.value)
                  ? setErrors([...errors.filter((error) => error !== "name")])
                  : setErrors([...errors, "name"]);
                setFormData({ ...formData, name: e.target.value });
              }}
              margin="dense"
              fullWidth
            />
            <TextField
              label="Address"
              value={formData.address}
              color={errors.includes("address") ? "error" : "success"}
              onChange={(e) => {
                validateAddress(e.target.value)
                  ? setErrors([
                      ...errors.filter((error) => error !== "address"),
                    ])
                  : setErrors([...errors, "address"]);
                setFormData({ ...formData, address: e.target.value });
              }}
              margin="dense"
              fullWidth
            />
            <TextField
              label="Birthday"
              type="date"
              value={formData.dob}
              onChange={(e) => {
                setFormData({ ...formData, dob: e.target.value });
              }}
              margin="dense"
              fullWidth
            />
            <TextField
              label="Mobile"
              value={formData.mobile}
              color={errors.includes("mobile") ? "error" : "success"}
              onChange={(e) => {
                validateMobile(e.target.value)
                  ? setErrors([...errors.filter((error) => error !== "mobile")])
                  : setErrors([...errors, "mobile"]);
                setFormData({ ...formData, mobile: e.target.value });
              }}
              margin="dense"
              fullWidth
            />
            <Select
              fullWidth
              sx={{ mt: 1 }}
              value={formData.gender}
              label="Gender"
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value });
              }}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
            {isStudentLoading && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 2,
                  gap: 2,
                }}
              >
                <CircularProgress color="warning" />
                <Typography variant="h6" color={"GrayText"}>
                  Processing ⌛...
                </Typography>
              </Box>
            )}
            <Box
              sx={{
                mt: 2,
                display: "flex",
                width: "100%",
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                color="success"
                onClick={handleSaveStudent}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={handleUpdateStudent}
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleDeleteStudent}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={hanldeClearForm}
              >
                Clear
              </Button>
            </Box>
          </Box>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default Student;
