import re
import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

DATASET_PATH = (
    BASE_DIR
    / "datasets"
    / "processed"
    / "nutrition_master.csv"
)

nutrition_df = pd.read_csv(
    DATASET_PATH
)


def search_food(food_name: str):

    matches = nutrition_df[
        nutrition_df["food_name"]
        .str.contains(
            food_name,
            case=False,
            na=False
        )
    ]

    if matches.empty:
        return None

    result = matches.iloc[0]

    return {
        "food_name": result["food_name"],
        "category": result["category"],
        "serving_size": result["serving_size"],
        "calories": float(result["calories"]),
        "protein": float(result["protein"]),
        "carbs": float(result["carbs"]),
        "fat": float(result["fat"]),
    }


def analyze_meal(meal_text: str):

    meal_text = meal_text.lower().strip()

    quantity = 1

    quantity_match = re.match(
        r"(\d+)",
        meal_text
    )

    if quantity_match:

        quantity = int(
            quantity_match.group(1)
        )

        meal_text = re.sub(
            r"^\d+\s*",
            "",
            meal_text
        )

    food_result = search_food(
        meal_text
    )

    if food_result is None:

        return None

    return {
        "food_name": food_result["food_name"],
        "quantity": quantity,
        "total_calories":
            round(
                food_result["calories"] * quantity,
                2
            ),
        "protein":
            round(
                food_result["protein"] * quantity,
                2
            ),
        "carbs":
            round(
                food_result["carbs"] * quantity,
                2
            ),
        "fat":
            round(
                food_result["fat"] * quantity,
                2
            ),
    }