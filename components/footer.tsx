import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-20 ">
      <div className="container mx-auto px-6 text-center space-y-6">
        <h2 className="text-2xl font-bold text-purple-400">Let's Connect!</h2>
        <p className="text-gray-400">Follow me on my social media and stay updated.</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/vikram-singh9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vikramsinghdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/vkramtechwala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition text-2xl"
          >
            <FaTwitter />
          </a>
        </div>
        <hr className="border-gray-700 my-6" />
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Vikram Singh. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
