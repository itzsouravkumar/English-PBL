"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FileText, FileIcon as FilePresentation, Video } from "lucide-react"
import type { Team } from "@/data/teams"

interface TeamCardProps {
  team: Team
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden h-full"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{team.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{team.description}</p>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex -space-x-2">
            {team.members.slice(0, 3).map((member, index) => {
              const isLeader = member === team.leader
              return (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium ${isLeader ? 'bg-yellow-100 text-yellow-700' : 'bg-purple-100 text-purple-700'
                    }`}
                  title={`${member}${isLeader ? " (Leader)" : ""}`}
                >
                  {member.charAt(0)}
                </div>
              )
            })}

            {team.members.length > 3 && (
              <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-700">
                +{team.members.length - 3}
              </div>
            )}
          </div>
          <span className="text-sm text-gray-500">{team.members.length} members</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center text-gray-500" title="Presentation">
            <FilePresentation className="w-4 h-4" />
          </div>
          {/* <div className="flex items-center text-gray-500" title="Document">
            <FileText className="w-4 h-4" />
          </div> */}
          <div className="flex items-center text-gray-500" title="Video">
            <Video className="w-4 h-4" />
          </div>
        </div>

        <Link
          href={`/teams/${team.id}`}
          className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-center transition-colors"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  )
}
