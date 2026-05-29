from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.nutrition import router as nutrition_router
from app.routes.chat import router as chat_router
from app.routes.workout import router as workout_router
from app.routes.analytics import router as analytics_router

app = FastAPI(
    title="AI Fitness Tracker API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

app.include_router(
    nutrition_router,
    prefix="/nutrition",
    tags=["Nutrition"]
)

app.include_router(
    chat_router,
    prefix="/chat",
    tags=["Chat"]
)

app.include_router(
    workout_router,
    prefix="/workouts",
    tags=["Workouts"]
)

app.include_router(
    analytics_router,
    prefix="/analytics",
    tags=["Analytics"]
)

@app.get("/")
async def root():

    return {
        "message":
        "AI Fitness Tracker Backend Running"
    }