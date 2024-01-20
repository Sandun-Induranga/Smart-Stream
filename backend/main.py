from fastapi import FastAPI, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pymongo import MongoClient
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

client = MongoClient("mongodb+srv://sandu:1234@students.qfd4mdf.mongodb.net/")
db = client["mydatabase"]
collection = db["students"]

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Student(BaseModel):
    studentId: int
    name: str
    address: str
    dob: str
    mobile: str
    gender: str

@app.get("/student")
def get_students():
    students = list(collection.find())
    
    # Convert ObjectId to string for each student in the list
    for student in students:
        student['_id'] = str(student['_id'])
    return JSONResponse(content=jsonable_encoder(students), status_code=200)

@app.get("/student/{id}")
def get_student(id: int):
    student = collection.find_one({"id": id})
    if student:
        return JSONResponse(content=jsonable_encoder(student), status_code=200)
    else:
        raise HTTPException(status_code=404, detail="Student not found")
    
@app.post("/student")
def add_student(student: Student):
    collection.insert_one(student.dict(by_alias=True))
    return JSONResponse(content=jsonable_encoder(student), status_code=201)

@app.put("/student/{id}")
def update_student(id: int, student: Student):
    student = collection.find_one_and_update({"id": id}, {"$set": student.dict(by_alias=True)})
    if student:
        return JSONResponse(content=jsonable_encoder(student), status_code=200)
    else:
        raise HTTPException(status_code=404, detail="Student not found")
    
@app.delete("/student/{id}")
def delete_student(id: int):
    student = collection.find_one_and_delete({"id": id})
    if student:
        return JSONResponse(content=jsonable_encoder(student), status_code=200)
    else:
        raise HTTPException(status_code=404, detail="Student not found")
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
