import { useState, useMemo } from "react";
import { ToolPage } from "@components/tool/ToolPage";

function countBusinessDays(start: Date, end: Date): number {
  let count = 0;
  const cur = new Date(start);
  while (cur < end) {
    const day = cur.getDay();
    if (day !== 0 && day !== 6) count++;
    cur.setDate(cur.getDate() + 1);
  }
  return count;
}

export default function DateDifference() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const result = useMemo(() => {
    if (!start || !end) return null;
    const s = new Date(start);
    const e = new Date(end);
    if (isNaN(s.getTime()) || isNaN(e.getTime())) return null;

    const [from, to] = s <= e ? [s, e] : [e, s];
    const totalMs = to.getTime() - from.getTime();
    const totalDays = Math.floor(totalMs / 86400000);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = Math.floor(totalMs / 3600000);
    const totalMinutes = Math.floor(totalMs / 60000);

    let years = to.getFullYear() - from.getFullYear();
    let months = to.getMonth() - from.getMonth();
    let days = to.getDate() - from.getDate();
    if (days < 0) {
      months--;
      const prev = new Date(to.getFullYear(), to.getMonth(), 0);
      days += prev.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const business = countBusinessDays(from, to);

    return { years, months, days, totalDays, totalWeeks, totalHours, totalMinutes, business };
  }, [start, end]);

  return (
    <ToolPage
      toolId="date-difference"
      workspace={
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Start date</span>
              <input type="date" value={start} onChange={(e) => setStart(e.target.value)} className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-aha-cyan/50" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">End date</span>
              <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-aha-cyan/50" />
            </label>
          </div>

          {result && (
            <>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-aha-cyan/30 text-center">
                <p className="text-xs uppercase tracking-widest text-aha-cyan font-semibold mb-3">Difference</p>
                <p className="font-display font-bold text-3xl sm:text-4xl bg-logo-gradient bg-clip-text text-transparent">
                  {result.years}y {result.months}m {result.days}d
                </p>
                <p className="mt-3 text-sm text-dark-textSecondary">
                  {result.totalDays.toLocaleString()} days total
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Weeks", value: result.totalWeeks.toLocaleString() },
                  { label: "Days", value: result.totalDays.toLocaleString() },
                  { label: "Business days", value: result.business.toLocaleString() },
                  { label: "Hours", value: result.totalHours.toLocaleString() },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="font-display font-bold text-xl text-white">{s.value}</p>
                    <p className="text-xs text-dark-textSecondary mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {(!start || !end) && (
            <p className="text-sm text-dark-textSecondary text-center py-4">
              Select two dates to compare
            </p>
          )}
        </div>
      }
    />
  );
}