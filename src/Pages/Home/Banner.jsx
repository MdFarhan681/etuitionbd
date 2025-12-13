import React from 'react';

const Banner = () => {
  return (
    <div className="w-full ">
      <main className="px-4 sm:px-6 lg:px-[7%] py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">

          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
           
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl 
                           font-bold leading-tight text-gray-900">
              Learn from <span className="text-[#51B893]">expert tutors </span>
              <br className="hidden sm:block" />
              Face-to-face or online
            </h1>

            <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg 
                          text-gray-700 leading-relaxed">
              Tuitional is a Virtual Learning Platform offering live sessions
              <br className="hidden sm:block" />
              for Class 5–8, O-Level & A-Level students
            </p>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-5 sm:p-6 border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select defaultValue="Bangla" className="select select-bordered select-info w-full text-sm">
                  <option disabled>Select Version</option>
                  <option>Bangla</option>
                  <option>English</option>
                </select>

                <select defaultValue="" className="select select-bordered select-info w-full text-sm">
                  <option disabled>Class</option>
                  <option>Class 8</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                  <option>O-Level</option>
                  <option>A-Level</option>
                </select>
              </div>

              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 items-center">
                <select defaultValue="" className="select select-bordered select-info w-full text-sm col-span-2 sm:col-span-2">
                  <option disabled>Subject</option>
                  <option>Math</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>English</option>
                  <option>Science</option>
                </select>

                <button className="btn btn-info text-white font-semibold text-sm hover:scale-105 transition-transform">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12 max-w-xs w-full text-center 
                              border border-gray-100 transition-all duration-500 hover:scale-105">
                
       
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                                w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-400 to-cyan-500 
                                rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-4m-6 0H5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M12 7v4m-3 4h6" />
                  </svg>
                </div>

            
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 
                                rounded-3xl blur-3xl opacity-70 -z-10 scale-110 group-hover:opacity-90 
                                transition-opacity duration-500"></div>

               
                <div className="mt-10 sm:mt-12">
                  <h3 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl 
                                 font-extrabold text-transparent bg-clip-text 
                                 bg-gradient-to-r from-teal-600 to-cyan-600">
                    3000+
                  </h3>
                  <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 
                                font-bold text-gray-800 mt-3">
                    Registered Students
                  </p>
                  <p className="text-sm sm:text-base mt-2 text-gray-600">
                    And growing every day!
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Banner;