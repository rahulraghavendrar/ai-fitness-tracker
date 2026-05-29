from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
async def nutrition_health():

    return {
        "status":
        "Nutrition route working"
    }