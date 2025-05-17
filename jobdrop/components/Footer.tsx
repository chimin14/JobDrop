"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
     <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-6">

        {/* Logo */}
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          <Image src="/logo.svg" alt="JobDrop Logo" width={48} height={48} className="mr-3 invert" />
          <span className="text-2xl font-semibold">JobDrop</span>
        </Link>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-8 py-4 text-white lg:text-left">

        <div className="container p-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* About */}
            <div className="mb-6 md:mb-0">
              <h5 className="mb-2 font-medium uppercase">About JobDrop</h5>
              <p className="mb-8">
                JobDrop is a platform designed to connect people for short-term jobs and everyday tasks.
                Whether you need help or want to earn extra cash, JobDrop makes it fast, safe, and local.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">Explore</h2>
                <ul className="text-gray-100 font-medium">
                  <li className="mb-4">
                    <Link href="/browse" className="hover:underline">Browse Jobs</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/post" className="hover:underline">Post a Job</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#how" className="hover:underline">How It Works</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                <ul className="text-gray-100 font-medium">
                  <li className="mb-4">
                    <a
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    >
                      Terms & Conditions
                      </a>
                  </li>
                  <li className="mb-4">
                    <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    >
                      Privacy Policy
                      </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">Contact</h2>
                <ul className="text-gray-100 font-medium">
                  <li className="mb-4">
                    <Link href="mailto:jobdrop.team@gmail.com" className="hover:underline">jobdrop.team@gmail.com</Link>
                  </li>
                  <li>
                    <p>+387 62 888 321</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-blue-200 sm:mx-auto lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-blue-200 sm:text-center">
              &copy; {new Date().getFullYear()} JobDrop. All rights reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 8 19">
                  <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                </svg>
              </Link>
              <Link href="mailto:jobdrop.team@gmail.com" className="hover:text-white">
                <span className="sr-only">Email</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
