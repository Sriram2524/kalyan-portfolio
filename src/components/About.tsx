import React from 'react';
import { Download, User, MapPin, Mail, Phone, Calendar } from 'lucide-react';

const About = () => {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Kalyan_Jarpula_Resume (1).pdf';
    link.download = 'Kalyan_Jarpula_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-gray-700">
              <User className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Full Stack Developer</span>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Hyderabad, India</span>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-700">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>kalyan.jarpula@example.com</span>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-700">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>+91 9876543210</span>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-700">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span>Available for opportunities</span>
            </div>

            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              With a strong foundation in both frontend and backend development, I enjoy working 
              with technologies like React, Node.js, Python, and various databases. I'm always 
              eager to learn new technologies and take on challenging projects.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;