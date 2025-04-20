"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileIcon as FilePresentation, FileText, Video, X } from "lucide-react"

interface FileViewerProps {
  type: "ppt" | "pdf" | "video"
  file: string
}

export default function FileViewer({ type, file }: FileViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const getIcon = () => {
    switch (type) {
      case "ppt":
        return <FilePresentation className="w-5 h-5" />
      case "pdf":
        return <FileText className="w-5 h-5" />
      case "video":
        return <Video className="w-5 h-5" />
    }
  }

  const getButtonText = () => {
    switch (type) {
      case "ppt":
        return "View Presentation"
      case "pdf":
        return "View Document"
      case "video":
        return "Watch Video"
    }
  }

  const renderViewer = () => {
    const commonClasses = "w-full h-full"

    switch (type) {
      case "ppt":
        return (
          <iframe
            src={`${file.includes("embed") ? file : `${file}?start=true&loop=true&delayms=5000`}`}
            className={commonClasses}
            title="Presentation Viewer"
            allowFullScreen
          />
        )
      case "pdf":
        return (
          <embed
            src={file}
            type="application/pdf"
            className={commonClasses}
          />
        )
      case "video":
        const isYouTube =
          file.includes("youtube.com") || file.includes("youtu.be")

        const youTubeURL = file.includes("embed")
          ? `${file}?controls=1&modestbranding=1&rel=0&showinfo=1`
          : `https://www.youtube.com/embed/${file.split("v=")[1]}?controls=1&modestbranding=1&rel=0&showinfo=1`

        return isYouTube ? (
          <iframe
            src={youTubeURL}
            className={commonClasses}
            title="YouTube Video"
            allowFullScreen
          />
        ) : (
          <video
            src={file}
            controls
            className={commonClasses}
          />
        )
    }
  }

  return (
    <>
      <motion.button
        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
      >
        {getIcon()}
        <span>{getButtonText()}</span>
      </motion.button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <motion.div
            className="relative w-full max-w-5xl h-[80vh] sm:h-[90vh] bg-white rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <button
              className="absolute top-2 right-2 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
            {renderViewer()}
          </motion.div>
        </div>
      )}
    </>
  )
}
