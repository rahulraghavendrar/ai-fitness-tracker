import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

INDIAN_FILE = (
    BASE_DIR
    / "datasets"
    / "processed"
    / "indian_clean.csv"
)

OUTPUT_FILE = (
    BASE_DIR
    / "datasets"
    / "processed"
    / "nutrition_master.csv"
)


def build_master():

    df = pd.read_csv(
        INDIAN_FILE
    )

    df["source"] = "INDIAN"

    df.to_csv(
        OUTPUT_FILE,
        index=False
    )

    print("\nMaster Dataset Created")

    print("\nShape:")
    print(df.shape)

    print("\nColumns:")
    print(df.columns.tolist())

    print("\nSample:")
    print(df.head())

    print(
        f"\nSaved:\n{OUTPUT_FILE}"
    )


if __name__ == "__main__":
    build_master()