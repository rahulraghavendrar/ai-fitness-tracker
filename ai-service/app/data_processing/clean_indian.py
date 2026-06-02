from pathlib import Path
import pandas as pd

BASE_DIR = Path(__file__).resolve().parent.parent

INPUT_FILE = (
    BASE_DIR
    / "datasets"
    / "raw"
    / "indian"
    / "indian_food_nutrition_dataset.csv"
)

OUTPUT_FILE = (
    BASE_DIR
    / "datasets"
    / "processed"
    / "indian_clean.csv"
)

COLUMNS = [
    "food_name",
    "category",
    "serving_size",
    "calories",
    "protein",
    "carbs",
    "fat",
    "dietary_preference"
]


def parse_line(line):

    parts = line.strip().split(",")

    if len(parts) == 8:
        return parts

    if len(parts) > 8:

        extra = len(parts) - 8 + 1

        food_name = ",".join(parts[:extra])

        remaining = parts[extra:]

        return [food_name] + remaining

    return None


def clean_indian():

    rows = []

    with open(
        INPUT_FILE,
        "r",
        encoding="utf-8"
    ) as f:

        next(f)

        for line in f:

            parsed = parse_line(line)

            if parsed:
                rows.append(parsed)

    df = pd.DataFrame(
        rows,
        columns=COLUMNS
    )

    numeric_cols = [
        "calories",
        "protein",
        "carbs",
        "fat"
    ]

    for col in numeric_cols:

        df[col] = pd.to_numeric(
            df[col],
            errors="coerce"
        )

    OUTPUT_FILE.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    df.to_csv(
        OUTPUT_FILE,
        index=False
    )

    print("\nDataset Shape:")
    print(df.shape)

    print("\nColumns:")
    print(df.columns.tolist())

    print("\nFirst 10 Rows:")
    print(df.head(10))

    print(
        f"\nSaved cleaned dataset:\n{OUTPUT_FILE}"
    )


if __name__ == "__main__":
    clean_indian()