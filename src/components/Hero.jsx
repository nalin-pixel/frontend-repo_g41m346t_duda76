import { Leaf, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-600 to-emerald-700 text-white">
      {/* Spline scene as immersive background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient and radial glow overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_-10%,rgba(255,255,255,0.25),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-8 md:max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur"
          >
            <Leaf className="h-4 w-4" />
            <span>Chef-crafted • Macro-balanced • Delivered fresh</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Healthy meals delivered to match your goals
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/90 text-lg md:text-xl"
          >
            Choose from flexible plans tailored for weight loss, lean muscle gain, or everyday wellness. No cooking, no guesswork—just results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
