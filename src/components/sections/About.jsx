import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const languages = [
    "Python", "C/C++", "Javascript", "PHP", "SQL", "HTML", "CSS", "RISC-V", "x86 assembly"
  ];

  const frameworksLibraries = [
    "Laravel", "React.js", "Next.js", "PyTorch", "Matplotlib", "TensorFlow", "Pandas", "Scikit-learn"
  ];

  const developmentTools = [
    "LaTeX", "Git", "Github", "Postman", "Jira", "Flex", "Bison"
  ];

  const databases = [
    "mySQL", "PostgreSQL"
  ];

  const hardwareNetworking = [
    "LTSpice", "Quartus", "Verilog HDL", "Cisco Packet Tracer", "Wireshark"
  ];

  const microcontrollers = [
    "STM32", "Arduino", "RaspberryPi"
  ];

  const officeTools = [
    "MS Office", "MS Excel", "MS Powerpoint"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-12"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          {/*<div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all mb-6">
            //<p className="text-gray-300 mb-4">
            //</p>
          //</div>*/}

          {/* Professional Experience Sections */}
          <div className="space-y-8 mb-8">
            
            {/* Education Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-blue-400">
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400/50 pl-6 hover:border-blue-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science and Engineering</h4>
                    <span className="text-blue-400 font-medium">Oct 2021 - Oct 2025</span>
                  </div>
                  <p className="text-gray-300 mb-2 font-medium">BRAC University, Dhaka</p>
                  <div className="text-gray-400 space-y-1">
                    <p><strong>CGPA:</strong> 3.93/4.00 • <strong>Credits Completed:</strong> 136</p>
                    <p><strong>Notable Courses:</strong> Data Structure & Algorithms, Artificial Intelligence, Data Science, Computer Networks, Computer Architecture, Microprocessors, Software Engineering, Database Systems</p>
                  </div>
                </div>

                <div className="border-l-4 border-blue-400/50 pl-6 hover:border-blue-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white">Higher Secondary School Certificate (Science)</h4>
                    <span className="text-blue-400 font-medium">July 2018 - Jan 2021</span>
                  </div>
                  <p className="text-gray-300 mb-2 font-medium">Viqarunnisa Noon School and College, Dhaka</p>
                  <p className="text-gray-400">GPA: 5.00/5.00 • Science Group</p>
                </div>

                <div className="border-l-4 border-blue-400/50 pl-6 hover:border-blue-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white">Secondary School Certificate (Science)</h4>
                    <span className="text-blue-400 font-medium">Jan 2008 - Apr 2018</span>
                  </div>
                  <p className="text-gray-300 mb-2 font-medium">Viqarunnisa Noon School and College, Dhaka</p>
                  <p className="text-gray-400">GPA: 5.00/5.00 • Science Group</p>
                </div>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-purple-400">
                Work Experience
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-400/50 pl-6 hover:border-purple-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white">Undergraduate Teaching Assistant / Student Tutor</h4>
                    <span className="text-purple-400 font-medium">Jun 2024 - May 2025</span>
                  </div>
                  <p className="text-gray-300 mb-2 font-medium">CSE Department, BRAC University</p>
                  <ul className="text-gray-400 space-y-1 list-disc list-inside">
                    <li>Assigned to Algorithms course and helped during lab classes for assigned section</li>
                    <li>Checked lab quiz scripts and assignments</li>
                    <li>Mentored students offering 12 hours consultation each week</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400/50 pl-6 hover:border-purple-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white">Executive</h4>
                    <span className="text-purple-400 font-medium">Jan 2024 - Dec 2024</span>
                  </div>
                  <p className="text-gray-300 mb-2 font-medium">BASIS Students Forum BRACU Chapter</p>
                  <ul className="text-gray-400 space-y-1 list-disc list-inside">
                    <li>Coordinated between BASIS and BUCC to organize different events and seminars</li>
                    <li>Contributed in meetings and planning for NASA Space Apps Challenge 2024</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400/50 pl-6 hover:border-purple-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white">Intern and Project Management Coordinator</h4>
                    <span className="text-purple-400 font-medium">Sep 2021 - Aug 2022</span>
                  </div>
                  <p className="text-gray-300 mb-2 font-medium">Awareness 360</p>
                  <ul className="text-gray-400 space-y-1 list-disc list-inside">
                    <li>Best intern award for project management team and eventually appointed as staff member</li>
                    <li>Led presentations, meetings and created trainer manual for project management</li>
                    <li>Conducted project management training, mentored new interns and conducted own project following SDGs</li>
                    <li>Helped arrange Youth Development Program and mentored fellows</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Volunteer Experience Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-green-400">
                 Extracurriculars
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400/50 pl-6 hover:border-green-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white">Assistant Director</h4>
                    <span className="text-green-400 font-medium">Oct 2023 - Dec 2024</span>
                  </div>
                  <p className="text-gray-300 mb-2 font-medium">Event Management Department, BRAC University Computer Club (BUCC)</p>
                  <ul className="text-gray-400 space-y-1 list-disc list-inside">
                    <li>Successfully organized multiple large scale events and led volunteer teams collaborating with different departments</li>
                    <li>Managed permissions and received guests and event sponsors</li>
                    <li>Experienced in food allotment and arranging venue, created a guideline book on venue booking rules in accordance with university policies</li>
                    <li>Planned and supervised activities of BUCC Study Corner</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-400/50 pl-6 hover:border-green-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white">Organizer, Intrahacktive 1.0</h4>
                    <span className="text-green-400 font-medium">Oct 2024 - Nov 2024</span>
                  </div>
                  <p className="text-gray-300 mb-2 font-medium">Event Management Department, BRAC University Computer Club (BUCC)</p>
                  <ul className="text-gray-400 space-y-1 list-disc list-inside">
                    <li>Helped with planning and execution of the entire event and organized hackathon, database wizard, debugger</li>
                    <li>Led the logistics team and worked with volunteers, guest reception</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-400/50 pl-6 hover:border-green-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white">Member, IEEE Computer Society</h4>
                    <span className="text-green-400 font-medium">Apr 2022 - Dec 2022</span>
                  </div>
                  <p className="text-gray-300 mb-2 font-medium">IEEE BRAC University Student Branch</p>
                  <ul className="text-gray-400 space-y-1 list-disc list-inside">
                    <li>Participated in different workshops on AI/ML and Cybersecurity</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Honors and Awards Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-yellow-400">
                Honors and Awards
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400/50 pl-6 hover:border-yellow-400 transition-colors">
                  <h4 className="text-xl font-semibold text-white mb-2">Vice Chancellor's List</h4>
                  <p className="text-gray-400">For obtaining a GPA of 3.9+ for 9 semesters</p>
                </div>

                <div className="border-l-4 border-yellow-400/50 pl-6 hover:border-yellow-400 transition-colors">
                  <h4 className="text-xl font-semibold text-white mb-2">Dean's List</h4>
                  <p className="text-gray-400">For obtaining a GPA of 3.7+</p>
                </div>

                <div className="border-l-4 border-yellow-400/50 pl-6 hover:border-yellow-400 transition-colors">
                  <h4 className="text-xl font-semibold text-white mb-2">Scholarship based on previous results</h4>
                  <p className="text-gray-400">Received 50% waiver on tuition fees at BRAC University for maintaining a 3.8+ CGPA</p>
                </div>

                <div className="border-l-4 border-yellow-400/50 pl-6 hover:border-yellow-400 transition-colors">
                  <h4 className="text-xl font-semibold text-white mb-2">Bronze Award at Duke of Edinburgh International Awards</h4>
                  <p className="text-gray-400">It was a 6-month long program combining skill development, physical activity, voluntary service and adventurous journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};