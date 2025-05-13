"use client";

export default function BrowseJobsPage() {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Browse Jobs</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Job 1 */}
        <div className="bg-white shadow-md p-4 rounded-md border border-gray-100">
          <h2 className="text-xl font-semibold text-blue-800">Help with groceries</h2>
          <p className="text-gray-600">Location: Ilidža</p>
          <p className="text-gray-600 mb-2">Pay: 20KM</p>
          <p className="text-sm text-gray-500 mb-4">
            Looking for someone to carry groceries to the 4th floor. About 30 minutes of work.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            View Details
          </button>
        </div>

        {/* Job 2 */}
        <div className="bg-white shadow-md p-4 rounded-md border border-gray-100">
          <h2 className="text-xl font-semibold text-blue-800">Dog walking needed</h2>
          <p className="text-gray-600">Location: Novo Sarajevo</p>
          <p className="text-gray-600 mb-2">Pay: 15KM</p>
          <p className="text-sm text-gray-500 mb-4">
            I need someone to walk my dog every afternoon for 5 days while I'm away.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            View Details
          </button>
        </div>

        {/* Job 3 */}
        <div className="bg-white shadow-md p-4 rounded-md border border-gray-100">
          <h2 className="text-xl font-semibold text-blue-800">Math tutoring for 9th grade</h2>
          <p className="text-gray-600">Location: Online or Grbavica</p>
          <p className="text-gray-600 mb-2">Pay: 25KM/hour</p>
          <p className="text-sm text-gray-500 mb-4">
            Need a university student who can tutor math for one hour, 2–3 times per week.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            View Details
          </button>
        </div>

        {/* Job 4 */}
        <div className="bg-white shadow-md p-4 rounded-md border border-gray-100">
          <h2 className="text-xl font-semibold text-blue-800">Fix leaking sink</h2>
          <p className="text-gray-600">Location: Hrasno</p>
          <p className="text-gray-600 mb-2">Pay: 30KM</p>
          <p className="text-sm text-gray-500 mb-4">
            Small plumbing job, should take 1 hour. Tools available, just need help.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            View Details
          </button>
        </div>
      </div>
    </main>
  );
}
