import Link from "next/link"
import { notFound } from "next/navigation"
import { teams } from "@/data/teams"
import FileViewer from "@/components/file-viewer"
import { ChevronLeft } from "lucide-react"

export async function generateStaticParams() {
  return teams.map((team) => ({
    id: team.id.toString(),
  }))
}



export default async function TeamPage({ params }: { params: { id: string } }) {
  const team = teams.find((t) => t.id.toString() === params.id)

  if (!team) {
    notFound()
  }

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
                <Link href="/#teams" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Teams
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to all teams
        </Link>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{team.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{team.description}</p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Team Members</h2>
              <ul className="flex flex-wrap gap-2">
                {team.members.map((member, index) => {
                  const isLeader = member === team.leader
                  return (
                    <li
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${isLeader
                        ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                        : "bg-purple-100 text-purple-700"
                        }`}
                    >
                      {member}
                      {isLeader && <span className="ml-1 text-xs font-semibold">(Leader)</span>}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Files</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Presentation</h3>
                  <FileViewer type="ppt" file={team.files.ppt} />
                </div>
                {/* <div>
                  <h3 className="font-medium text-gray-700 mb-2">Document</h3>
                  <FileViewer type="pdf" file={team.files.pdf} />
                </div> */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Video</h3>
                  <FileViewer type="video" file={team.files.video} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Team english. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
