import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-xl font-bold text-purple-600">
              English
            </Link>
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-center">
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
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
          About This Project
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-8 max-w-3xl text-center md:text-left mx-auto md:mx-0">
          Discover how our student teams bridged the gap between English literature and Sustainable development initiatives. Each project showcases original interpretations of five thoughtfully chosen literary works, creatively aligned with specific Sustainable Development Goals (SDGs). Through engaging presentations and dynamic videos — all accessible directly in your browser — these projects offer a unique academic and creative exploration.
        </p>


        <div className="bg-white rounded-xl shadow-md p-6 mb-6 max-w-2xl mx-auto md:mx-0">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">Guidance</h2>
          <p className="text-gray-700 text-base">
            This initiative is guided by our English Professor:{' '}
            <a
              href="https://www.srmist.edu.in/faculty/ms-b-monika-nair/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-purple-700 hover:underline"
            >
              Dr. Monika Nair B
            </a>
          </p>

        </div>

        <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto md:mx-0">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">Website Credits</h2>
          <p className="text-gray-700 text-base mb-2">
            <span className="font-medium">Website Created By:</span> Sourav Kumar
          </p>
          <p className="text-gray-700 text-base">
            <span className="font-medium">Data Collected & Compiled By:</span> Rishika Raj
          </p>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} English. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
