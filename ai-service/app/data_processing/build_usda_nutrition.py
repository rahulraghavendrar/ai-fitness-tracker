import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

FOOD_FILE = (
    BASE_DIR
    / "datasets"
    / "raw"
    / "usda"
    / "food.csv"
)

FOOD_NUTRIENT_FILE = (
    BASE_DIR
    / "datasets"
    / "raw"
    / "usda"
    / "food_nutrient.csv"
)

OUTPUT_FILE = (
    BASE_DIR
    / "datasets"
    / "processed"
    / "usda_master.csv"
)

CALORIES_ID = 1008
PROTEIN_ID = 1003
FAT_ID = 1004
CARB_ID = 1005


def build_usda_master():

    print("Loading USDA datasets...")

    food = pd.read_csv(
        FOOD_FILE,
        low_memory=False
    )

    food_nutrient = pd.read_csv(
        FOOD_NUTRIENT_FILE,
        low_memory=False
    )

    nutrient_subset = food_nutrient[
        food_nutrient["nutrient_id"].isin(
            [
                CALORIES_ID,
                PROTEIN_ID,
                FAT_ID,
                CARB_ID,
            ]
        )
    ]

    pivot = nutrient_subset.pivot_table(
        index="fdc_id",
        columns="nutrient_id",
        values="amount",
        aggfunc="first"
    ).reset_index()

    pivot.rename(
        columns={
            CALORIES_ID: "calories",
            PROTEIN_ID: "protein",
            FAT_ID: "fat",
            CARB_ID: "carbs",
        },
        inplace=True,
    )

    master = food.merge(
        pivot,
        on="fdc_id",
        how="left"
    )

    master = master[
        [
            "fdc_id",
            "description",
            "calories",
            "protein",
            "carbs",
            "fat",
        ]
    ]

    master.rename(
        columns={
            "description": "food_name"
        },
        inplace=True,
    )

    master["source"] = "USDA"

    master.to_csv(
        OUTPUT_FILE,
        index=False
    )

    print("\nUSDA Master Dataset Created")

    print("\nShape:")
    print(master.shape)

    print("\nFirst 10 rows:")
    print(master.head(10))

    print(f"\nSaved:\n{OUTPUT_FILE}")


if __name__ == "__main__":
    build_usda_master()