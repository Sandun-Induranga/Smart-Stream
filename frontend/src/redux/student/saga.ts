import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { studentActions } from "./slice";

interface IStudentData {
  studentId: string;
  name: string;
  address: string;
  mobile: string;
  dob: string;
  gender: string;
}

interface IResponse {
  data: IStudentData[];
}

function* saveStudent(action: PayloadAction<IStudentData>) {
  const { studentId, name, address, mobile, dob, gender } = action.payload;

  const student = {
    studentId: studentId,
    name: name,
    address: address,
    mobile: mobile,
    dob: dob,
    gender: gender,
  };

  try {
    yield call(api.post, "/student", student, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    alert(error);
  }
}

function* updateStudent(action: PayloadAction<IStudentData>) {
  const { studentId, name, address, mobile, dob, gender } = action.payload;

  const student = {
    studentId: studentId,
    name: name,
    address: address,
    mobile: mobile,
    dob: dob,
    gender: gender,
  };

  try {
    yield call(api.post, `/student/${studentId}`, student, {
      headers: { "Content-Type": "application/json" },
    });
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

function* deleteStudent(action: PayloadAction<string>) {
  const id = action.payload;

  try {
    yield call(api.delete, `/student/${id}`);
  } catch (error) {
    alert(error);
  }
}

export function* studentSaga() {
  yield takeEvery(studentActions.fetchStudent.type, getAllStudents);
  yield takeEvery(studentActions.updateStudent, updateStudent);
  yield takeEvery(studentActions.addStudent, saveStudent);
  yield takeEvery(studentActions.removeStudent, deleteStudent);
}
