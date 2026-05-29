from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
async def chat_health():

    return {
        "status":
        "Chat route working"
    }