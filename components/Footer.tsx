export function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-semibold text-white mb-4">
            <img src="/icons/kairos-white.svg" alt="KAIROS Logo" className="h-7 w-7" />
            KAIROS
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Real-time knowledge-driven AI for modern enterprises. Turn your data and
              domain expertise into reliable, explainable intelligence.
            </p>
          </div>
  
          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/technology" className="hover:text-white transition">Technology</a></li>
              <li><a href="/use-cases" className="hover:text-white transition">Use Cases</a></li>
              <li><a href="/research" className="hover:text-white transition">Research</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <p className="text-gray-400 text-sm mb-4">
              Interested in integrating real-time reasoning into your enterprise stack?
              Reach out to our team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
            >
              Contact Us
            </a>
          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} KAIROS. All rights reserved.
        </div>
      </footer>
    );
  }
  