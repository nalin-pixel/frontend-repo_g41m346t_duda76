import { Salad, Flame, Dumbbell } from "lucide-react";

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
  return (
    <section id="plans" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pick a plan that fits your goal
          </h2>
          <p className="mt-3 text-gray-600">
            Fresh meals delivered 2–3 times per week. Pause, skip, or cancel anytime.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <article key={p.id} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className={`inline-flex items-center gap-3 rounded-xl bg-gradient-to-r ${p.color} px-3 py-2 text-white`}>
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
              <a href="#auth" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700 transition">
                Choose {p.title}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
