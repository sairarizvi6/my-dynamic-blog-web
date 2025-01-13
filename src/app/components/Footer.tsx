import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h1 className="text-3xl font-normal">Saira Rizvi AI-Tech Blog</h1>
            <p className="text-sm text-red-200 mt-2">
              Empowering your AI-Tech journey, one post at a time.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/saira-rizvi-3981aa295/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/sairarizvi66"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:fati061022@gmail.com"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          <div className="text-red-300">
            <p className="text-sm">
              © {new Date().getFullYear()} Saira Rizvi AI-Tech Blog. <br />
              ❣Created with passion for technology.❣
            </p>
          </div>
        </div>

        <div className="mt-4 border-t border-green-300 pt-4 text-center">
          <p className="text-sm text-red-50">
            Designed and developed by Saira Rizvi.
          </p>
        </div>
      </div>
    </footer>
  );
}
