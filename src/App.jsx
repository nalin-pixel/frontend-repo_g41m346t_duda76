import Hero from './components/Hero';
import Plans from './components/Plans';
import Features from './components/Features';
import AuthCTA from './components/AuthCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Plans />
      <Features />
      <AuthCTA />
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} GreenBite Foods. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#plans" className="hover:text-emerald-700">Plans</a>
            <a href="#auth" className="hover:text-emerald-700">Get started</a>
            <a href="mailto:hello@greenbite.example" className="hover:text-emerald-700">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
