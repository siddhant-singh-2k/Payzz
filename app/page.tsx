"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';



export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    setEmail('');
    alert('Thanks for your interest! We\'ll keep you updated.');
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-8 md:px-16 border-b border-gray-800">
        <div className="flex items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text">Payzz</div>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="#features" className="hover:text-blue-400 transition">Features</Link>
          <Link href="#how-it-works" className="hover:text-blue-400 transition">How It Works</Link>
        </div>
        <div className="flex space-x-4">
          <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition">Sign In</button>
          <button className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8 md:px-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fast, Secure <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Transactions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Send and receive money instantly with our powerful transaction platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-medium">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full border border-gray-600 hover:border-blue-500 transition font-medium">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-80">
            <div className="absolute w-full h-full rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 opacity-70 blur-lg"></div>
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-2xl font-bold mb-6">Quick Transfer</div>
                <div className="bg-gray-700 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-400">Amount</div>
                    <div className="text-xl font-bold">$250.00</div>
                  </div>
                  <div className="h-10 w-full bg-gray-600 rounded"></div>
                </div>
                <button className="w-full py-3 bg-blue-600 rounded-lg font-medium">Send Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 md:px-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-16">Fast & Secure Transactions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Secure Transactions</h3>
            <p className="text-gray-300">Bank-level encryption and fraud protection for all your payments.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Transfers</h3>
            <p className="text-gray-300">Send money in seconds, not days. Real-time processing for all transactions.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Low Fees</h3>
            <p className="text-gray-300">Competitive rates with no hidden fees. Pay only for what you use.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-8 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-16">Simple to Use</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-gray-800 rounded-xl p-6 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                        <span className="text-lg font-bold">JD</span>
                      </div>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-gray-400">@johndoe</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold">$150</div>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                        <span className="text-lg font-bold">JS</span>
                      </div>
                      <div>
                        <div className="font-medium">Jane Smith</div>
                        <div className="text-sm text-gray-400">@janesmith</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold">$75</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                        <span className="text-lg font-bold">RJ</span>
                      </div>
                      <div>
                        <div className="font-medium">Robert Johnson</div>
                        <div className="text-sm text-gray-400">@robert</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold">$200</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl blur-md -z-10"></div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Create Your Account</h3>
                  <p className="text-gray-300">Sign up in seconds with just your email and basic information.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Connect Your Payment Method</h3>
                  <p className="text-gray-300">Link your bank account or card to start making transactions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Send & Receive Money</h3>
                  <p className="text-gray-300">Transfer funds to anyone, anywhere with just a few taps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 md:px-16 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who trust Payzz for their daily transactions.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
              Get Started
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-2">Payzz</div>
            <p className="text-gray-400">Fast, secure transactions made easy.</p>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">Support</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Payzz. All rights reserved.
        </div>
      </footer>
    </main>
  );
}