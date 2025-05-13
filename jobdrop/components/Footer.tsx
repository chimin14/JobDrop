"use client";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        <div>
          <h4 className="text-xl font-semibold">JobDrop</h4>
          <p className="text-sm text-blue-200">Connecting people through small jobs, easily.</p>
        </div>
        <div className="space-x-6">
          <a href="#how" className="text-blue-200 hover:text-white transition">How It Works</a>
          <a href="/terms" className="text-blue-200 hover:text-white transition">Terms</a>
          <a href="/contact" className="text-blue-200 hover:text-white transition">Contact</a>
        </div>
      </div>
      <div className="text-center text-blue-300 text-sm mt-6">
        © {new Date().getFullYear()} JobDrop. All rights reserved.
      </div>
    </footer>
  );
}
