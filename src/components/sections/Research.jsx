import { RevealOnScroll } from "../RevealOnScroll";

export const Research = () => {
  const researchInterests = [
    "Artificial Intelligence & Machine Learning",
    "Image Processing",
    "Biomedical Image Analysis",
    "Neuromorphic Computing",
    "Human Computer Interaction",
    "Computer Vision",
    "Deep Learning",
    "Neural Networks"
  ];

  return (
    <section
      id="research"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Research
          </h2>

          {/* Research Interests Section - Full Width */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">
             Research Interests
            </h3>
            
            <p className="text-gray-300 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
              I am passionate about exploring cutting-edge technologies and their applications 
              in solving real-world problems. My research interests span across multiple domains 
              of computer science and engineering.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {researchInterests.map((interest, key) => (
                <div
                  key={key}
                  className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)] text-center"
                >
                  <span className="text-blue-300 font-medium text-sm">
                    {interest}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-lg border border-blue-500/20 max-w-4xl mx-auto">
              <p className="text-gray-300 text-sm italic text-center">
                "I am actively seeking research opportunities that combine theoretical knowledge 
                with practical applications, particularly in AI/ML and biomedical computing domains."
              </p>
            </div>
          </div>

          {/* Research Experience Section - Full Width */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-purple-400">
             Research Experience
              </h3>

              <div className="space-y-6">
                {/* Undergraduate Thesis */}
                <div className="border-l-4 border-purple-400/50 pl-6 hover:border-purple-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Classification of Alzheimer's and Dementia subtypes using R-STDP Driven Spiking Neural Networks</h4>
                    <span className="text-purple-400 font-medium text-sm">2024</span>
                  </div>
                  <p className="text-gray-300 mb-2 font-medium">AI/ML, Neuroimaging, Undergraduate Thesis</p>
                  <p className="text-gray-300 mb-3 text-sm">
                    <strong>Supervisors:</strong> Dr. Md. Golam Rabiul Alam, Zayed Humayun | <strong>Institution:</strong> BRAC University
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    Co-developed an SNN autoencoder model for classification of MRI images of demented and non-demented patients. 
                    We built a primary dataset by collecting brain MRI images from the National Institute of Neurosciences for 8 months with IRB approval.
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    My contributions to this thesis included data collection, building the model and hyperparameter tuning for the best results. 
                    The model incorporates Forward-Forward Learning and R-STDP for training without backpropagation and ensemble 
                    classifier for testing. The model achieved a 77.92% accuracy and 79.47% precision on demented vs non-demented 
                    classification. The model was optimized using a CNN branch for feature extraction which achieved a 86.98% accuracy.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-6 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-purple-500/25"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Collaborate with Me
                </a>
              </div>
            </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};