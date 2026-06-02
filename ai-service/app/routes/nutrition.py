from fastapi import APIRouter

from app.services.nutrition_service import (
    search_food,
    analyze_meal,
)

from app.models.nutrition_models import (
    MealAnalysisRequest,
)

router = APIRouter()


@router.get("/health")
async def nutrition_health():

    return {
        "status": "Nutrition route working"
    }


@router.get("/search")
async def nutrition_search(food: str):

    result = search_food(food)

    if result is None:
        return {
            "message": "Food not found"
        }

    return result


@router.post("/analyze")
async def nutrition_analyze(
    request: MealAnalysisRequest
):

    result = analyze_meal(
        request.meal
    )

    if result is None:
        return {
            "message": "Food not found"
        }

    return result