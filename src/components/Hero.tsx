import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ChevronDown,
} from "lucide-react";
import developerImg from "../assets/omofon-potrait.jpeg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-16 overflow-hidden">
      {/* Topographic Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="topographic"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20 20c10 0 20 10 20 20s-10 20-20 20-20-10-20-20 10-20 20-20zm40 0c10 0 20 10 20 20s-10 20-20 20-20-10-20-20 10-20 20-20zm40 0c10 0 20 10 20 20s-10 20-20 20-20-10-20-20 10-20 20-20z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M30 50c15 0 30 15 30 30s-15 30-30 30-30-15-30-30 15-30 30-30zm60 0c15 0 30 15 30 30s-15 30-30 30-30-15-30-30 15-30 30-30z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M40 90c20 0 40 20 40 40s-20 40-40 40-40-20-40-40 20-40 40-40zm80 0c20 0 40 20 40 40s-20 40-40 40-40-20-40-40 20-40 40-40z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topographic)" />
        </svg>
      </div>

      {/* Hero */}
      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 md:py-24">
        {/* Hero Content with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <div className="space-y-2">
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                Hi, I am
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                Omofon.
              </h1>
              <p className="text-xl md:text-3xl text-foreground">
                I build web
                <br />& Mobile apps
              </p>
            </div>

            <button className="bg-primary-button hover:bg-primary-button/90 text-white px-8 py-3 rounded-full transition-colors cursor-pointer">
              HIRE ME
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end relative z-10">
            <div className="relative">
              <img
                src={developerImg}
                alt="Developer working"
                className="w-full max-w-md h-auto rounded-lg"
              />
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-gray-300 dark:border-gray-700 rounded-tr-lg"></div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Social Links */}
          <div className="flex space-x-4 pt-8">
            <a
              href="https://github.com/omofon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/omofzzz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/omofon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:omofon.u@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              aria-label="Mail"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </section>
  );
}
