"use client";

export default function RegisterPage() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Create Your Account</h1>
      <form className="space-y-4 bg-white p-6 rounded shadow">
        <input type="text" placeholder="Full Name" className="w-full border px-4 py-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded" />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button>
        <p className="text-sm text-center text-gray-600 mt-2">Already have an account? <a href="/login" className="text-blue-600">Login</a></p>
      </form>
    </main>
  );
}
