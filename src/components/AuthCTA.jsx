import { Mail, Phone } from "lucide-react";

export default function AuthCTA() {
  const whatsappNumber = "15551234567"; // change to your business number (digits only)

  return (
    <section id="auth" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Create your account
            </h2>
            <p className="mt-3 text-gray-600">
              Sign up with your email to manage deliveries, track macros, and personalize your plan.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-2 flex items-center rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-emerald-600">
                <Mail className="ml-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-r-lg border-0 px-3 py-3 outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-emerald-600 px-4 py-3 font-medium text-white hover:bg-emerald-700 transition"
                title="Authentication backend will be connected next"
              >
                Continue
              </button>
              <p className="mt-2 text-xs text-gray-500">
                By continuing you agree to our Terms and Privacy Policy.
              </p>
            </form>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Prefer WhatsApp?</h3>
            <p className="mt-2 text-gray-600">
              Tap below to chat with our nutrition team about the right plan for you.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 font-medium text-emerald-700 hover:bg-emerald-100 transition"
            >
              <Phone className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <p className="mt-2 text-xs text-gray-500">
              We typically reply within a few minutes during business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
