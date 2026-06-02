import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

USDA_INPUT = (
    BASE_DIR
    / "datasets"
    / "raw"
    / "usda"
    / "food.csv"
)

def inspect_usda():

    df = pd.read_csv(
        USDA_INPUT,
        low_memory=False
    )

    print("\nShape:")
    print(df.shape)

    print("\nColumns:")
    print(df.columns.tolist())

    print("\nFirst 5 rows:")
    print(df.head())

if __name__ == "__main__":
    inspect_usda()