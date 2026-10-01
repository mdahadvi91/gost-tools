import { useState, useMemo } from "react";
import { ToolPage } from "@components/tool/ToolPage";

type UnitSystem = "metric" | "imperial";

function getCategory(bmi: number): { label: string; color: string } {
  if (bmi < 18.5) return { label: "Underweight", color: "text-aha-cyan" };
  if (bmi < 25) return { label: "Normal weight", color: "text-aha-mint" };
  if (bmi < 30) return { label: "Overweight", color: "text-aha-gold" };
  return { label: "Obese", color: "text-aha-coral" };
}

export default function BmiCalculator() {
  const [units, setUnits] = useState<UnitSystem>("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const result = useMemo(() => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) return null;

    let bmi: number;
    if (units === "metric") {
      const hm = h / 100;
      bmi = w / (hm * hm);
    } else {
      bmi = (w / (h * h)) * 703;
    }

    // Healthy weight range
    let minW: number, maxW: number;
    if (units === "metric") {
      const hm = h / 100;
      minW = 18.5 * hm * hm;
      maxW = 24.9 * hm * hm;
    } else {
      minW = (18.5 * h * h) / 703;
      maxW = (24.9 * h * h) / 703;
    }

    return {
      bmi,
      category: getCategory(bmi),
      minW: minW.toFixed(1),
      maxW: maxW.toFixed(1),
    };
  }, [units, height, weight]);

  return (
    <ToolPage
      toolId="bmi-calculator"
      workspace={
        <div className="space-y-5">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setUnits("metric")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                units === "metric" ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10"
              }`}
            >
              Metric (kg / cm)
            </button>
            <button
              type="button"
              onClick={() => setUnits("imperial")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                units === "imperial" ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10"
              }`}
            >
              Imperial (lb / in)
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">
                Height ({units === "metric" ? "cm" : "in"})
              </span>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder={units === "metric" ? "175" : "69"}
                className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50 text-lg"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">
                Weight ({units === "metric" ? "kg" : "lb"})
              </span>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={units === "metric" ? "70" : "154"}
                className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50 text-lg"
              />
            </label>
          </div>

          {result && (
            <>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-aha-cyan/30 text-center">
                <p className="text-xs uppercase tracking-widest text-aha-cyan font-semibold mb-3">Your BMI</p>
                <p className="font-display font-bold text-5xl bg-logo-gradient bg-clip-text text-transparent">
                  {result.bmi.toFixed(1)}
                </p>
                <p className={`mt-3 font-medium ${result.category.color}`}>
                  {result.category.label}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-aha-mint/5 border border-aha-mint/20 text-center">
                <p className="text-sm text-dark-textSecondary">
                  Healthy weight for your height:{" "}
                  <span className="text-white font-semibold">
                    {result.minW}–{result.maxW} {units === "metric" ? "kg" : "lb"}
                  </span>
                </p>
              </div>

              <p className="text-xs text-dark-textSecondary/70 text-center leading-relaxed">
                ⚠️ BMI is a rough screening tool. It doesn't distinguish muscle from fat.
                Always consult a doctor for medical advice.
              </p>
            </>
          )}

          {!result && (
            <p className="text-sm text-dark-textSecondary text-center py-4">
              Enter your height and weight to calculate BMI
            </p>
          )}
        </div>
      }
    />
  );
}