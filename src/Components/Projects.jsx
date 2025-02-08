import React from 'react';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Project 1 */}
      <div className="flex items-center w-full max-w-screen-lg relative z-10 mb-10 group">
        {/* Left Half: Project Info */}
        <div className="w-1/2 pr-8 group relative">
          <div className="rounded-lg border-t border-b border-l border-r shadow-lg p-6 flex flex-col items-start group-hover:h-[500px] transition-all duration-300">
            <h2 className="text-white text-2xl font-bold mb-4">Stone Paper Scissor</h2>
            <p className="text-white mb-4">
              HTML CSS JAVA-SCRIPT
            </p>

            {/* Expanded info (appears on hover) */}
            <div className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-all duration-300">
              <h3 className="text-white text-lg font-semibold">Detailed Project 1 Info</h3>
              <p className="text-white">
                More information about project 1. Nulla facilisi. Donec scelerisque urna at urna venenatis scelerisque.
              </p>
            </div>
          </div>
        </div>

        {/* Right Half: Project Image */}
        <div className="w-1/2 flex justify-center relative">
          {/* Image initially outside the div (to the right), comes in frame on hover */}
          <img
            src="src/assets/Projectimages/project1.jpeg"
            alt="Project 1"
            className="w-full h-[500px] rounded-lg object-cover absolute right-[-60px] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:right-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex items-center w-full max-w-screen-lg relative z-10 mb-10 group">
        {/* Left Half: Project Image */}
        <div className="w-1/2 flex justify-end relative">
          {/* Image initially outside the div (to the left), comes in frame on hover */}
          <img
            src="src/assets/Projectimages/project2.jpeg"
            alt="Project 2"
            className="w-full h-[500px] pr-3 rounded-lg object-fill absolute left-[-60px] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:left-0 transition-all duration-500"
          />
        </div>

        {/* Right Half: Project Info */}
        <div className="w-1/2 ml-auto group relative">
          <div className="border-t border-b border-l border-r rounded-lg shadow-lg p-6 flex flex-col items-start group-hover:h-[500px] transition-all duration-300">
            <h2 className="text-white text-2xl font-bold mb-4">Amazon Clone</h2>
            <p className="text-white mb-4">
              HTML CSS JAVA-SCRIPT
            </p>

            {/* Expanded info (appears on hover) */}
            <div className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-all duration-300">
              <h3 className="text-white text-lg font-semibold">Detailed Project 2 Info</h3>
              <p className="text-white">
                More information about project 2. Nulla facilisi. Donec scelerisque urna at urna venenatis scelerisque.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="flex items-center w-full max-w-screen-lg relative z-10 mb-10 group">
        {/* Left Half: Project Info */}
        <div className="w-1/2 pr-8 group relative">
          <div className="border-t border-b border-l border-r rounded-lg shadow-lg p-6 flex flex-col items-start group-hover:h-[500px] transition-all duration-300">
            <h2 className="text-white text-2xl font-bold mb-4">Study Schedule Generator</h2>
            <p className="text-white mb-4">
              A brief description of project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Expanded info (appears on hover) */}
            <div className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-all duration-300">
              <h3 className="text-white text-lg font-semibold">Detailed Project 3 Info</h3>
              <p className="text-white">
                More information about project 3. Nulla facilisi. Donec scelerisque urna at urna venenatis scelerisque.
              </p>
            </div>
          </div>
        </div>

        {/* Right Half: Project Image */}
        <div className="w-1/2 flex justify-center relative">
          {/* Image initially outside the div (to the right), comes in frame on hover */}
          <img
            src="src/assets/Projectimages/project3.jpg"
            alt="Project 3"
            className="w-full h-[500px] rounded-lg object-fill absolute right-[-60px] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:right-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
