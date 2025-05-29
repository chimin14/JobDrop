"use client";

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About JobDrop</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Connecting communities through trust and small acts of help
        </p>
      </div>

      <section className="space-y-16 text-gray-700 leading-relaxed">
        {/* Story Section with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              JobDrop was born from a simple moment — a message from a grandma who needed groceries,
              and a grandchild who couldn't help at that moment. That one message made us realize how
              many people around us are in similar situations — needing help, offering help, but not knowing how to connect.
            </p>
            <p className="text-lg">
              In Bosnia and Herzegovina, people rely on Facebook groups to find someone to walk a dog,
              help with homework, or carry heavy bags. But those methods are unorganized and risky.
              That's why we created <strong className="text-blue-700">JobDrop</strong> — a place where small, everyday jobs meet trustworthy people.
            </p>
          </div>
          
          <div className="relative">
            <Image 
              src="/inspo.svg" 
              alt="The WhatsApp message that inspired JobDrop - a grandmother asking for help with groceries"
              width={400}
              height={600}
              className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
              <span className="text-2xl">💡</span>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="border-l-4 border-blue-500 pl-8 py-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            To connect communities through small, local jobs. We want to empower students, support families,
            and make informal work safer and more accessible.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">$</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Middleman Fees</h3>
              <p className="text-base text-gray-600">Users connect directly without extra costs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-lg font-bold">BA</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Built for Bosnia</h3>
              <p className="text-base text-gray-600">Designed specifically for local needs and culture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Trusted Community</h3>
              <p className="text-base text-gray-600">Verified users with reviews and local support</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Team</h2>
          <p className="text-lg text-gray-700 mb-8">
            We are five students with different strengths — design, development, business and heart — united by a
            shared goal: to make help more reachable and work more flexible.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">AJ</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Amina Jusić — The Visionary</h3>
                <p className="text-base text-gray-600">The one who said "what if..." and made it happen. Keeps everyone on track while juggling frontend magic and backend wizardry. <span className="text-gray-500">(Front-end UI & state, back-end integration, Socket.IO real-time, overall coordination)</span></p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">DČ</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Džejlan Čolakhodžić — The Perfectionist</h3>
                <p className="text-base text-gray-600">If something looks good, Džejlan probably touched it. Has an eye for detail that makes designers jealous and refuses to let anything look "just okay." <span className="text-gray-500">(Front-end layouts, responsive design, component library)</span></p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">HM</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Harun Mezit — The Foundation Builder</h3>
                <p className="text-base text-gray-600">The quiet force who makes sure everything actually works behind the scenes. While others dream, Harun builds the engine that powers those dreams. <span className="text-gray-500">(Back-end APIs, authentication, database schema; produced all UML diagrams)</span></p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">DŠ</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Dejan Šućur — The Orchestrator</h3>
                <p className="text-base text-gray-600">The one who turns chaos into order. Keeps track of who's doing what, when it's due, and somehow makes sure it all comes together beautifully. <span className="text-gray-500">(Back-end modules; deployment scripts; Trello sprint management)</span></p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">OB</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Omer Bečić — The Quality Guardian</h3>
                <p className="text-base text-gray-600">The one who asks "but what if this breaks?" and actually fixes it before it does. Makes sure everything not only works, but works beautifully and is documented perfectly. <span className="text-gray-500">(Back-end reviews/ratings, file-upload service, LaTeX documentation, Figma Design)</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center py-12 border-t border-gray-200">
          <p className="text-xl font-medium text-gray-800 italic">
            Together, we believe in local help, real people, and good work done simply.
          </p>
        </div>
      </section>
    </main>
  );
}