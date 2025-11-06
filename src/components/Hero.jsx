import { Leaf, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-600 to-emerald-700 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start gap-8 md:max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Leaf className="h-4 w-4" />
            <span>Chef-crafted • Macro-balanced • Delivered fresh</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Healthy meals delivered to match your goals
          </h1>
          <p className="text-white/90 text-lg md:text-xl">
            Choose from flexible plans tailored for weight loss, lean muscle gain, or everyday wellness. No cooking, no guesswork—just results.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#plans"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-emerald-700 shadow-sm hover:shadow-md transition"
            >
              Explore plans
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#auth"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              Get started
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_-10%,rgba(255,255,255,0.25),transparent_50%)]" />
    </section>
  );
}
