import { Salad, Flame, Dumbbell, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const plans = [
  {
    id: "loss",
    title: "Weight Loss",
    icon: Salad,
    desc: "Calorie-controlled, high-protein meals to help you lean down without losing energy.",
    price: "$79/week",
    features: ["400–500 kcal/meal", "Low GI carbs", "No refined sugar"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: "gain",
    title: "Muscle Gain",
    icon: Dumbbell,
    desc: "Protein-forward plates with smart carbs to fuel strength and recovery.",
    price: "$89/week",
    features: ["600–750 kcal/meal", "35–50g protein", "Creatine-friendly"],
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "balanced",
    title: "Balanced",
    icon: Flame,
    desc: "Everyday nutrition for busy lifestyles—wholesome, tasty, and macro-smart.",
    price: "$84/week",
    features: ["Balanced macros", "Chef-designed", "Seasonal veggies"],
    color: "from-sky-500 to-blue-600",
  },
];

export default function Plans() {
  const [selected, setSelected] = useState(null);

  const handleChoose = (p) => {
    setSelected(p.id);
    // Fire a cross-component event so other sections can react
    window.dispatchEvent(
      new CustomEvent("planSelected", { detail: { id: p.id, title: p.title } })
    );
    // Smooth scroll to signup
    const auth = document.getElementById("auth");
    if (auth) auth.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="plans" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pick a plan that fits your goal
          </h2>
          <p className="mt-3 text-gray-600">
            Fresh meals delivered 2–3 times per week. Pause, skip, or cancel anytime.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, idx) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              onClick={() => handleChoose(p)}
              className={`relative cursor-pointer rounded-2xl border p-6 shadow-sm transition-all ${
                selected === p.id
                  ? "border-emerald-300 shadow-lg ring-2 ring-emerald-400/50"
                  : "border-gray-200 hover:shadow-md"
              }`}
              animate={{ scale: selected === p.id ? 1.02 : 1 }}
            >
              <div
                className={`inline-flex items-center gap-3 rounded-xl bg-gradient-to-r ${p.color} px-3 py-2 text-white`}
              >
                <p.icon className="h-5 w-5" />
                <span className="font-semibold">{p.title}</span>
              </div>

              <p className="mt-4 text-gray-700">{p.desc}</p>
              <p className="mt-4 text-2xl font-bold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleChoose(p);
                }}
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium text-white transition ${
                  p.id === "gain"
                    ? "bg-orange-600 hover:bg-orange-700"
                    : p.id === "balanced"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-emerald-600 hover:bg-emerald-700"
                }`}
              >
                <span>Choose {p.title}</span>
              </button>

              <AnimatePresence>
                {selected === p.id && (
                  <motion.div
                    key="badge"
                    initial={{ opacity: 0, scale: 0.8, y: -6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="absolute -right-2 -top-2 inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-emerald-700 shadow-md"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-xs font-semibold">Selected</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
