from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
async def workout_health():

    return {
        "status":
        "Workout route working"
    }