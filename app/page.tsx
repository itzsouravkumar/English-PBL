"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { teams } from "@/data/teams"
import TeamCard from "@/components/team-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-purple-600">
              English
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#teams" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Team Project Showcase
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore how our teams connected English literature with Sustainable development goals. Each project presents creative interpretations of five selected English books, linked to specific SDGs themes — through presentations and videos, all viewable directly in your browser.
          </motion.p>
        </section>

        <section id="teams" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TeamCard team={team} />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} English. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
