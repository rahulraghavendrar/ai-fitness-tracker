import os
from pathlib import Path

import pandas as pd

from qdrant_client import QdrantClient
from qdrant_client.models import (
    Distance,
    VectorParams,
    PointStruct,
)

from sentence_transformers import SentenceTransformer


# --------------------------------------------------
# Configuration
# --------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent.parent

DATASET_PATH = (
    BASE_DIR
    / "datasets"
    / "food.csv"
)

QDRANT_URL = os.getenv(
    "QDRANT_URL",
    "http://localhost:6333"
)

COLLECTION_NAME = (
    "nutrition_knowledge"
)

EMBEDDING_MODEL = (
    "all-MiniLM-L6-v2"
)

VECTOR_SIZE = 384


# --------------------------------------------------
# Clients
# --------------------------------------------------

qdrant = QdrantClient(
    url=QDRANT_URL
)

embedder = SentenceTransformer(
    EMBEDDING_MODEL
)


# --------------------------------------------------
# Create Qdrant collection
# --------------------------------------------------

def create_collection():

    collections = (
        qdrant
        .get_collections()
        .collections
    )

    exists = any(
        collection.name
        == COLLECTION_NAME
        for collection in collections
    )

    if exists:
        print(
            f"Collection '{COLLECTION_NAME}' "
            "already exists."
        )
        return

    qdrant.create_collection(
        collection_name=COLLECTION_NAME,

        vectors_config=VectorParams(
            size=VECTOR_SIZE,
            distance=Distance.COSINE
        )
    )

    print(
        f"Created collection: "
        f"{COLLECTION_NAME}"
    )


# --------------------------------------------------
# Load nutrition dataset
# --------------------------------------------------

def load_dataset():

    if not DATASET_PATH.exists():

        raise FileNotFoundError(
            f"Dataset not found: "
            f"{DATASET_PATH}"
        )

    df = pd.read_csv(
        DATASET_PATH
    )

    print(
        f"Loaded {len(df)} food records."
    )

    return df


# --------------------------------------------------
# Convert dataset rows into documents
# --------------------------------------------------

def create_documents(
    df,
    limit=500
):

    documents = []

    records = df.head(limit)

    for _, row in records.iterrows():

        values = []

        for column in df.columns:

            value = row[column]

            if pd.notna(value):

                values.append(
                    f"{column}: {value}"
                )

        if values:

            document = "\n".join(
                values
            )

            documents.append(
                document
            )

    print(
        f"Created {len(documents)} "
        "nutrition documents."
    )

    return documents


# --------------------------------------------------
# Generate embeddings and store in Qdrant
# --------------------------------------------------

def add_documents(
    documents
):

    if not documents:

        print(
            "No documents to add."
        )

        return

    print(
        "Generating embeddings..."
    )

    embeddings = embedder.encode(
        documents,
        show_progress_bar=True
    )

    points = []

    for index, document in enumerate(
        documents
    ):

        points.append(
            PointStruct(
                id=index,

                vector=embeddings[
                    index
                ].tolist(),

                payload={
                    "text": document
                }
            )
        )

    qdrant.upsert(
        collection_name=
        COLLECTION_NAME,

        points=points
    )

    print(
        f"Stored {len(points)} "
        "vectors in Qdrant."
    )


# --------------------------------------------------
# Semantic search
# --------------------------------------------------

def search(
    query,
    limit=5
):

    query_embedding = (
        embedder
        .encode(query)
        .tolist()
    )

    results = (
        qdrant
        .query_points(
            collection_name=
            COLLECTION_NAME,

            query=query_embedding,

            limit=limit
        )
    )

    return results.points


# --------------------------------------------------
# Main RAG pipeline
# --------------------------------------------------

if __name__ == "__main__":

    print(
        "\nStarting Nutrition RAG...\n"
    )

    # 1. Create Qdrant collection
    create_collection()

    # 2. Load existing dataset
    df = load_dataset()

    # 3. Convert food records
    #    into text documents
    documents = create_documents(
        df,
        limit=500
    )

    # 4. Generate embeddings
    #    and store them in Qdrant
    add_documents(
        documents
    )

    # 5. Test semantic retrieval
    query = (
        "healthy high protein food"
    )

    print(
        f"\nSearching for: "
        f"{query}\n"
    )

    results = search(
        query,
        limit=5
    )

    print(
        "Retrieved documents:\n"
    )

    for index, result in enumerate(
        results,
        start=1
    ):

        print(
            f"\nResult {index}"
        )

        print(
            f"Score: "
            f"{result.score:.4f}"
        )

        print(
            result.payload["text"]
        )

    print(
        "\nRAG retrieval completed."
    )