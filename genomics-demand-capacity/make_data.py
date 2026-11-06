"""Write the synthetic raw referral file and the planned capacity file."""
import logging
import sys
from datetime import timedelta
from pathlib import Path

from dcap import config
from dcap.simulate import make_messy, simulate_referrals, weekly_capacity

log = logging.getLogger(__name__)


def main():
    logging.basicConfig(stream=sys.stdout, level=logging.INFO, format="%(levelname)s %(message)s")
    Path(config.RAW_FILE).parent.mkdir(parents=True, exist_ok=True)

    clean = simulate_referrals()
    raw = make_messy(clean)
    raw.to_csv(config.RAW_FILE, index=False, date_format="%Y-%m-%d")
    log.info("wrote %s rows to %s (%s clean rows plus faults)", len(raw), config.RAW_FILE, len(clean))

    capacity = weekly_capacity(config.N_WEEKS + config.FORECAST_WEEKS)
    capacity.to_csv(config.CAPACITY_FILE, index=False, date_format="%Y-%m-%d")
    log.info("wrote %s weeks of planned capacity to %s", len(capacity), config.CAPACITY_FILE)


if __name__ == "__main__":
    main()
