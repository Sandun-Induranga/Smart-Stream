import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { studentActions } from "./slice";

interface IStudentData {
  studentId: number;
  name: string;
  address: string;
  mobile: string;
  dob: string;
  gender: string;
}

interface IResponse {
  data: IStudentData[];
}

function* saveAndUpdateStudent(action: PayloadAction<IStudentData>) {
  const { studentId, name, address, mobile, dob, gender } = action.payload;

  const student = {
    studentId: studentId,
    name: name,
    address: address,
    mobile: mobile,
    dob: dob,
    gender: gender,
  };

  const isUpdate: boolean = studentId != -1;

  try {
    yield call(
      isUpdate ? api.put : api.post,
      `/student/${isUpdate ? studentId : ""}`,
      student,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    alert(error);
  }
}

function* getAllStudents() {
  try {
    const response: IResponse = yield call(api.get, "/student");
    yield put(studentActions.setStudent(response.data));
  } catch (error) {
    alert(error);
  }
}

function* deleteStudent(action: PayloadAction<number>) {
  const id = action.payload;

  try {
    yield call(api.delete, `/student/${id}`);
  } catch (error) {
    alert(error);
  }
}

export function* studentSaga() {
  yield takeEvery(studentActions.fetchStudent.type, getAllStudents);
  yield takeEvery(studentActions.updateStudent, saveAndUpdateStudent);
  yield takeEvery(studentActions.removeStudent, deleteStudent);
}
