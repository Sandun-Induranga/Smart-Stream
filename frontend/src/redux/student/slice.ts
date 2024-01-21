import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IStudent {
  studentId: string;
  name: string;
  address: string;
  mobile: string;
  dob: string;
  gender: string;
}

interface IStudentState {
  studentList: IStudent[];
  predictedData: IPredictResponse;
}

interface IPredictResponse {
  predicted_sub: string;
  streams: string[];
  scores: number[];
}

const initialState: IStudentState = {
  studentList: [],
  predictedData: {
    predicted_sub: "",
    streams: [],
    scores: [],
  },
};

export const studentSlice = createSlice({
  name: "studentList",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<IStudent>) => {},
    removeStudent: (state, action: PayloadAction<string>) => {
      state.studentList = state.studentList.filter(
        (student) => student.studentId != action.payload
      );
    },
    fetchStudent: () => {},
    updateStudent: (state, action: PayloadAction<IStudent>) => {},
    setStudent: (state, action: PayloadAction<IStudent[]>) => {
      state.studentList = action.payload;
    },
    predictStream: (state, action: PayloadAction<string>) => {},
    setStream: (state, action: PayloadAction<IPredictResponse>) => {
      state.predictedData = action.payload;
    },
  },
});

const studentActions = studentSlice.actions;
const studentReducer = studentSlice.reducer;
export { studentActions, studentReducer };
