from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

IST = ZoneInfo("Asia/Kolkata")


def get_ist_now():

    return datetime.now(IST)


def get_today_range():

    now = get_ist_now()

    start = now.replace(
        hour=0,
        minute=0,
        second=0,
        microsecond=0
    )

    end = start + timedelta(days=1)

    return start, end


def get_today_iso():

    start, end = get_today_range()

    return (
        start.isoformat(),
        end.isoformat()
    )


def seconds_until_midnight():

    now = get_ist_now()

    tomorrow = (
        now + timedelta(days=1)
    ).replace(
        hour=0,
        minute=0,
        second=0,
        microsecond=0
    )

    return int(
        (
            tomorrow - now
        ).total_seconds()
    )