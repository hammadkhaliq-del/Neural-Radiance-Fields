from fastapi import FastAPI # type: ignore
import asyncpg #type: ignore
from contextlib import asynccontextmanager
from dotenv import load_dotenv 
import os

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")


## database connection
@asynccontextmanager
async def db_lifespan(app:FastAPI):
    app.state.pool = await asyncpg.create_pool(DATABASE_URL)
    print("--OPENED: Connection established to the database.")
    ## initiaize tables
    await app.state.pool.execute(queries["project_table"]["create"])
    await app.state.pool.execute(queries["project_table"]["create"])
    yield

    await app.state.pool.close()
    print("--CLOSED: Database connection closed.")



## 
queries = {
    "project_table":{
        "create":"""CREATE TABLE IF NOT EXISTS projects (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            status TEXT NOT NULL DEFAULT 'uploaded',
            file_path_images TEXT,
            file_path_model TEXT,
            metadata JSONB,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );)""",
        },
}