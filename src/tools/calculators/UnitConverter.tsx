import { useState, useMemo } from "react";
import { ToolPage } from "@components/tool/ToolPage";

type Category = "length" | "weight" | "temperature" | "area" | "volume" | "speed" | "time" | "data";

interface Unit {
  id: string;
  label: string;
  toBase: (v: number) => number;
  fromBase: (v: number) => number;
}

const LENGTH: Unit[] = [
  { id: "m", label: "Meter", toBase: (v) => v, fromBase: (v) => v },
  { id: "km", label: "Kilometer", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  { id: "cm", label: "Centimeter", toBase: (v) => v / 100, fromBase: (v) => v * 100 },
  { id: "mm", label: "Millimeter", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: "mi", label: "Mile", toBase: (v) => v * 1609.344, fromBase: (v) => v / 1609.344 },
  { id: "yd", label: "Yard", toBase: (v) => v * 0.9144, fromBase: (v) => v / 0.9144 },
  { id: "ft", label: "Foot", toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
  { id: "in", label: "Inch", toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
];

const WEIGHT: Unit[] = [
  { id: "kg", label: "Kilogram", toBase: (v) => v, fromBase: (v) => v },
  { id: "g", label: "Gram", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: "mg", label: "Milligram", toBase: (v) => v / 1e6, fromBase: (v) => v * 1e6 },
  { id: "lb", label: "Pound", toBase: (v) => v * 0.453592, fromBase: (v) => v / 0.453592 },
  { id: "oz", label: "Ounce", toBase: (v) => v * 0.0283495, fromBase: (v) => v / 0.0283495 },
  { id: "t", label: "Metric ton", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
];

const TEMPERATURE: Unit[] = [
  { id: "c", label: "Celsius", toBase: (v) => v, fromBase: (v) => v },
  { id: "f", label: "Fahrenheit", toBase: (v) => (v - 32) / 1.8, fromBase: (v) => v * 1.8 + 32 },
  { id: "k", label: "Kelvin", toBase: (v) => v - 273.15, fromBase: (v) => v + 273.15 },
];

const AREA: Unit[] = [
  { id: "m2", label: "Square meter", toBase: (v) => v, fromBase: (v) => v },
  { id: "km2", label: "Square km", toBase: (v) => v * 1e6, fromBase: (v) => v / 1e6 },
  { id: "ft2", label: "Square foot", toBase: (v) => v * 0.092903, fromBase: (v) => v / 0.092903 },
  { id: "ac", label: "Acre", toBase: (v) => v * 4046.86, fromBase: (v) => v / 4046.86 },
  { id: "ha", label: "Hectare", toBase: (v) => v * 10000, fromBase: (v) => v / 10000 },
];

const VOLUME: Unit[] = [
  { id: "l", label: "Liter", toBase: (v) => v, fromBase: (v) => v },
  { id: "ml", label: "Milliliter", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: "gal", label: "US gallon", toBase: (v) => v * 3.78541, fromBase: (v) => v / 3.78541 },
  { id: "qt", label: "US quart", toBase: (v) => v * 0.946353, fromBase: (v) => v / 0.946353 },
  { id: "cup", label: "US cup", toBase: (v) => v * 0.236588, fromBase: (v) => v / 0.236588 },
];

const SPEED: Unit[] = [
  { id: "mps", label: "Meters/sec", toBase: (v) => v, fromBase: (v) => v },
  { id: "kph", label: "Km/hour", toBase: (v) => v / 3.6, fromBase: (v) => v * 3.6 },
  { id: "mph", label: "Miles/hour", toBase: (v) => v * 0.44704, fromBase: (v) => v / 0.44704 },
  { id: "knot", label: "Knot", toBase: (v) => v * 0.514444, fromBase: (v) => v / 0.514444 },
];

const TIME: Unit[] = [
  { id: "s", label: "Second", toBase: (v) => v, fromBase: (v) => v },
  { id: "min", label: "Minute", toBase: (v) => v * 60, fromBase: (v) => v / 60 },
  { id: "h", label: "Hour", toBase: (v) => v * 3600, fromBase: (v) => v / 3600 },
  { id: "d", label: "Day", toBase: (v) => v * 86400, fromBase: (v) => v / 86400 },
  { id: "wk", label: "Week", toBase: (v) => v * 604800, fromBase: (v) => v / 604800 },
];

const DATA: Unit[] = [
  { id: "b", label: "Byte", toBase: (v) => v, fromBase: (v) => v },
  { id: "kb", label: "Kilobyte", toBase: (v) => v * 1024, fromBase: (v) => v / 1024 },
  { id: "mb", label: "Megabyte", toBase: (v) => v * 1048576, fromBase: (v) => v / 1048576 },
  { id: "gb", label: "Gigabyte", toBase: (v) => v * 1073741824, fromBase: (v) => v / 1073741824 },
  { id: "tb", label: "Terabyte", toBase: (v) => v * 1099511627776, fromBase: (v) => v / 1099511627776 },
];

const CATEGORIES: Record<Category, Unit[]> = {
  length: LENGTH,
  weight: WEIGHT,
  temperature: TEMPERATURE,
  area: AREA,
  volume: VOLUME,
  speed: SPEED,
  time: TIME,
  data: DATA,
};

const CATEGORY_LABELS: Record<Category, string> = {
  length: "Length",
  weight: "Weight",
  temperature: "Temperature",
  area: "Area",
  volume: "Volume",
  speed: "Speed",
  time: "Time",
  data: "Data",
};

function fmt(n: number): string {
  if (!isFinite(n)) return "";
  if (Math.abs(n) >= 1e10 || (Math.abs(n) < 1e-4 && n !== 0)) return n.toExponential(4);
  return parseFloat(n.toFixed(6)).toString();
}

export default function UnitConverter() {
  const [category, setCategory] = useState<Category>("length");
  const [value, setValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("m");

  const units = CATEGORIES[category];

  const results = useMemo(() => {
    const v = parseFloat(value);
    if (isNaN(v)) return [];
    const from = units.find((u) => u.id === fromUnit) ?? units[0];
    const base = from.toBase(v);
    return units.map((u) => ({ unit: u, value: fmt(u.fromBase(base)) }));
  }, [value, fromUnit, units]);

  const changeCategory = (c: Category) => {
    setCategory(c);
    setFromUnit(CATEGORIES[c][0].id);
  };

  return (
    <ToolPage
      toolId="unit-converter"
      workspace={
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(CATEGORIES) as Category[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => changeCategory(c)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  category === c ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10 hover:text-white"
                }`}
              >
                {CATEGORY_LABELS[c]}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Value</span>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-aha-cyan/50 text-lg"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">From</span>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-aha-cyan/50"
              >
                {units.map((u) => (
                  <option key={u.id} value={u.id} className="bg-dark-surface">{u.label}</option>
                ))}
              </select>
            </label>
          </div>

          {results.length > 0 && (
            <div className="space-y-2">
              {results.map((r) => {
                const isFrom = r.unit.id === fromUnit;
                return (
                  <div
                    key={r.unit.id}
                    className={`flex items-center justify-between gap-4 p-4 rounded-xl border ${
                      isFrom ? "bg-aha-cyan/5 border-aha-cyan/30" : "bg-white/[0.02] border-white/10"
                    }`}
                  >
                    <span className={`text-sm ${isFrom ? "text-aha-cyan font-medium" : "text-dark-textSecondary"}`}>
                      {r.unit.label}
                    </span>
                    <span className="font-mono text-white text-sm sm:text-base break-all text-right">
                      {r.value}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      }
    />
  );
}