import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen  text-white flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full space-y-8">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700">Contact Information</h2>
        {/* <p className="text-lg text-center text-gray-500">Feel free to reach out to me via the following channels:</p> */}

        <div className="space-y-6">
          {/* Email Section */}
          <div className="flex items-center space-x-4 hover:bg-indigo-50 p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            <svg className="w-8 h-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M2 2a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm10 12h2V8h-2v6zM8 12h2V8H8v4z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Email</h3>
              <p className="text-gray-700 hover:text-indigo-500"><a href="mailto:youremail@example.com">swaroopwayadande@gmail.com</a></p>
            </div>
          </div>


          {/* Location Section */}
          <div className="flex items-center space-x-4 hover:bg-indigo-50 p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            <svg className="w-8 h-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 2a8 8 0 11-7.467 5.342A5.99 5.99 0 006 10v4a2 2 0 002 2h4a2 2 0 002-2v-4a5.99 5.99 0 00-2.533-3.658A8 8 0 0110 2zm0 3a5 5 0 00-4.774 3.58A4.002 4.002 0 018 10v4a2 2 0 002 2h4a2 2 0 002-2v-4a4.002 4.002 0 00-1.226-2.42A5 5 0 0010 5z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Location</h3>
              <p className="text-gray-700 hover:text-indigo-500">Sangli, Maharashtra, India - 415411</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex items-center space-x-4 hover:bg-indigo-50 p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            <svg className="w-8 h-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M17.293 12.707a1 1 0 000-1.414L11.586 6H16a1 1 0 100-2H8a1 1 0 100 2h4.414l-5.707 5.707a1 1 0 101.414 1.414l7-7a1 1 0 000-1.414l-7 7z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Social Media</h3>
              <p className="text-gray-700">
                <a href="https://www.linkedin.com/in/yourprofile" className="text-indigo-600 hover:text-indigo-900">LinkedIn</a> | 
                <a href="https://twitter.com/yourprofile" className="text-indigo-600 hover:text-indigo-900"> Twitter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
