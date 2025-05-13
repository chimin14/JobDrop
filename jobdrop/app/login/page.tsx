"use client";

export default function LoginPage() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Login to JobDrop</h1>
      <form className="space-y-4 bg-white p-6 rounded shadow">
        <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded" />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
        <p className="text-sm text-center text-gray-600 mt-2">Don't have an account? <a href="/register" className="text-blue-600">Register</a></p>
      </form>
    </main>
  );
}
