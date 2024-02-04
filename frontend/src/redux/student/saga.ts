import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { studentActions } from "./slice";
import { toast } from "react-toastify";

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

interface IData {
  predicted_sub: string;
  streams: string[];
  scores: number[];
  student: string;
}

interface IPredictResponse {
  data: IData;
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
    yield put(studentActions.setStudentLoading(true));
    yield call(api.post, "/student", student, {
      headers: { "Content-Type": "application/json" },
    });
    yield put(studentActions.setStudentLoading(false));
    toast("Student Added Successfully..!", { type: "success" });
    yield put(studentActions.fetchStudent());
  } catch (error) {
    yield put(studentActions.setStudentLoading(false));
    toast("Something Went Wrong..!", { type: "error" });
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
    yield put(studentActions.setStudentLoading(true));
    yield call(api.put, `/student/${studentId}`, student, {
      headers: { "Content-Type": "application/json" },
    });
    yield put(studentActions.setStudentLoading(false));
    toast("Student Updated Successfully..!", { type: "success" });
    yield put(studentActions.fetchStudent());
  } catch (error) {
    yield put(studentActions.setStudentLoading(false));
    toast("Something Went Wrong..!", { type: "error" });
  }
}

function* getAllStudents() {
  try {
    yield put(studentActions.setStudentLoading(true));
    const response: IResponse = yield call(api.get, "/student");
    yield put(studentActions.setStudent(response.data));
    yield put(studentActions.setStudentLoading(false));
    toast("Student List Fetched..!", { type: "success" });
  } catch (error) {
    yield put(studentActions.setStudentLoading(false));
    toast("Something Went Wrong..!", { type: "error" });
  }
}

function* deleteStudent(action: PayloadAction<string>) {
  const id = action.payload;

  try {
    yield put(studentActions.setStudentLoading(true));
    yield call(api.delete, `/student/${id}`);
    yield put(studentActions.setStudentLoading(false));
    toast("Student Deleted Successfully..!", { type: "success" });
    yield put(studentActions.fetchStudent());
  } catch (error) {
    yield put(studentActions.setStudentLoading(false));
    toast("Something Went Wrong..!", { type: "error" });
  }
}

function* predictStream(action: PayloadAction<string>) {
  const id = action.payload;

  try {
    yield put(studentActions.setStreamLoading(true));
    const response: IPredictResponse = yield call(api.get, `/predict/${id}`);
    yield put(studentActions.setStream(response.data));
    yield put(studentActions.setStreamLoading(false));
    toast("Predicted Successfully..!", { type: "success" });
  } catch (error) {
    toast("Something Went Wrong..!", { type: "error" });
  }
}

export function* studentSaga() {
  yield takeEvery(studentActions.fetchStudent.type, getAllStudents);
  yield takeEvery(studentActions.updateStudent, updateStudent);
  yield takeEvery(studentActions.addStudent, saveStudent);
  yield takeEvery(studentActions.removeStudent, deleteStudent);
  yield takeEvery(studentActions.predictStream, predictStream);
}
