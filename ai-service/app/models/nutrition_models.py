from pydantic import BaseModel


class MealAnalysisRequest(BaseModel):
    meal: str