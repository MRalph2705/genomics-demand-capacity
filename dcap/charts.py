"""Draw the two charts that go in the README."""
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402


def plot_demand_capacity(weekly, forecast_table, path):
    """Top: demand against capacity, with the forecast. Bottom: backlog waiting for sequencing."""
    figure, (top, bottom) = plt.subplots(2, 1, figsize=(10, 7), sharex=True, height_ratios=[3, 2])
    top.plot(weekly.index, weekly["referrals"], color="#9aa5b1", linewidth=1, label="Referrals per week")
    top.plot(weekly.index, weekly["referrals_4wk_avg"], color="#1f4e99", linewidth=2, label="Referrals, 4-week average")
    top.step(weekly.index, weekly["capacity"], where="post", color="#c0392b", linewidth=2, label="Sequencing capacity")
    top.plot(forecast_table.index, forecast_table["forecast_demand"], color="#1f4e99", linestyle="--", label="Forecast demand")
    top.step(forecast_table.index, forecast_table["planned_capacity"], where="post", color="#c0392b", linestyle="--")
    top.set_ylabel("Samples per week")
    top.set_title("Demand and capacity")
    top.legend(loc="lower right", fontsize=8)

    bottom.fill_between(weekly.index, weekly["backlog_end"], color="#e69f00", alpha=0.6)
    bottom.set_ylabel("Samples waiting")
    bottom.set_title("Backlog at the end of each week")
    figure.autofmt_xdate()
    figure.tight_layout()
    figure.savefig(path, dpi=130)
    plt.close(figure)


def plot_turnaround(cohorts, path):
    """Share of referrals reported within target, by referral month."""
    figure, axis = plt.subplots(figsize=(10, 4))
    for priority, group in cohorts.groupby("priority"):
        target = int(group["target_days"].iloc[0])
        axis.plot(group["month"], group["pct_within_target"], marker="o", label=f"{priority} (target {target} days)")
    axis.set_ylim(0, 105)
    axis.set_ylabel("% reported within target")
    axis.set_title("Turnaround against an assumed target, by month of referral")
    axis.legend(fontsize=8)
    figure.autofmt_xdate()
    figure.tight_layout()
    figure.savefig(path, dpi=130)
    plt.close(figure)
