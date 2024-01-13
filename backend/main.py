from bson import ObjectId
from fastapi import FastAPI, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pymongo import MongoClient
from pydantic import BaseModel

app = FastAPI()

client = MongoClient("mongodb+srv://sandutharu40:1234@students.qfd4mdf.mongodb.net/")
db = client["mydatabase"]
collection = db["students"]

class Student(BaseModel):
    studentId: int
    name: str
    address: str
    dob: str
    gender: str

@app.get("/students")
def get_students():
    students = list(collection.find())
    return JSONResponse(content=students, status_code=200)

@app.get("/students/{id}")
def get_student(id: int):
    student = collection.find_one({"id": id})
    if student:
        return JSONResponse(content=jsonable_encoder(student), status_code=200)
    else:
        raise HTTPException(status_code=404, detail="Student not found")
    
@app.post("/students")
def add_student(student: Student):
    collection.insert_one(student.dict(by_alias=True))
    return JSONResponse(content=jsonable_encoder(student), status_code=201)

@app.put("/students/{id}")
def update_student(id: int, student: Student):
    student = collection.find_one_and_update({"id": id}, {"$set": student.dict(by_alias=True)})
    if student:
        return JSONResponse(content=jsonable_encoder(student), status_code=200)
    else:
        raise HTTPException(status_code=404, detail="Student not found")
    
@app.delete("/students/{id}")
def delete_student(id: int):
    student = collection.find_one_and_delete({"id": id})
    if student:
        return JSONResponse(content=jsonable_encoder(student), status_code=200)
    else:
        raise HTTPException(status_code=404, detail="Student not found")
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
