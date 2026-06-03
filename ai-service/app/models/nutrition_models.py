from pydantic import BaseModel


class MealAnalysisRequest(BaseModel):
    meal: str

class LogMealRequest(BaseModel):

    user_id: str

    meal: str