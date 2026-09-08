'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-primary-500">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">📚 RBS Classes</h1>
          <div className="space-x-4">
            <Link href="/auth/login" className="hover:text-accent-500 transition">
              Login
            </Link>
            <Link href="/auth/signup" className="hover:text-accent-500 transition">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Learn. Practice. Grow.</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          एक ऐसा learning ecosystem जहाँ students सीखें, practice करें और अपनी performance को लगातार improve करें।
        </p>
        <div className="space-x-4">
          <Button className="bg-accent-500 hover:bg-accent-600">
            <Link href="/auth/signup">शुरू करें</Link>
          </Button>
          <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600">
            और जानें
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-16 bg-primary-800/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">RBS Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎥', title: 'Live Classes', desc: 'Live Interactive Classes से सीखें' },
              { icon: '📚', title: 'Study Materials', desc: 'Comprehensive Notes और Resources' },
              { icon: '📝', title: 'Tests & Quizzes', desc: 'Practice करें और Performance Track करें' },
              { icon: '🤖', title: 'AI Tutor', desc: 'Personal AI Doubt Solver' },
              { icon: '📊', title: 'Analytics', desc: 'Detailed Performance Analysis' },
              { icon: '🏆', title: 'Certificates', desc: 'Industry-Recognized Certificates' },
            ].map((feature, i) => (
              <div key={i} className="bg-primary-700 p-6 rounded-lg border border-primary-500 hover:border-accent-500 transition">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-primary-700/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { num: '10,000+', label: 'Active Students' },
            { num: '500+', label: 'Courses' },
            { num: '50+', label: 'Expert Teachers' },
            { num: '100+', label: 'Exam Categories' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-accent-500 mb-2">{stat.num}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">आभी शुरू करें</h3>
        <p className="text-lg text-gray-300 mb-8">हजारों students पहले से RBS Classes के स��थ सीख रहे हैं</p>
        <Button className="bg-accent-500 hover:bg-accent-600 text-lg px-8 py-3">
          <Link href="/auth/signup">अपना Account बनाएं</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-primary-500 text-center text-gray-400">
        <p>&copy; 2026 RBS Classes. All rights reserved.</p>
        <div className="mt-4 space-x-6 text-sm">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
          <Link href="#" className="hover:text-white">Contact Us</Link>
        </div>
      </footer>
    </div>
  )
}
