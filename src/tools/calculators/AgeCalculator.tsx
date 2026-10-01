import { useState, useMemo } from "react";
import { ToolPage } from "@components/tool/ToolPage";

function diffAge(birth: Date, ref: Date) {
  let years = ref.getFullYear() - birth.getFullYear();
  let months = ref.getMonth() - birth.getMonth();
  let days = ref.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(ref.getFullYear(), ref.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor((ref.getTime() - birth.getTime()) / 86400000);
  const totalWeeks = Math.floor(totalDays / 7);
  const totalHours = totalDays * 24;
  const totalMinutes = totalHours * 60;

  return { years, months, days, totalDays, totalWeeks, totalHours, totalMinutes };
}

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function AgeCalculator() {
  const [birth, setBirth] = useState("");
  const [refDate, setRefDate] = useState(() => new Date().toISOString().split("T")[0]);

  const result = useMemo(() => {
    if (!birth) return null;
    const b = new Date(birth);
    const r = new Date(refDate);
    if (isNaN(b.getTime()) || isNaN(r.getTime()) || b > r) return null;

    const age = diffAge(b, r);

    // Next birthday
    const today = new Date(r);
    const next = new Date(today.getFullYear(), b.getMonth(), b.getDate());
    if (next < today) next.setFullYear(today.getFullYear() + 1);
    const daysToNext = Math.ceil((next.getTime() - today.getTime()) / 86400000);

    return {
      ...age,
      bornDay: DAYS[b.getDay()],
      daysToNext,
    };
  }, [birth, refDate]);

  return (
    <ToolPage
      toolId="age-calculator"
      workspace={
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Date of birth</span>
              <input
                type="date"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
                className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-aha-cyan/50"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Reference date</span>
              <input
                type="date"
                value={refDate}
                onChange={(e) => setRefDate(e.target.value)}
                className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-aha-cyan/50"
              />
            </label>
          </div>

          {result && (
            <>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-aha-cyan/30 text-center">
                <p className="text-xs uppercase tracking-widest text-aha-cyan font-semibold mb-3">Exact age</p>
                <p className="font-display font-bold text-3xl sm:text-4xl bg-logo-gradient bg-clip-text text-transparent">
                  {result.years}y {result.months}m {result.days}d
                </p>
                <p className="mt-3 text-sm text-dark-textSecondary">
                  You were born on a <span className="text-white font-medium">{result.bornDay}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Months", value: result.years * 12 + result.months },
                  { label: "Weeks", value: result.totalWeeks.toLocaleString() },
                  { label: "Days", value: result.totalDays.toLocaleString() },
                  { label: "Hours", value: result.totalHours.toLocaleString() },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="font-display font-bold text-xl text-white">{s.value}</p>
                    <p className="text-xs text-dark-textSecondary mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-aha-violet/5 border border-aha-violet/20 text-center">
                <p className="text-sm text-dark-textSecondary">
                  🎂 Next birthday in <span className="text-white font-semibold">{result.daysToNext}</span> day{result.daysToNext === 1 ? "" : "s"}
                </p>
              </div>
            </>
          )}

          {!birth && (
            <p className="text-sm text-dark-textSecondary text-center py-4">
              Select your birth date to see your exact age
            </p>
          )}
        </div>
      }
    />
  );
}