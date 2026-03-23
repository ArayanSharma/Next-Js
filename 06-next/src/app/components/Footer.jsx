import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-white border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Your Company</h3>
            <p className="text-gray-400 text-sm">
              Building amazing web experiences with Next.js and modern technologies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                GitHub
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contract" className="text-gray-400 hover:text-white transition text-sm">
                  Contract
                </Link>
              </li>
              <li>
                <Link href="/home" className="text-gray-400 hover:text-white transition text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Features</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Fast Performance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  SEO Optimized
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Cost Efficient
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>📧 Email: contact@company.com</p>
              <p>📍 Location: Your City</p>
              <p>📞 Phone: +1 (123) 456-7890</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Your Company. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
