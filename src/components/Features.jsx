import { Clock, UtensilsCrossed, Recycle, Truck } from "lucide-react";

export default function Features() {
  const items = [
    { icon: UtensilsCrossed, title: "Chef-crafted", text: "Restaurant-quality meals using seasonal produce." },
    { icon: Clock, title: "Ready in 2 min", text: "Microwave or pan heat—no prep, no cleanup." },
    { icon: Truck, title: "Flexible delivery", text: "Choose delivery days that work for your schedule." },
    { icon: Recycle, title: "Eco packaging", text: "Recyclable containers and carbon-neutral shipping." },
  ];

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
