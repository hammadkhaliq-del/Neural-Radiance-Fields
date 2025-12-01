from database import db_lifespan
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return "hello"

@app.post("/nerf")
async def nerf():
    return