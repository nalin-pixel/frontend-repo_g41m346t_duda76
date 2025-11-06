import { Clock, UtensilsCrossed, Recycle, Truck } from "lucide-react";
import { motion } from "framer-motion";

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
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
