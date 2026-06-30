from supabase import create_client
from dotenv import load_dotenv
import os

load_dotenv()

SUPABASE_URL = (
    os.getenv("SUPABASE_URL")
    or os.getenv("VITE_SUPABASE_URL")
)

SUPABASE_KEY = (
    os.getenv("SUPABASE_KEY")
    or os.getenv("VITE_SUPABASE_ANON_KEY")
)

if not SUPABASE_URL:
    raise Exception("Supabase URL not found")

if not SUPABASE_KEY:
    raise Exception("Supabase Key not found")

supabase = create_client(
    SUPABASE_URL,
    SUPABASE_KEY
)