import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Intro Text */}
            <div className="text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                Hi, I'm Noshin Fouzia Tasnim
              </h1>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                I'm a Computer Science and Engineering graduate from BRAC University. I am passionate about learning, teaching, software development and research. My research interests include AI/ML, Image Processing, Biomedical Image Analysis, Neuromorphic Computing and Human Computer Interaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] text-center"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded-lg font-medium transition-all duration-200 
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 text-center"
                >
                  Contact Me
                </a>

                <a
                  href="./CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-500/50 text-cyan-400 py-3 px-6 rounded-lg font-medium transition-all duration-200 
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34, 211, 238, 0.2)] hover:bg-cyan-500/10 text-center"
                >
                  View My CV
                </a>
              </div>
            </div>

            {/* Right side - Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                {/* Animated background circle */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full animate-pulse"></div>
                
                {/* Profile image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-105">
                  {/* Placeholder - Replace with your actual image */}
                  <img
                    src="./profile-image.jpg"
                    alt="Noshin Fouzia Tasnim"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-cyan-400/30 flex items-center justify-center backdrop-blur-sm" style={{display: 'none'}}>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-12 h-12 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <p className="text-white/70 text-sm">Add your photo to<br />public/profile-image.jpg</p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400/30 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};