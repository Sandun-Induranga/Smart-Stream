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
  isStudentLoading: boolean;
  isStreamLoading: boolean;
}

interface IPredictResponse {
  predicted_sub: string;
  streams: string[];
  scores: number[];
  student: string;
}

const initialState: IStudentState = {
  studentList: [],
  predictedData: {
    predicted_sub: "",
    streams: [],
    scores: [],
    student: "",
  },
  isStudentLoading: false,
  isStreamLoading: false,
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
    setStudentLoading: (state, action: PayloadAction<boolean>) => {
      state.isStudentLoading = action.payload;
    },
    setStreamLoading: (state, action: PayloadAction<boolean>) => {
      state.isStreamLoading = action.payload;
    },
  },
});

const studentActions = studentSlice.actions;
const studentReducer = studentSlice.reducer;
export { studentActions, studentReducer };
