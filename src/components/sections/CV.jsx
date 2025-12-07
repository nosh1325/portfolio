import { RevealOnScroll } from "../RevealOnScroll";

export const CV = () => {
  return (
    <section
      id="cv"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My CV
          </h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <div className="text-center mb-8">
              <p className="text-gray-300 text-lg mb-6">
                Download or view my curriculum vitae to learn more about my professional experience, 
                education, and skills.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Download CV Button */}
                <a
                  href="/CV.pdf"
                  download="Noshin Fouzia Tasnim_CV.pdf"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-blue-500/25"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </a>
                
                {/* View CV Button */}
                <a
                  href="/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  View Online
                </a>
              </div>
            </div>
            

            
            <div className="mt-6 text-sm text-gray-400 text-center">
              <p>Last updated: December 2025 • PDF format • 2 pages</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};